import styled from "styled-components"

export const ContainerHome = styled.div `
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-image:  url(https://media.indiedb.com/images/articles/1/127/126990/auto/pokegen2013050512300022.png);
    background-repeat: no-repeat;
    background-size: cover;
` 

export const Main = styled.main `
    display: flex;
    gap: 3%;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
`
export const CardPokedex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 330px;
    height: 200px;
    border-radius: 5%;
    margin-bottom: 3%;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button{
        background-color: green;
        color: #fff;
        font-size: 16px;
        margin-bottom: 3%;
    }

    img{
        max-width: 150px;
    }
`

export const EmptyList = styled.div `
    text-align: center;
    width: 70%;
    padding: 15% 0 15% 0;
    background: rgba( 73, 182, 117, 0.70 );
    color: antiquewhite;
    border-radius: 5%;
`
