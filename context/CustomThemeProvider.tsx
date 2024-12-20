import React from "react";
import { Theme } from "@/utils/types.util";
import CustomThemeContext from "./CustomThemeContext";

type Props = {
    value: Theme;
    children: React.ReactNode;
}

export default function CustomThemeProvider({ value, children }: Props) {
    return <CustomThemeContext.Provider value={value}>{children}</CustomThemeContext.Provider>
}