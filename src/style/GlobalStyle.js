// 글로벌 스타일 적용을 도와주는 styled-components내장 메서드
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:${({ theme }) => theme.bgColor};
        color:${({ theme }) => theme.mainTextColor}
    }
    .content-list li a{
        background-color:${({ theme }) => theme.boxBgColor};
    }
    .content-list li a:hover {
        background-color:${({ theme }) => theme.boxHoverColor};
    }
`;
