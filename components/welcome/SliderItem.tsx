import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/data/SliderData'
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

type Props = {
    item: ImageSliderType;
    index: number;
    scrollX: SharedValue<number>
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const SliderItem = ({ item, index, scrollX }: Props) => {
    const rnAnimatedStyle = useAnimatedStyle(() => {
        const translateX = interpolate(
            scrollX.value,
            [(index - 1) * screenWidth, index * screenWidth, (index + 1) * screenWidth],
            [-screenWidth * 0.1, 0, screenWidth * 0.25],
            Extrapolation.CLAMP
        );
        const scale = interpolate(
            scrollX.value,
            [(index - 1) * screenWidth, index * screenWidth, (index + 1) * screenWidth],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
        )
        return {
            transform: [
                {
                    translateX,
                },
                {
                    scale
                }
            ]
        }
    });

    return (
        <Animated.View style={[styles.itemContainer, rnAnimatedStyle]} >
            <Image source={item.image} style={styles.image} />
            {/* <View style={styles.textContainer}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 34,
                    alignSelf: 'center'
                }}>{item.title}</Text>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 20,
                    opacity: 0.4
                }}>{item.description}</Text>
            </View> */}
        </Animated.View >
    )
}

export default SliderItem

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: screenWidth,
        minHeight: 100,
    },
    image: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.3,
        borderRadius: 20
    },
    textContainer: {
        justifyContent: 'center',
        width: screenWidth,
        paddingHorizontal: screenWidth * 0.1,
        gap: 10
    }
})