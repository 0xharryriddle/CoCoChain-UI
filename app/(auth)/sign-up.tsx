import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { Colors } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View, Text, useColorScheme, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const SignUpScreen = () => {
    const { colors, fonts } = useTheme();

    const signupHandler = () => { }

    return (
        <SafeAreaView
            style={{
                backgroundColor: Colors.light.background,
                flex: 1, // Ensure SafeAreaView expands to fill the screen
            }}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Back</Text>
            </View>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollView} // Allows content to grow and scroll
                scrollEnabled={true} // Enable scrolling explicitly
            >
                <View style={styles.signUpHeader}>
                    <Text
                        style={[
                            {
                                ...fonts.screenTitle,
                                alignSelf: 'center',
                                color: colors.primary,
                                fontWeight: 'bold',
                            },
                        ]}
                    >
                        Đăng ký
                    </Text>
                </View>
                <View style={styles.signUpDashboard}>
                    <View style={styles.signUpForm}>
                        <CustomInput
                            title={
                                <Text
                                    style={[
                                        {
                                            ...fonts.sectionInnerTitle,
                                            fontWeight: 'bold',
                                        },
                                    ]}
                                >
                                    Họ tên chủ hộ
                                </Text>
                            }
                            iconName={"call-outline"}
                            iconSize={screenHeight * 0.02 + screenWidth * 0.02}
                            iconColor={colors.text}
                            placeHolder="Nhập họ và tên"
                        />
                        <CustomInput
                            title={
                                <Text
                                    style={[
                                        {
                                            ...fonts.sectionInnerTitle,
                                            fontWeight: 'bold',
                                        },
                                    ]}
                                >
                                    Số điện thoại
                                </Text>
                            }
                            iconName={"lock-closed-outline"}
                            iconSize={screenHeight * 0.02 + screenWidth * 0.02}
                            iconColor={colors.text}
                            placeHolder="Nhập số điện thoại"
                        />
                        <CustomInput
                            title={
                                <Text
                                    style={[
                                        {
                                            ...fonts.sectionInnerTitle,
                                            fontWeight: 'bold',
                                        },
                                    ]}
                                >
                                    Địa chỉ hộ nông sản
                                </Text>
                            }
                            iconName={"call-outline"}
                            iconSize={screenHeight * 0.02 + screenWidth * 0.02}
                            iconColor={colors.text}
                            placeHolder="Nhập địa chỉ"
                        />
                        <CustomInput
                            title={
                                <Text
                                    style={[
                                        {
                                            ...fonts.sectionInnerTitle,
                                            fontWeight: 'bold',
                                        },
                                    ]}
                                >
                                    Mật khẩu
                                </Text>
                            }
                            iconName={"call-outline"}
                            iconSize={screenHeight * 0.02 + screenWidth * 0.02}
                            iconColor={colors.text}
                            placeHolder="Nhập mật khẩu"
                        />
                        <CustomInput
                            title={
                                <Text
                                    style={[
                                        {
                                            ...fonts.sectionInnerTitle,
                                            fontWeight: 'bold',
                                        },
                                    ]}
                                >
                                    Nhập lại mật khẩu
                                </Text>
                            }
                            iconName={"call-outline"}
                            iconSize={screenHeight * 0.02 + screenWidth * 0.02}
                            iconColor={colors.text}
                            placeHolder="Nhập lại mật khẩu"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            title={
                                <Text
                                    style={[
                                        {
                                            ...fonts.oneLinerSemiBold,
                                            color: colors.darkText,
                                            fontWeight: 'bold',
                                        },
                                    ]}
                                >
                                    Đăng ký
                                </Text>
                            }
                            containerStyles={{
                                backgroundColor: colors.primary,
                                borderRadius: 50,
                                width: screenWidth * 0.75,
                                alignSelf: 'center',
                                paddingHorizontal: 60,
                            }}
                            handlePress={signupHandler}
                        />
                        <CustomButton
                            title={
                                <Text
                                    style={[
                                        {
                                            ...fonts.oneLinerSemiBold,
                                            color: colors.text,
                                            fontWeight: 'bold',
                                        },
                                    ]}
                                >
                                    Trở về Đăng Nhập
                                </Text>
                            }
                            containerStyles={{
                                backgroundColor: colors.darkText,
                                shadowColor: colors.text,
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.8,
                                elevation: 5,
                                borderRadius: 50,
                                width: screenWidth * 0.75,
                                alignSelf: 'center',
                            }}
                            handlePress={() => router.replace("/(auth)/sign-in")}
                        />
                        <View style={styles.logoContainer}>
                            <Image
                                resizeMode="cover"
                                source={require("@/assets/images/coco-chain-logo.png")}
                                style={styles.logoImage}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    scrollView: {
        flexGrow: 1,
        paddingBottom: 20, // Add some padding at the bottom for extra spacing
    },
    signUpHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: screenHeight * 0.03,
    },
    signUpDashboard: {
        flexDirection: 'column',
        width: '100%',
    },
    signUpForm: {
        width: '100%',
        gap: screenHeight * 0.04,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 29
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        gap: screenHeight * 0.04,
    },
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
    header: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});