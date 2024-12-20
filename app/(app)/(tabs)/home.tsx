import { useGlobalContext } from '@/context/GlobalProvider';
import React from 'react'

import { Image, StyleSheet, Platform, View, Text } from 'react-native';

const HomeScreen = () => {
    const { currentUser } = useGlobalContext();

    console.log(currentUser);
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
