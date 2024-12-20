import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, useEffect } from 'react'
import { Icons } from '@/constants/Icons';
import { Colors } from '@/constants/Colors';
import { renderIcon } from '@/utils/render.util';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface TabBarButtonProps {
    onPress: () => void;
    onLongPress: () => void;
    focused: boolean;
    routeName: string;
    color: string;
    label?: any;
}

const TabBarButton = ({
    onPress,
    onLongPress,
    focused,
    routeName,
    color,
    label
}: TabBarButtonProps) => {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(
            typeof focused === "boolean" ? (focused ? 1 : 0) : focused,
            { duration: 350 }
        );
    }, [scale, focused]);

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return {
            opacity
        }
    });

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1, .2]);

        const top = interpolate(scale.value, [0, 1], [0, 9]);

        return {
            transform: [
                {
                    scale: scaleValue,
                }
            ],
            top
        }
    })

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
                styles.tabBarItem
            ]}
        >
            <Animated.View
                style={[
                    animatedIconStyle
                ]}
            >
                {
                    renderIcon(routeName, focused)
                }
            </Animated.View>
            <Animated.Text
                style={[
                    { color: focused ? Colors.light.primary : Colors.darkColor },
                    animatedTextStyle
                ]}
            >
                {label}
            </Animated.Text>
        </Pressable >
    )
}

export default TabBarButton

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})