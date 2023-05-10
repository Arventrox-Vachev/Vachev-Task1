import { DefaultTheme } from "styled-components";
import { breakpoints, maxWidth, minWidth } from "./breakpoints";
import { typography } from "./commonStyles";

export const theme: DefaultTheme = {
  colors: {
    primary: "#173158",
    secondary: "#081831",
    transparentPrimary: "rgba(20, 60, 100, 0.7);",
    black: "#000000",
    white: "#ffffff",
    vividRed: "#FF0000",
    green: "#3BE100",
    yellow: "#fcd130",
    grey: "rgba(255, 255, 255, 0.7);",
    link: "#7184ab"
  },
  typography,
  gradients: {
    blueToPurple: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
  },
  breakpoint: {
    max: maxWidth,
    min: minWidth,
    val: breakpoints
  }
};
