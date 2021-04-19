import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


html{
    box-sizing:border-box;
    color:${({ theme }) => theme.colors.BLACK};
    font-size:10px;

}

*,*::after, *::before{
    box-sizing:inherit;
    margin:0;
    padding:0;
}

body{
    font-family: "Play", sans-serif;
    font-size:10px;
}

a,button,input{
    font-family:"Play", sans-serif;
}

`;
