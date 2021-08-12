import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#59c65b",
};

export const darkTheme = {
    body: "#000",
    fontColor: "#000",
};
export const greenTheme = {
    body: "#59c65b",
    fontColor: "#000",
};

export const GlobalStyles = createGlobalStyle`

    body {

        background-color: ${props => props.theme.body};

    }
`


