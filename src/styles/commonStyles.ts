import { css, FlattenSimpleInterpolation } from "styled-components";

export interface TypographyStylesProps {
  h1: { regular: FlattenSimpleInterpolation };
  h2: { regular: FlattenSimpleInterpolation };
  h3: { regular: FlattenSimpleInterpolation };
  h4: { regular: FlattenSimpleInterpolation };
  h5: { regular: FlattenSimpleInterpolation };
  h6: { regular: FlattenSimpleInterpolation };
  p: {
    regular: FlattenSimpleInterpolation;
    sm: FlattenSimpleInterpolation;
    xs: FlattenSimpleInterpolation;
  };
}

export const typography: TypographyStylesProps = {
  h1: {
    regular: css`
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
    `
  },
  h2: {
    regular: css`
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 140%;
    `
  },
  h3: {
    regular: css`
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
    `
  },
  h4: {
    regular: css``
  },
  h5: {
    regular: css``
  },
  h6: {
    regular: css``
  },
  p: {
    regular: css`
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 140%;
      text-align: left;
    `,

    sm: css`
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;

      letter-spacing: 0.3px;
    `,
    xs: css`
      font-family: "Barlow", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 140%;
    `
  }
};
