import "styled-components";
import {
  BreakpointsValuesType,
  MaxWidthBreakpointsType,
  MinWidthBreakpointsType,
  TypographyStylesProps
} from "styles";

declare module "styled-components" {
  type Colors =
    | "primary"
    | "secondary"
    | "transparentPrimary"
    | "black"
    | "white"
    | "vividRed"
    | "green"
    | "yellow"
    | "grey"
    | "link";

  type Gradients = "blueToPurple";

  type Breakpoints = {
    max: MaxWidthBreakpointsType;
    min: MinWidthBreakpointsType;
    val: BreakpointsValuesType;
  };

  export interface DefaultTheme {
    colors: Record<Colors, string>;
    gradients: Record<Gradients, string>;
    typography: TypographyStylesProps;
    breakpoint: Breakpoints;
  }
}
