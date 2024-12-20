import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface CustomButtonProps {
    title?: React.ReactNode;
    handlePress?: () => void;
    containerStyles?: ViewStyle;
    isLoading?: boolean
}

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    isLoading,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[
                isLoading ? {
                    opacity: 50
                } : {},
                styles.container,
                containerStyles
            ]}
            disabled={isLoading}
        >
            {title}

            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    style={{
                        marginLeft: 2
                    }}
                />
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        minHeight: 62,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
    }
});