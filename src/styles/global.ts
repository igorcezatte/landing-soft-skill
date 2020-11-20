import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #323031;
        font: 1em Roboto, sans-serif;
        color: #C1BDB3;
    }
`;