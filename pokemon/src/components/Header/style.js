import styled from "styled-components"

export const Header = styled.header `
display: flex;
background-color: #960000;
justify-content: space-around;
height: 15vh;
align-items: center;
    
    img{
        height: 90%;
        cursor: pointer;
    }

    h1{
        font-size: clamp(15px, 25px, 27px );
        color: white;
    }

    div{
        display: flex;
        align-items: center;
        height: 90%;
        position: relative;
        cursor: pointer;
        width: 8%;

        p{
            font-size: clamp(12px, 20px, 22px);
            background-color: #DEF0EF;
            height: fit-content;
            padding: 8% 22%;
            border-radius: 0 15px 15px 0;
            margin: 0;
            font-weight: 600;
            line-height: 200%;
        }
        img{
            
            position: absolute;
            height: 80%;
            right: 80%;
            z-index: 1;
            top: 10px;
        }

    }
`