import { Animated, Easing, StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from '@/constants/Colors'

type Props = {
    label: string;
    placeHolder: string;
    containerStyles?: ViewStyle;
    labelStyles?: TextStyle;
    labelContainerStyles?: ViewStyle;
    inputStyles?: StyleProp<TextStyle>;
    duration?: number;
}

const CustomInputAnimation = ({ duration = 200, ...props }: Props) => {
    const transY = useRef(new Animated.Value(0));
    const borderWidth = useRef(new Animated.Value(1));
    const fontWeight = useRef(new Animated.Value(1));

    const transX = transY.current.interpolate({
        inputRange: [-50, 0],
        outputRange: [-20, 0],
        extrapolate: 'clamp',
    })

    const borderColor = borderWidth.current.interpolate({
        inputRange: [1, 2],
        outputRange: [Colors.light.black, Colors.light.teal],
        extrapolate: 'clamp'
    })

    const labelFontWeight = fontWeight.current.interpolate({
        inputRange: [1, 2],
        outputRange: [300, 700],
        extrapolate: 'clamp'
    })

    const handleFocus = () => {
        animateTransform(-40);
        animateBorderWidth(2);
        animateLabelFontWeight(2);
    }

    const handleBlur = () => {
        animateTransform(0);
        animateBorderWidth(1);
        animateLabelFontWeight(1);
    }

    const animateTransform = (toValue: number) => {
        Animated.timing(transY.current, {
            toValue,
            duration,
            useNativeDriver: true,
            easing: Easing.ease
        }).start();
    }

    const animateBorderWidth = (toValue: number) => {
        Animated.timing(borderWidth.current, {
            toValue,
            duration,
            useNativeDriver: false,
            easing: Easing.ease
        }).start();
    }

    const animateLabelFontWeight = (toValue: number) => {
        Animated.timing(fontWeight.current, {
            toValue,
            duration,
            useNativeDriver: false,
            easing: Easing.ease
        }).start();
    }

    return (
        <Animated.View style={[
            styles.container,
            {
                borderWidth: borderWidth.current,
                borderColor,
            },
            props.containerStyles,
        ]}>
            <Animated.View style={[
                styles.labelContainer,
                {
                    transform: [
                        {
                            translateY: transY.current,
                        },
                        {
                            translateX: transX
                        }
                    ],
                },
                props.labelContainerStyles,
            ]}>
                <Animated.Text
                    style={[
                        {
                            fontWeight: labelFontWeight
                        },
                        props.labelStyles,
                    ]}
                >
                    {props.label}
                </Animated.Text>
            </Animated.View>
            <TextInput
                style={[
                    styles.input,
                    props.inputStyles
                ]}
                placeholder={props.placeHolder}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </Animated.View>
    )
}

export default CustomInputAnimation

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.neutral,
        borderRadius: 10,
        width: '80%',
        justifyContent: 'center',
        borderColor: Colors.light.black,
    },
    input: {
        padding: 20,
    },
    labelContainer: {
        position: 'absolute',
        padding: 20,
    }
})