import { Dimensions, LayoutChangeEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Colors } from '@/constants/Colors';
import TabBarButton from './TabBarButton';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import ScannerTabItem from '@/components/scanner/ScannerTabItem';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const [dimensions, setDimensions] = useState<{
        height: number,
        width: number
    }>({
        height: 20,
        width: 100
    });

    const buttonWidth = dimensions.width / state.routes.length;

    const onTabBarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        })
    };

    const tabPositionX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: tabPositionX.value
                }
            ]
        }
    });

    return (
        <View onLayout={onTabBarLayout} style={styles.tabBar}>
            <Animated.View
                style={[
                    animatedStyle,
                    // {
                    //     position: 'absolute',
                    //     backgroundColor: Colors.light.background,
                    //     borderRadius: 50,
                    //     marginHorizontal: 12,
                    //     height: dimensions.height - 40,
                    //     width: buttonWidth - 20,
                    // }
                ]}>

            </Animated.View>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        tabPositionX.value = withSpring(buttonWidth * index, { duration: 1500 })
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        route.name == 'scanner'
                            ? <ScannerTabItem onPress={onPress} />
                            : <TabBarButton
                                color={isFocused ? Colors.light.primary : Colors.light.black}
                                focused={isFocused}
                                label={label}
                                onLongPress={onLongPress}
                                onPress={onPress}
                                routeName={route.name}
                                key={route.name} />
                    );
                })
            }
        </View >
    );
}

export default CustomTabBar

const styles = StyleSheet.create({
    tabBar: {
        // bottom: screenHeight * 0.025,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
        paddingVertical: 15,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: Colors.light.black,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
})