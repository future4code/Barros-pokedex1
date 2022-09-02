import styled from "styled-components";

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
        height: 70%;
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
            height: 110%;
            right: 80%;
            z-index: 1;
            top: -5%;
        }

    }
    `

export const ContainerDetails = styled.main`
    display: flex;
    min-height: 100vh;
    background-image: url(${props => props.back});
    background-size: cover;
    
    h1{
        margin: 0;
    }

`

export const ContainerPhotos = styled.section`
    height: 100vh;
    width: 50%;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 2.5% 0 0 12%;
    gap: 5%;

    div{
        height: 35%;
        width: 250px;
        display: flex;
        justify-content: center;

        background: rgba( 97, 129, 1, 0.35 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 97, 129, 1, 0.18 );

        img{
            height: 200px;
        }
    }
`
export const Stats = styled.section`
        width: 70%;
        height: 70vh;
        display: grid;
        padding: 2.5% 12% 0 0;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 7%;
        grid-row-gap: 5%;

        p{
            text-align: center;
        }

        div{
            background: rgba( 97, 129, 1, 0.35 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 4px );
            -webkit-backdrop-filter: blur( 4px );
            border-radius: 10px;
            border: 1px solid rgba( 97, 129, 1, 0.18 ); 

            h2{
                text-align: center;
            }

            ul{
                line-height: 280%;
                li{
                    list-style-type: none;
                }
            }
        }

        div:nth-child(1){
            grid-row-end: span 2;
        }


`

