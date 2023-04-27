import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: "Barlow" ,sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        color: #ffffff;
        background: #0A1C38;
        scroll-behavior: smooth;
    }


    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    } 

    h1, h2, h3, h4, h5, span, p {
        margin: 0;
        padding: 0;
    }

    /* p {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 100;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.3px;
    } */
    
 
`;
