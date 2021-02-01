import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        font-family: "Montserrat", sans-serif;
        background: #252525;
        overflow-x:hidden;
    }

    a{
        text-decoration:none;
        color:#F2EDFF;
    }


`;

export default GlobalStyle;
