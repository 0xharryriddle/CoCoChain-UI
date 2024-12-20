import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Vibration, Linking, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import BarcodeScanner from '../components/BarcodeScanner';
import { router } from 'expo-router';
import { Camera, CameraView } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useGlobalContext } from '@/context/GlobalProvider';

const ScannerScreen = () => {
    const { setLoading } = useGlobalContext();

    const [hasCameraPermission, setCameraPermission] = useState<boolean | null>(
        null
    );
    const [hasAudioPermission, setAudioPermission] = useState<boolean | null>(
        null
    );
    const [isScanning, setIsScanning] = useState<boolean>(true);

    useEffect(() => {
        const requestPermissions = async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const audioPermission = await Camera.requestMicrophonePermissionsAsync();

            setCameraPermission(cameraPermission.status === "granted");
            setAudioPermission(audioPermission.status === "granted");
        };

        requestPermissions();
    }, []);

    useEffect(() => {
        if (hasCameraPermission !== null && hasAudioPermission !== null) {
            // Check permissions and execute logic when both permissions are set
            if (!hasCameraPermission || !hasAudioPermission) {
                Alert.alert(
                    "Camera Permissions Required",
                    "You must grant access to your camera to scan QR codes",
                    [
                        { text: "Go to settings", onPress: goToSettings },
                        {
                            text: "Cancel",
                            onPress: () => {
                                router.dismissAll();
                            },
                            style: "cancel",
                        },
                    ]
                );
            }
        }
    }, [hasCameraPermission, hasAudioPermission]);

    const handleBarCodeScanned = async ({ data }: any) => {
        setTimeout(() => {
        }, 1000);
        setLoading(true);
        if (!isScanning) return;
        setIsScanning(false);

        Vibration.vibrate();
        console.log("QR Code Data:", data);

        // Example data for testing
        // data = `screen://(product)/product?productId=${productId}&cocoChainId=${cocoChainId}`; // Mock data

        const validScreens = ["(product)/product", "(app)/(tabs)/farmerHome"];

        try {
            if (data.startsWith("screen://")) {
                const url = data.replace("screen://", "");
                const [screenName, queryParams] = url.split("?");

                if (validScreens.includes(screenName)) {
                    let params = {};
                    if (queryParams) {
                        params = Object.fromEntries(new URLSearchParams(queryParams));
                    }

                    // Debugging
                    console.log("Screen Name:", screenName);
                    console.log("Query Params:", params);

                    // Navigate with parameters
                    router.replace({
                        pathname: screenName,
                        params
                    });
                } else {
                    Alert.alert("Invalid QR Code", "The scanned QR code does not match any screen.");
                }
            } else {
                Alert.alert("Invalid QR Code", "The scanned QR code is not recognized.");
            }
        } catch (error) {
            console.error("Error processing QR code:", error);
            Alert.alert("Error", "An error occurred while processing the QR code.");
        } finally {
            // Re-enable scanning after a delay
            setTimeout(() => {
                setLoading(false);
                setIsScanning(true);
            }, 3000); // 3-second cooldown before allowing the next scan
        }
    };

    const goToSettings = () => {
        Linking.openSettings();
    };

    function delay(time: number) {
        return new Promise<void>(function (resolve, reject) {
            setTimeout(() => resolve(), time);
        });
    }

    if (hasCameraPermission && hasAudioPermission) {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    {/* Back bar */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.replace("/")}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Trở về</Text>
                    </View>

                    {/* Camera view */}
                    <CameraView
                        // autofocus='on'
                        onBarcodeScanned={isScanning ? handleBarCodeScanned : undefined}
                        barcodeScannerSettings={{
                            barcodeTypes: ["qr"],
                        }}
                        style={{ height: Dimensions.get("window").height - 50 }}
                    />
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

export default ScannerScreen;