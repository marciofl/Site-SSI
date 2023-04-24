import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        /* paleta de cores */
        --color-primary: #3A006E;
        --color-secondary: #FF82FF;
        --color-tertiary: #8A45C6; // excluir posteriormente
        --color-neutral: #0A0A0A;
        --color-text: #FFF;

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
        background: #272727;
    }

    body, input {
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
    }

    button {
        font: 400 0.875rem/1.25rem 'Space_Mono_Bold';
        color: var(--color-text);
        cursor: pointer;
    }

    h1 {
        font: 400 3.5rem/4.25rem 'Space_Mono_Bold';
        color: var(--color-text);
        text-align: center;
    }

    h2 {
        font: 400 3rem/3.5rem 'Space_Mono_Bold';
        color: var(--color-text);
    }

    h3 {
        font: 700 2.5rem/3rem 'Space_Mono';
        color: var(--color-text);
        text-align: justify;
    }

    h4 {
        font: 700 2rem/2.5rem 'Space_Mono';
        color: var(--color-text);
    }

    h5 {
        font: 700 1.5rem/1.75rem 'Space_Mono';
        color: var(--color-text);
    }

    h6 {
        font: 700 1.25rem/1.5rem 'Space_Mono';
        color: var(--color-text);
    }

    p, span, a {
        font: 700 1rem/1.25rem 'Space_Mono';
        color: var(--color-text);
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