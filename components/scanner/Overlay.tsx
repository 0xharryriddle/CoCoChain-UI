import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const innerDimension = 300;

// const outer = react

const Overlay = () => {
    return (
        <View>
            <Text>Overlay</Text>
        </View>
    )
}

export default Overlay

const styles = StyleSheet.create({})