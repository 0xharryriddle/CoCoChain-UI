import type { Theme } from "../utils/types.util";
import { Colors } from "../constants/Colors";

const DarkTheme: Theme = {
    dark: false,
    colors: {
        primary: Colors.dark.primary,
        background: Colors.dark.background,
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
        text: Colors.dark.text,
        darkText: Colors.dark.text,
        border: Colors.gray[200],
        notification: Colors.critical.main
    },
};

export default DarkTheme;