import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #252222;
    }

    .error-input {
        border: 1px solid red;
    }

    .active-filter {
        background-color: aqua;
    }
`;
