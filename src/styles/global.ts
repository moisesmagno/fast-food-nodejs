import { createGlobalStyle } from 'styled-components';

const GlogalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f5f5f5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 15px Roboto, sans-serif;
    }

    #root {
        position: relative;
         padding: 80px 20px;
    }
    button {
        cursor: pointer;
    }
`;

export default GlogalStyle;