import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: ${({theme}) => theme.colors.body};
        color: hsl(92, 100%, 9%);
        font-size: 1.15em;
    }

    p{
        opacity: 0.6;
    }

    img{
        max-width: 100%;
    }

`

export default GlobalStyles