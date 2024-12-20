import { createContext, useContext, useEffect } from "react";
import { LanguageItem, Props } from "@/utils/types.util";
import useAsyncStorage from "@/hooks/useAsyncStorage";
import { useStorageState } from "@/hooks/useStorageState";
import { User } from '../models/user.model';
import axios from "axios";
import * as constants from '@/utils/constants.util';
import { removeItem } from "@/lib/asyncStorage.lib";

const DEFAULT_LOGGED: boolean = false;
const DEFAULT_LOADING: boolean = false;
const DEFAULT_CURRENT_USER: any = undefined;
const DEFAULT_PUBLIC_KEY: any = undefined;
const DEFAULT_PRIVATE_KEY: any = undefined;
const DEFAULT_SESSION: any = undefined;
const DEFAULT_LANGUAGE: LanguageItem = {
  label: "Vietnamese",
  value: 'vn'
}

// TODO: Create User Model
interface GlobalContextProps {
  isLogged: boolean,
  setIsLogged: (one: boolean) => void,
  signIn: ({ phoneNumber, password }: { phoneNumber: string, password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  session?: string | null; // This is accessToken in the session
  isLoadingSession: boolean;
  currentUser?: any,
  loading: boolean,
  setLoading: (one: boolean) => void,
  language: LanguageItem,
  setLanguage: (one: LanguageItem) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  isLogged: DEFAULT_LOGGED,
  setIsLogged: () => { },
  signIn: async () => { },
  signOut: async () => { },
  session: DEFAULT_SESSION,
  isLoadingSession: DEFAULT_LOADING,
  currentUser: null,
  loading: DEFAULT_LOADING,
  setLoading: () => { },
  language: DEFAULT_LANGUAGE,
  setLanguage: () => { }
});

export const useGlobalContext = () => useContext(GlobalContext);

export const useSession = () => {
  const value = useContext(GlobalContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export default function GlobalProvider({ children }: Props) {
  const [[isLoadingSession, session], setSession] = useStorageState('session');
  const [isLogged, setIsLogged] = useAsyncStorage<boolean>('LOGGED', DEFAULT_LOGGED);
  const [currentUser, setCurrentUser] = useAsyncStorage<any>("CURRENT_USER", DEFAULT_CURRENT_USER);
  const [loading, setLoading] = useAsyncStorage<boolean>("LOADING", isLoadingSession);
  const [language, setLanguage] = useAsyncStorage<LanguageItem>("LANGUAGE", DEFAULT_LANGUAGE)

  // TODO: Tracking when changing user
  useEffect(() => {
    if (currentUser != null) {
      setCurrentUser(currentUser);
    }
  }, [currentUser]);

  return (
    <GlobalContext.Provider
      value={{
        isLogged: isLogged!,
        setIsLogged,
        loading: loading!,
        setLoading,
        language,
        setLanguage,
        signIn: async ({ phoneNumber, password }: { phoneNumber: string, password: string }) => {
          // TODO: Perform sign-in logic here
          const endpoint = `${constants.API_ENDPOINT}/api/authenticate/login`;
          const response = await axios.post(
            endpoint,
            {
              phoneNumber,
              password
            }
          );
          console.log(response.status);
          console.log(response.data.data);
          await setCurrentUser(response.data.data);
          // if (response.status === 200) {
          //   setIsLogged(true);
          //   setSession('xxx');
          //   setCurrentUser(response.data.data);
          // }
        },
        signOut: async () => {
          await removeItem('session');
          setIsLogged(false);
          await removeItem("CURRENT_USER")
        },
        session,
        isLoadingSession,
      }
      }
    >
      {children}
    </ GlobalContext.Provider >
  )
}
