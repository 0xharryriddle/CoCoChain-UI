
import { Colors } from '@/constants/Colors';
import { useGlobalContext } from '@/context/GlobalProvider'
import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Button, TouchableOpacity, TextInput, useColorScheme, Alert, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import CustomInput from '@/components/CustomInput';
import CustomDivider from '@/components/CustomDivider';
import CustomButton from '@/components/CustomButton';
import { useSession } from '@/context/GlobalProvider';
import useTheme from '@/hooks/useTheme';
import Loader from '@/components/Loader';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const SignInScreen = () => {
    const { colors, fonts } = useTheme();
    const { signIn, setLoading, loading } = useGlobalContext();
    const { session } = useSession();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [form, setForm] = useState<{
        phoneNumber: string,
        password: string,
    }>({
        phoneNumber: "",
        password: ""
    });

    const loginHandler = async () => {
        try {
            setLoading(true);
            await signIn({
                phoneNumber: form.phoneNumber,
                password: form.password
            });
            router.replace("/home")
        }
        catch (error: any) {
            console.log(error);
            Alert.alert("Login failed", "Please check the phone number and password.");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={{
            backgroundColor: Colors.light.background,
            height: screenHeight,
            width: screenWidth
        }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Trở về</Text>
            </View>
            <View style={[
                styles.container
            ]}>
                <View style={[
                    styles.loginHeader,
                    {
                        // backgroundColor: colors.primary,
                    }
                ]}>
                    <Text style={[
                        {
                            ...fonts.screenTitle,
                            alignSelf: 'center',
                            color: colors.primary,
                            fontWeight: 'bold'
                        }
                    ]}>Đăng nhập</Text>
                </View>
                <View style={[
                    styles.loginDashboard,

                ]}>
                    <View style={[
                        styles.loginForm,
                        {
                        }
                    ]}>
                        <CustomInput containerStyle={
                            {
                            }
                        }
                            title={
                                <Text style={[
                                    {
                                        ...fonts.sectionInnerTitle,
                                        fontWeight: 'bold'
                                    }
                                ]}>Số điện thoại</Text>
                            }
                            iconName={"call-outline"}
                            iconSize={screenHeight * 0.02 + screenWidth * 0.02}
                            iconColor={colors.text}
                            placeHolder='Nhập số điện thoại'
                            value={form.phoneNumber}
                            onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
                        />
                        <CustomInput title={
                            <Text style={[
                                {
                                    ...fonts.sectionInnerTitle,
                                    fontWeight: 'bold'
                                }
                            ]}>Mật khẩu</Text>
                        }
                            iconName={"lock-closed-outline"}
                            iconSize={screenHeight * 0.02 + screenWidth * 0.02}
                            iconColor={colors.text}
                            placeHolder='Nhập mật khẩu'
                            secureTextEntry={true}
                            value={form.password}
                            onChangeText={(text) => setForm({ ...form, password: text })}
                        />
                    </View>
                    <View style={[styles.buttonContainer]}>
                        <CustomButton
                            title={<Text
                                style={[
                                    {
                                        ...fonts.oneLinerSemiBold,
                                        color: colors.darkText,
                                        fontWeight: 'bold'
                                    }
                                ]}
                            >Đăng nhập</Text>}
                            containerStyles={
                                {
                                    backgroundColor: colors.primary,
                                    borderRadius: 50,
                                    width: screenWidth * 0.75,
                                    alignSelf: 'center',
                                    paddingHorizontal: 60,
                                }
                            }
                            handlePress={loginHandler}
                        />
                        <View style={[
                            {
                                flexDirection: 'column',
                                gap: screenHeight * 0.015
                            }
                        ]}>
                            <Text style={[
                                {
                                    ...fonts.smallSemiBold,
                                    fontWeight: 'bold'
                                }
                            ]}>Đã có tài khoản hộ nông sản ?</Text>
                            <CustomButton
                                title={<Text
                                    style={[
                                        {
                                            ...fonts.oneLinerSemiBold,
                                            color: colors.text,
                                            fontWeight: 'bold'
                                        }
                                    ]}
                                >Đăng ký</Text>}
                                containerStyles={
                                    {
                                        backgroundColor: colors.darkText,
                                        shadowColor: colors.text,
                                        shadowOffset: { width: 0, height: 1 },
                                        shadowOpacity: 0.8,
                                        elevation: 5,
                                        borderRadius: 50,
                                        width: screenWidth * 0.75,
                                        alignSelf: 'center'
                                    }
                                }
                                handlePress={() => router.replace("/(auth)/sign-up")}
                            />
                        </View>
                        <View style={styles.logoContainer}>
                            <Image resizeMode='cover' source={require("@/assets/images/coco-chain-logo.png")} style={styles.logoImage} />
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView >
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: screenHeight,
        width: screenWidth,
        // paddingHorizontal: 6
    },
    loginHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: screenHeight * 0.03
    },
    loginDashboard: {
        height: screenHeight * 0.75,
        width: '100%',
        flexDirection: 'column',
    },
    loginForm: {
        width: '100%',
        gap: screenHeight * 0.04,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 29
    },
    buttonContainer: {
        width: '100%',
        height: 80,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'column',
        gap: screenHeight * 0.02
    },
    input: {
        width: screenWidth * 0.5,
        height: 'auto',
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
        alignSelf: 'center',
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
})