import { Dimensions, Pressable, PressableProps, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { ReactNode, useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { TabBarIcon } from '../navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

interface ScannerTabItemProps {
    onPress?: any;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const ScannerTabItem = ({ onPress }: ScannerTabItemProps) => {

    return (
        <TouchableHighlight
            style={styles.container}
            activeOpacity={0.6}
            underlayColor={Colors.light.red}
            onPress={onPress}
        >
            <View
                style={[
                    {
                        width: (screenWidth * 0.15 > screenHeight * 0.09) ? screenWidth * 0.15 : screenHeight * 0.09,
                        height: (screenWidth * 0.15 > screenHeight * 0.09) ? screenWidth * 0.15 : screenHeight * 0.09,
                        borderRadius: 35,
                        backgroundColor: Colors.light.neutral,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                ]}
            >
                <TabBarIcon
                    name={'scan'}
                    color={Colors.light.primary}
                    style={[
                        styles.iconStyle
                    ]}
                />
            </View>
        </TouchableHighlight>
    )
}

export default ScannerTabItem

const styles = StyleSheet.create({
    container: {
        top: -(screenHeight * 0.05),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.black,
        width: (screenWidth * 0.15 > screenHeight * 0.09) ? screenWidth * 0.15 : screenHeight * 0.09,
        height: (screenWidth * 0.15 > screenHeight * 0.09) ? screenWidth * 0.15 : screenHeight * 0.09,
        borderRadius: 35
    },
    iconStyle: {
        fontSize: (screenWidth * 0.1 > screenHeight * 0.05) ? screenWidth * 0.1 : screenHeight * 0.05
    }
})