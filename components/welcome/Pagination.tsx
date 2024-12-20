import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/data/SliderData'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
    items: ImageSliderType[];
    paginationIndex: number;
    scrollX: SharedValue<number>;
}

const { width: screenWidth } = Dimensions.get('screen');

const Pagination = (props: Props) => {
    return (
        <View style={styles.container}>
            {
                props.items.map((_, index) => {
                    const pgAnimationStyle = useAnimatedStyle(() => {
                        const dotWidth = interpolate(
                            props.scrollX.value % (props.items.length * screenWidth),
                            [(index - 1) * screenWidth, index * screenWidth, (index + 1) * screenWidth],
                            [8, 20, 8],
                            Extrapolation.CLAMP
                        );
                        return {
                            width: dotWidth
                        }
                    })
                    return (
                        <Animated.View
                            style={[
                                styles.dot,
                                {
                                    backgroundColor: props.paginationIndex === index ? '#222' : '#aaa',
                                },
                                pgAnimationStyle
                            ]}
                            key={index}
                        />
                    )
                })
            }
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        backgroundColor: '#aaa',
        width: 8,
        height: 8,
        marginHorizontal: 2,
        borderRadius: 8
    }
})