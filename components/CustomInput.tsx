import { Dimensions, StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewProps, ViewStyle } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

type CustomInputProps = {
    title?: React.ReactNode,
    iconName?: any,
    iconSize?: number,
    iconColor?: string,
    placeHolder?: string,
    inputStyle?: TextInputProps,
    containerStyle?: StyleProp<ViewStyle>,
    inputContainerStyle?: StyleProp<ViewStyle>,
    secureTextEntry?: boolean,
    value?: string,
    onChangeText?: (text: string) => void
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const CustomInput = ({
    title,
    iconName,
    iconSize = 20,
    iconColor,
    placeHolder,
    inputStyle,
    containerStyle,
    inputContainerStyle,
    secureTextEntry,
    value,
    onChangeText
}: CustomInputProps) => {

    return (
        <View style={[
            styles.container,
            containerStyle
        ]}>
            {title}
            <View style={[
                styles.inputContainer,
                inputContainerStyle
            ]}>
                {iconName && <Ionicons style={[
                    styles.icon
                ]} name={iconName} size={iconSize} color={iconColor} />}
                <TextInput
                    style={[
                        styles.input,
                        inputStyle
                    ]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeHolder}
                    keyboardType='default'
                    secureTextEntry={secureTextEntry || false}
                />
            </View>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: screenHeight * 0.02,
        alignContent: 'center',
        maxHeight: screenHeight * 0.5,
        width: screenWidth * 0.95,
        height: screenHeight * 0.1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 999,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: screenHeight * 0.07,
        paddingVertical: 10,
        paddingHorizontal: 0,
    },
})