import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/hooks/useTheme';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { generateQRCode } from '@/utils/qrcode.util';


const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const ProductDashboardScreen = () => {
    const { colors, fonts } = useTheme();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [qrCodeData, setQrCodeData] = useState<any>();

    const { cocoChainId, productId } = useLocalSearchParams()


    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <SafeAreaView
            style={{
                backgroundColor: Colors.light.background,
                height: '100%',
                flex: 1, // Ensure SafeAreaView expands to fill the screen
                gap: screenHeight * 0.04,
            }}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Trở về</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    resizeMode="cover"
                    source={require("@/assets/images/coconut/coconut_1.jpg")}
                    style={styles.image}
                />
            </View>
            <View style={[
                {
                },
                styles.informationContainer
            ]}>
                <Text style={[
                    {
                        ...fonts.sectionTitle,
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    }
                ]}>Dừa xiêm xanh Bến Tre</Text>
                <View style={[
                    styles.addressContainer
                ]}>
                    <View style={[
                        {
                            height: 40,
                            width: 40,
                            backgroundColor: colors.primary,
                            padding: 5,
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderRadius: 9999
                        }
                    ]}>
                        <Ionicons name='location-outline' color={colors.text} size={25} style={[{
                            alignSelf: 'center',
                            backgroundColor: colors.darkText,
                            borderRadius: 999
                        }]} />
                    </View>
                    <View style={[
                        {
                            flexDirection: 'column',
                            gap: screenHeight * 0.01,
                            flexShrink: 1 // Ensure the text container shrinks to avoid overflowing
                        }
                    ]}>
                        <Text style={[
                            {
                                ...fonts.oneLinerSemiBold,
                                fontWeight: 'bold',
                                flexWrap: 'wrap'
                            }
                        ]}>HTX CoCo Chain</Text>
                        <Text style={[
                            {
                                ...fonts.oneLinerSemiBold,
                                fontWeight: 'bold',
                                flexWrap: 'wrap'
                            }
                        ]}
                            numberOfLines={2} // Limits the lines (optional)
                            ellipsizeMode="tail" // Truncate if too long (optional)
                        >
                            Số 12, tổ 8, khu phố 7, ấp Vĩnh Hưng, xã Mỹ Thạnh, huyện Chợ Lách, tỉnh Bến Tre
                        </Text>
                    </View>
                </View>
                <View style={[
                    styles.addressContainer
                ]}>
                    <View style={[
                        {
                            height: 40,
                            width: 40,
                            backgroundColor: colors.primary,
                            padding: 5,
                            alignContent: 'center',
                            justifyContent: 'center',
                            borderRadius: 9999
                        }
                    ]}>
                        <Ionicons name='location-outline' color={colors.text} size={25} style={[{
                            alignSelf: 'center',
                            backgroundColor: colors.darkText,
                            borderRadius: 999
                        }]} />
                    </View>
                    <View style={[
                        {
                            flexDirection: 'column',
                            gap: screenHeight * 0.01,
                            flexShrink: 1 // Ensure the text container shrinks to avoid overflowing
                        }
                    ]}>
                        <Text style={[
                            {
                                ...fonts.oneLinerSemiBold,
                                fontWeight: 'bold',
                                flexWrap: 'wrap'
                            }
                        ]}>HTX CoCo Chain</Text>
                        <Text style={[
                            {
                                ...fonts.oneLinerSemiBold,
                                fontWeight: 'bold',
                                flexWrap: 'wrap'
                            }
                        ]}
                            numberOfLines={2} // Limits the lines (optional)
                            ellipsizeMode="tail" // Truncate if too long (optional)
                        >
                            Số 12, tổ 8, khu phố 7, ấp Vĩnh Hưng, xã Mỹ Thạnh, huyện Chợ Lách, tỉnh Bến Tre
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[]}>
                <CustomButton
                    containerStyles={{
                        backgroundColor: colors.darkText,
                        shadowColor: colors.text,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        elevation: 5,
                        borderRadius: 50,
                        width: screenWidth * 0.75,
                        alignSelf: 'center'
                    }}
                    title={<Text
                        style={[
                            {
                                ...fonts.sectionInnerTitle,
                                fontWeight: 'bold'
                            }
                        ]}
                    >
                        QR Code
                    </Text>}
                    handlePress={() => {
                        setQrCodeData({
                            cocoChainId,
                            productId
                        });
                        setIsModalVisible(true); // Show the modal
                    }}
                />
            </View >
            <View style={[]}>
                <CustomButton containerStyles={{
                    backgroundColor: colors.primary,
                    borderRadius: 50,
                    width: screenWidth * 0.75,
                    alignSelf: 'center',
                    paddingHorizontal: 60,
                }}
                    handlePress={() => router.push("/")}
                    title={
                        <Text style={[
                            {
                                ...fonts.sectionInnerTitle,
                                fontWeight: 'bold',
                            },
                        ]}>Xem chi tiết</Text>
                    } />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>QR Code</Text>
                        {/* {qrCodeData ? (
                            // generateQRCode(qrCodeData) // Render the QR Code
                            <Image
                                src="./assets/images/qr-code.png"
                                style={{
                                    width: 200,
                                    height: 200,
                                }} />
                        ) : (
                            <Text>Loading QR Code...</Text>
                        )} */}
                        <Image resizeMode='cover' source={require("@/assets/images/qr-code.png")} style={{
                            width: 200,
                            height: 200,
                        }} />
                        <TouchableOpacity onPress={closeModal} style={[styles.closeButton, {
                            backgroundColor: colors.primary
                        }]}>
                            <Text style={styles.closeButtonText}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView >
    )
}

export default ProductDashboardScreen

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
    },
    informationContainer: {
        flexDirection: 'column',
        paddingHorizontal: screenWidth * 0.05,
        width: '100%',
        gap: screenHeight * 0.02
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: screenWidth * 0.04,
        width: '100%',
        flexWrap: 'wrap',
        height: 'auto',
        flexShrink: 1,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: screenWidth * 0.8,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})