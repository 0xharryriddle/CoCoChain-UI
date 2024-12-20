import { View, Text, StatusBar, Dimensions, TouchableOpacity, SafeAreaView, } from 'react-native'
import { router, Slot, Stack } from 'expo-router'
import Loader from '@/components/Loader';
import { useGlobalContext } from '@/context/GlobalProvider';
import { ApolloProvider } from "@apollo/client"
import { client } from '@/config/apolo';

import Ionicons from '@expo/vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';

import { useColorScheme } from '@/hooks/useColorScheme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const AuthLayout = () => {
    const { loading } = useGlobalContext();
    const { colors, fonts } = useTheme();

    return (
        <ApolloProvider client={client}>
            <Loader isLoading={
                loading
            } />
            <Slot />
        </ApolloProvider>
    )
}

export default AuthLayout