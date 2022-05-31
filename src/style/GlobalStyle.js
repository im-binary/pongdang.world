// 글로벌 스타일 적용을 도와주는 styled-components내장 메서드
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:${({ theme }) => theme.bgColor};
        color:${({ theme }) => theme.mainTextColor}
    }
    
    .content-container section h3::after {
        background-color:${({ theme }) => theme.mainTextColor};
    }

    .list-type-button button {
        background-color:${({ theme }) => theme.boxBgColor};
        color:${({ theme }) => theme.mainTextColor}
    }

    .list-type-button button:hover {
        background-color:${({ theme }) => theme.boxHoverColor};
    }

    .content-list li a{
        background-color:${({ theme }) => theme.boxBgColor};
    }

    .content-list li a:hover {
        background-color:${({ theme }) => theme.boxHoverColor};
    }

    .work-list li{
        background-color:${({ theme }) => theme.boxBgColor};
    }
 
    .work-list li:hover {
        background-color:${({ theme }) => theme.boxHoverColor};
    }

    .buger-menu-container span {
        background-color:${({ theme }) => theme.mainTextColor}
    }

    button {
        cursor: pointer;
    }

    a {
        color:${({ theme }) => theme.mainTextColor}
    } 
    
    pre{
        background-color:${({ theme }) => theme.codeBgColor}
    }

`;
