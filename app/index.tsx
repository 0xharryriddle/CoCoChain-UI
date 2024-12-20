import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, View, StatusBar, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useGlobalContext } from '@/context/GlobalProvider';
import { Redirect, router } from 'expo-router';
import Loader from '@/components/Loader';
import Slider from '@/components/welcome/Silder';
import { ImageSlider } from '@/data/SliderData';
import CustomButton from '@/components/CustomButton';
import useTheme from '@/hooks/useTheme';
import LanguageDropdown from '@/components/welcome/LanguageDropdown';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export default function WelcomeScreen() {
  const { colors, fonts } = useTheme();

  const { isLogged, loading } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href={"/home"} />

  return (
    <SafeAreaView style={[
      {
        backgroundColor: colors.background
      },
      styles.container
    ]}>
      <Loader isLoading={
        // loading ||
        false
      } />
      <View style={styles.languageContainer}>
        <LanguageDropdown />
        <TouchableOpacity
          // onPress={() => { router.push("/(product)/product") }}
          onPress={() => { router.push("/scanner") }}
        >
          <TabBarIcon
            name={'scan'}
            color={Colors.light.primary}
            style={[
              styles.iconStyle
            ]}
          />
        </TouchableOpacity>
      </View>
      <Slider itemList={ImageSlider} sliderStyles={{
        minHeight: screenWidth * 0.1
      }} />
      <View style={styles.logoContainer}>
        <Image resizeMode='cover' source={require("@/assets/images/coco-chain-logo.png")} style={styles.logoImage} />
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          title={
            <Text
              style={[
                {
                  color: colors.darkText,
                },
                fonts.sectionInnerTitle
              ]}
            >
              Đăng nhập
            </Text>
          }
          containerStyles={{
            backgroundColor: colors.card["filled"].enabled,
            width: screenWidth * 0.7,
            minHeight: 50
          }}
          handlePress={() => router.push("/(auth)/sign-in")} />
        <View style={styles.signupContainer}>
          <Text>Nếu không có tài khoản?</Text>
          <CustomButton
            title={
              <Text
                style={[
                  {
                    color: colors.primary,
                    ...fonts.oneLinerSemiBold
                  },
                ]}>
                Đăng ký
              </Text>
            }
            containerStyles={{
              backgroundColor: colors.card['ghost'].enabled,
              justifyContent: 'center'
            }}
            handlePress={() => router.push("/(auth)/sign-up")}
          />
        </View>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    paddingVertical: screenHeight * 0.01,
    justifyContent: 'space-around',
    height: '100%',
    gap: screenWidth * 0.05,
  },
  languageContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: screenWidth * 0.03
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    paddingHorizontal: screenWidth * 0.03
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  iconStyle: {
    fontSize: (screenWidth * 0.1 > screenHeight * 0.05) ? screenWidth * 0.1 : screenHeight * 0.05
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
});
