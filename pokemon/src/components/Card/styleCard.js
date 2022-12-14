import styled from "styled-components"

export const NamePkm = styled.h2 `
    margin: 5px;
    font-family: arial;
`

export const Button = styled.button `
    font-size: 20px;
    width: 45%;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: green;
    color: #fff;
    cursor: pointer;
    :hover {
        box-shadow: 1px 1px 3px #ffaa44;
    }
`
export const DivBtn = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 5px;
    box-sizing: border-box;
`
export const Img = styled.img `
    width: 100%;
    filter: drop-shadow(19px 12px 4px #12111269);
    box-sizing: border-box;
    padding: 10px;
`
export const Card = styled.div `
    min-height: 300px;
    width: 330px;
    margin: 4px;
    border-radius: 10px;
    text-align: center;
    :hover {
        box-shadow: 5px 3px 3px #000;
    }

    @media (max-width: 600px) {
        width: 150px;
        min-height: 250px;
        ${DivBtn}{
            background-color: transparent;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            ${Button}{
                background-color: #000;
                width: 50%;
                padding: 4px;
                font-size: 16px;
            }
        }
    }
`