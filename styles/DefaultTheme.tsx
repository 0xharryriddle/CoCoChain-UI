import type { Theme } from "../utils/types.util";
import { Colors } from "../constants/Colors";
import { Platform } from "react-native";
import { fontFamily, fontWeight } from "@/constants/Typography";

const DefaultTheme: Theme = {
    dark: false,
    colors: {
        primary: Colors.light.primary,
        background: Colors.light.background,
        card: {
            elevated: {
                enabled: Colors.primary[300],
                hovered: Colors.primary[400],
                pressed: Colors.primary[500],
            },
            filled: {
                enabled: Colors.primary[300],
                hovered: Colors.primary[400],
                pressed: Colors.primary[500],
            },
            outlined: {
                enabled: Colors.white,
                hovered: Colors.white,
                pressed: Colors.white,
            },
            ghost: {
                enabled: Colors.light.background,
                hovered: Colors.gray[300],
                pressed: Colors.gray[300],
            }
        },
        text: Colors.light.text,
        darkText: Colors.light.darkText,
        border: Colors.gray[200],
        notification: Colors.critical.main
    },
    fonts: Platform.select({
        default: {
            screenTitle: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.semiBold,
                fontSize: 36,
                lineHeight: 36 * 1.3,
            },
            sectionTitle: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.semiBold,
                fontSize: 24,
                lineHeight: 24 * 1.3,
            },
            sectionInnerTitle: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.semiBold,
                fontSize: 16,
                lineHeight: 16 * 1.3,
            },
            body: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.normal,
                fontSize: 14,
                lineHeight: 14 * 1.5,
            },
            oneLinerRegular: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.normal,
                fontSize: 14,
                lineHeight: 16,
            },
            oneLinerSemiBold: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.semiBold,
                fontSize: 14,
                lineHeight: 16,
            },
            smallRegular: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.normal,
                fontSize: 12,
                lineHeight: 12 * 1.3,
            },
            smallSemiBold: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.semiBold,
                fontSize: 12,
                lineHeight: 12 * 1.3,
            },
            extraSmallSemiBold: {
                fontFamily: fontFamily.POPPINS_FONT,
                fontWeight: fontWeight.semiBold,
                fontSize: 10,
                lineHeight: 10,
            },
        }
    })
};

export default DefaultTheme;
