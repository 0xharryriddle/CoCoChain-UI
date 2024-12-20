import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useAsyncStorage<T>(key: string, defaultValue: T) {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);

  useEffect(() => {
    const loadValue = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setStoredValue(JSON.parse(value));
        } else {
          setStoredValue(defaultValue);
        }
      } catch (error) {
        console.error(`Error loading ${key} from AsyncStorage:`, error);
      }
    };
    loadValue();
  }, [key]);

  const setValue = async (value: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(`Error setting ${key} in AsyncStorage:`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useAsyncStorage;
