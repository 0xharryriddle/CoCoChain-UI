/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const teal = "#0C828B";
const orange = "#FFA800";
const green = "#0E995C";
const blue = "#008EDD";
const red = "#E05274";
const neutral = "#DFE2E6";
const black = "#181C32";
const dark = "#1f1f1f";
const white = "#FFFFFF";

const gray = {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

const primary = {
  main: "#00A257",
  50: "#EBFFF6",
  100: "#CCFFE7",
  200: "#99FFD0",
  300: "#007A42",
  400: "#00522C",
  500: "#003D21",
};

const secondary = {
  main: "#00A257",
  50: "#EBFFF6",
  100: "#CCFFE7",
  200: "#99FFD0",
  300: "#007A42",
  400: "#00522C",
  500: "#003D21",
};

const critical = {
  main: "#FF5656",
  300: "#B33C3C",
  700: "#662222",
};

export const Colors = {
  primary,
  secondary,
  gray,
  critical,
  orange,
  green,
  blue,
  neutral,
  teal,
  black,
  white,
  darkColor: dark,
  light: {
    text: gray[600],
    darkText: white,
    primary: primary.main,
    background: gray[100],
    tint: tintColorLight,
    icon: dark,
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    primary: "#005eff",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
