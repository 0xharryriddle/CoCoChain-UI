
import { Redirect, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import Loader from '@/components/Loader';
import { useGlobalContext, useSession } from '@/context/GlobalProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function AppRoot() {

    const { isLoadingSession, loading } = useGlobalContext();
    const { session } = useSession();

    if (isLoadingSession || loading) {
        <Loader isLoading={isLoadingSession || loading} />
    }

    if (!session) {
        <Redirect href={"/(auth)/sign-in"} />
    }

    return (
        <>
            <Slot />
        </>
    );
}
