import styled from "styled-components"

// A estilizaçao do botao esta sendo feita dentro do seu component pai...
export const Button = styled.button `
`
export const DivBtn = styled.div `

`
// --- Tudo Abaixo faz parto do Component Main ----/

export const Main = styled.main `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
`
// ------------- /////// ------------ / /---------//

// -- Tudo abaixo faz parte do Component Header - ////////

export const ImgBtn = styled.img` // deste component -//
    height: 10vh;
    position: absolute;
    left:0 ;
    z-index: 1;
    border-radius: 100%;
    box-shadow: 3px 3px 3px #000;
`
export const TextBtn = styled.span `
    background-color: #00042299;
    color: #fff;
    font-size: 42px;
    padding: 5px 25px;
    border-radius: 10px;
    position: absolute;
    right: 0;
    z-index: 0;
    :hover {
        box-shadow: 1px 2px 2px #000;
    }
    cursor: pointer;
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
    box-sizing: border-box;
    ${DivBtn} { //- estilo do Botao em sí -//
        position: relative;
        background-color: red;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 300px;
        margin-right: 10px;
        box-sizing: border-box;
    }
`
//---------- //// ---------------- /// ---------//
export const ContainerHome = styled.div `
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    background-image:  url(https://media.indiedb.com/images/articles/1/127/126990/auto/pokegen2013050512300022.png);
    background-repeat: no-repeat;
    background-size: cover;
` 
// export const Card = styled.div `
//     border: 1px solid #000;
//     height: 400px;;
//     width: 350px;
//     /* width: calc(20% - 12px ); */
//     margin: 4px;
// `
