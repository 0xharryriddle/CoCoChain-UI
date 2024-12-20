import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
}

export const ImageSlider: ImageSliderType[] = [
    // {
    //     title: "Welcome 0",
    //     image: require("@/assets/images/welcome/welcome_0.jpg"),
    //     description: "Welcome to CoCoChain"
    // },
    {
        title: "Welcome 1",
        image: require("@/assets/images/welcome/welcome_1.jpg"),
        description: "Welcome to CoCoChain"
    },
    {
        title: "Welcome 0",
        image: require("@/assets/images/welcome/welcome_2.jpg"),
        description: "Welcome to CoCoChain"
    },
    {
        title: "Welcome 0",
        image: require("@/assets/images/welcome/welcome_3.jpg"),
        description: "Welcome to CoCoChain"
    },
    {
        title: "Welcome 0",
        image: require("@/assets/images/welcome/welcome_4.jpg"),
        description: "Welcome to CoCoChain"
    },
    {
        title: "Welcome 0",
        image: require("@/assets/images/welcome/welcome_5.jpg"),
        description: "Welcome to CoCoChain"
    },
    {
        title: "Welcome 0",
        image: require("@/assets/images/welcome/welcome_6.jpg"),
        description: "Welcome to CoCoChain"
    },
]