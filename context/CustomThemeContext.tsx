import React from "react";
import { DefaultTheme } from '@/styles/index'
import { Theme } from "@/utils/types.util";

const CustomThemeContext = React.createContext<Theme>(DefaultTheme);

CustomThemeContext.displayName = "ThemeContext";

export default CustomThemeContext;