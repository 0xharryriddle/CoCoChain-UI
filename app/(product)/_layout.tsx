import { View, Text, StatusBar, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import { Slot, Stack } from 'expo-router'
import Loader from '@/components/Loader';
import { useGlobalContext } from '@/context/GlobalProvider';
import useTheme from '@/hooks/useTheme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const ProductLayout = () => {
    const { loading } = useGlobalContext();
    const { colors } = useTheme();

    // if (loading) {
    //     return <Loader isLoading={loading} />
    // }

    return (
        <SafeAreaView
            style={[styles.container,
            {
                backgroundColor: colors.background
            }
            ]}
        >
            <ScrollView
                contentContainerStyle={styles.scrollView} // Allows content to grow and scroll
                scrollEnabled={true} // Enable scrolling explicitly
            >
                <View style={styles.logoContainer}>
                    <Image
                        resizeMode="cover"
                        source={require("@/assets/images/coco-chain-logo.png")}
                        style={styles.logoImage}
                    />
                </View>
                <Slot />
            </ScrollView>
        </SafeAreaView>

    )
}

export default ProductLayout

const styles = StyleSheet.create({
    logoContainer: {
        width: '100%',
        height: screenHeight * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        paddingHorizontal: screenWidth * 0.05
    },
    scrollView: {
        flexGrow: 1,
        paddingBottom: 20, // Add some padding at the bottom for extra spacing
    },
});