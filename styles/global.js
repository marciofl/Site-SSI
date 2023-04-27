import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        /* paleta de cores */
        --color-primary: #3A006E;
        --color-secondary: #FF82FF;
        --color-tertiary: #8A45C6; // excluir posteriormente
        --color-neutral: #0A0A0A;

        /* variações da paleta */
        --color-primary-900: #4C286C;
        --color-primary-800: #63358D;
        --color-primary-500: #A86BDA;
        --color-neutral-900: #121212;
        --color-neutral-800: #272727;
        --color-neutral-700: #3C3C3C;
        --color-neutral-500: #6C6C6C;
        --color-neutral-400: #858585;
        --color-neutral-100: #EDD3FF;
        --color-neutral-50: #F3F3F3;

        /*16 pixels (100% = 16 pixels)*/
        font-size: 100%;
    }

    #nprogress .bar {
        background: #272727;
        filter: brightness(110%)
    }

    html {
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: var(--color-neutral-800);
    }

    body, input {
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
    }

    button {
        font: 400 1.125rem/1.5rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
        cursor: pointer;
    }

    h1 {
        font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
        text-align: center;
    }

    h2 {
        font: 400 3rem/3.5rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
    }

    h3 {
        font: 700 2.5rem/3rem 'Space_Mono';
        color: var(--color-neutral-50);
        text-align: justify;
    }

    h4 {
        font: 400 2rem/2.5rem 'Space_Mono_Bold';
        color: var(--color-neutral-50);
    }

    h5 {
        font: 700 1.5rem/1.75rem 'Space_Mono';
        color: var(--color-neutral-50);
    }

    h6 {
        font: 700 1.25rem/1.5rem 'Space_Mono';
        color: var(--color-neutral-100);
    }

    p, span, a {
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-50);
    }

    label {
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-50);
    }

    /* Fazer o estilo do campo de input [text] */
    input[type=text] { 
        text-transform: uppercase;
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-400);
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        text-transform: none;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        text-transform: none;
    }
    
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        text-transform: none;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        text-transform: none;
    }

    ::placeholder { /* Recent browsers */
        text-transform: none;
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-neutral-400);
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    .section-title {
        margin-bottom: 1rem;
    }

    @media (min-width:480px) {

        :root{
            font-size: 100%;
        }
    }

    @media (min-width:600px) {

        :root {
            font-size: 100%;
        }

        button {
            /* font-size:1.8rem; */
        }
    }

    @media (min-width:801px) {

        :root {
            font-size: 100%;
        }
    }

    @media (min-width:1021px) {
        
        :root {
            font-size: 100%;
        }

        /* p {
            font-weight: normal;
            font-size: 1.2rem;
            line-height: 141%;
        } */
    }

    @media (min-width:1365px) {

    }

    @media (min-width:2200px) {

    }
`