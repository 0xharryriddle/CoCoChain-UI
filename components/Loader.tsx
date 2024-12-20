import useTheme from '@/hooks/useTheme';
import { BlurView } from 'expo-blur';
import { View, Text, Platform, Dimensions, ActivityIndicator, StyleSheet, Image } from 'react-native'

interface LoaderProps {
    isLoading: boolean;
}

const osName = Platform.OS;
const { height: screenHeight } = Dimensions.get("screen");

const Loader = ({ isLoading = false }: LoaderProps) => {
    const { colors } = useTheme();

    if (!isLoading) return null;

    return (
        <BlurView
            style={styles.container}
            intensity={10}
        >
            <ActivityIndicator
                animating={isLoading}
                color={colors.text}
                size={osName === "ios" ? 'large' : 50}
            />
            <Text style={styles.text}>Loading...</Text>
        </BlurView>
    );
}

export default Loader

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: screenHeight,
        gap: 4,
        zIndex: 10,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    text: {
        fontWeight: osName === 'ios' ? '600' : "500"
    }
});