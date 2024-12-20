import { ReactNode } from "react";

export interface Props {
  className?: string;
  children?: ReactNode;
  [prop: string]: any;
}

export type RouteName =
  | "home"
  | "menu"
  | "scanner"
  | "notification"
  | "profile";

export type LanguageItem = {
  label: string;
  value: Language;
};

export type Language = "vn" | "uk";

export type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: {
      [key: string]: {
        enabled: string;
        hovered: string;
        pressed: string;
      };
    };
    text: string;
    darkText: string;
    border: string;
    notification: string;
  };
  fonts: {
    screenTitle: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    sectionTitle: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    sectionInnerTitle: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    body: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    oneLinerRegular: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    oneLinerSemiBold: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    smallRegular: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    smallSemiBold: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
    extraSmallSemiBold: {
      fontFamily: string;
      fontWeight: any;
      fontSize: number;
      lineHeight: number;
    };
  };
};
