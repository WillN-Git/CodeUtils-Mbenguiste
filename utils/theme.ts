import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const COLORS = {
    primary: "#D93D59", // Red

    secondary1: "#60BF93", // Green
    secondary2: "#076DF2", // Blue
    secondary3: "#F2B872", // Yellow

    background: "#362739", // Violet

    lightGreen: "#95EAC3",
    lightYellow: "#F5C48A",
    lightRed: "#F05874",
    lightBlue: "#3C8BF3",

    darkViolet: "#3F324C",
    darkGreen: "#60BF93",

    gray: "#707070",
    gray2: "#A5A5A5",

    white: "#FFFFFF",
    black: "#000000",

    transparent: "transparent",
    transparentBlack: "rgba(36, 36, 36, 0.2)",
    transparentViolet: "rgba(54, 39, 57, 0.2)",

    red: "#D93D59",
    green: "#60BF93",
    blue: "#076DF2",
    yellow: "#F2B872",
};

const SIZES = {
    //Global sizes
    base: 8,
    font: 14,
    radius: 24,
    screenPadding: 35,

    //Font sizes
    largeTitle: 40,
    h1: 26,
    h2: 24,
    h3: 18,
    h4: 16,
    p: 14,
    small: 10,

    //App dimensions
    width,
    height,
};

const darkTheme = {
    name: "dark",

    mainBackground: COLORS.background,
    layoutBackground: COLORS.darkViolet,

    primary: COLORS.primary,

    textColor: COLORS.white,
};

export {
    COLORS,
    SIZES,
    darkTheme,
};
