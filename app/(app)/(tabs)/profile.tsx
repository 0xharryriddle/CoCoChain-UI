import { View, Text, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomButton from '@/components/CustomButton';
import { useGlobalContext } from '@/context/GlobalProvider';
import { router } from 'expo-router';
import useTheme from '@/hooks/useTheme';

const ProfileScreen = () => {
    const { signOut, setLoading, currentUser } = useGlobalContext();

    const { colors } = useTheme();

    const signOutHandler = async () => {
        try {
            setLoading(true);
            await signOut();
            router.replace("/");
        } catch (error) {
            console.log(error);
            Alert.alert("Sign out failed", "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: currentUser?.profilePicture || 'https://via.placeholder.com/150' }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>{currentUser?.name || 'User Name'}</Text>
                <Text style={styles.profileEmail}>{currentUser?.email || 'currentUser@example.com'}</Text>
            </View>

            <View style={styles.buttonContainer}>
                {/* <CustomButton
                    containerStyles={styles.button}
                    title={<Text style={styles.buttonText}>Edit Profile</Text>}
                // handlePress={() => router.push('/edit-profile')}
                /> */}
                <CustomButton
                    containerStyles={{
                        ...styles.button,
                        backgroundColor: colors.primary
                    }}
                    title={<Text style={styles.buttonText}>Log out</Text>}
                    handlePress={signOutHandler}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileEmail: {
        fontSize: 18,
        color: 'gray',
    },
    buttonContainer: {
        width: '100%',
    },
    button: {
        // padding: 15,
        // borderRadius: 10,
        // marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ProfileScreen;
