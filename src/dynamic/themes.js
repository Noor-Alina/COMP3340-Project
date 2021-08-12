import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#020202",
};

export const darkTheme = {
    body: "#000",
    fontColor: "#020202",
};
export const greenTheme = {
    body: "#59c65b",
    fontColor: "#006400",
};

export const GlobalStyles = createGlobalStyle`

    body {

        background-color: ${props => props.theme.body};

    }
`


