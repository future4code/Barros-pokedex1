import styled from "styled-components"

// A estilizaçao do botao esta sendo feita dentro do seu component pai...
export const Button = styled.button `
`
// --- Tudo Abaixo faz parto do Component Main ----/
export const Card = styled.div `
    border: 1px solid #000;
    height: 400px;;
    width: 350px;
    /* width: calc(20% - 12px ); */
    margin: 4px;
`

export const Main = styled.main `
    display: flex;
    flex-wrap: wrap;
    
`
// ------------- /////// ------------ / /---------//

// -- Tudo abaixo faz parte do Component Header - ////////

export const ImgBtn = styled.img` // deste component -//
    height: 110px;
    position: absolute;
    left:0 ;
    z-index: 1;
`
export const TextBtn = styled.span `
    background-color: gray;
    font-size: 42px;
    padding: 5px 25px;
    border-radius: 10px;
    position: absolute;
    right: 0;
    z-index: 0;
`
export const LogoImg = styled.img `
    height: 15vh;
    object-fit: cover;
    margin: 0 auto; 
` // ate este outro aqui, esta o estilo das coisas dentro do botao pokedex -//
export const Header = styled.header `
    position: relative;
    background-color: red;
    display: flex;
    ${Button} { //- estilo do Botao em sí -//
        position: relative;
        background-color: red;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 300px;
        margin-right: 10px;
    }
`
//---------- //// ---------------- /// ---------//
export const ContainerHome = styled.div `
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
` 