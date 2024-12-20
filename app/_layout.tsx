import { DarkTheme, DefaultTheme } from "../styles/index";
import { useFonts } from 'expo-font';
import { Slot, Stack, Tabs } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import GlobalProvider from '@/context/GlobalProvider';
import CustomThemeProvider from '@/context/CustomThemeProvider';
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import * as constants from "@/utils/constants.util"
import { client } from "@/config/apolo";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <GlobalProvider>
          <CustomThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
            {/* <Stack>
            <Stack.Screen name="(auth)" />
          </Stack> */}
            <Slot />
          </CustomThemeProvider>
        </GlobalProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
