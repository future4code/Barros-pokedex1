import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerDetails, ContainerPhotos, Stats } from "./styled";
import Background from "./images/pngwing.com.png"
import { Header } from "../Header/Header";




const Details = () => {
    const [selectPoke, setSelectPoke] = useState({})

    const name = useParams();
    console.log(name)

    const getDetailsPoke = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name.name}/`)
            .then((res) => {
                setSelectPoke(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    };
    useEffect(() => { getDetailsPoke() }, [])


    return (
        <>

            <Header
                name={selectPoke && selectPoke.name}
            />
            <ContainerDetails
                back={Background}
            >
                <ContainerPhotos>
                    <div>
                        <img src={selectPoke && selectPoke.sprites && selectPoke.sprites.front_default} />
                    </div>
                    <div>
                        <img src={selectPoke && selectPoke.sprites && selectPoke.sprites.back_default} />
                    </div>
                </ContainerPhotos>

                <Stats>
                    <div>
                        <h2>Stats</h2>
                        {
                            selectPoke.stats && selectPoke.stats.map((stat) => {
                                return (
                                    <div key={stat.stat.name}>
                                        <strong> {stat.stat.name}: </strong> <p>{stat.base_stat}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>Tipo</h3>
                        {
                            selectPoke.types && selectPoke.types.map((type) => {
                                return (
                                    <div key={type.type.name}>
                                        <p> {type.type.name} </p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h2>Moves</h2>
                        {
                            selectPoke.moves && selectPoke.moves.map((move, index) => {
                                if (index <= 3 && selectPoke.moves.length) {
                                    return (
                                        <div key={move.move.name}>
                                            <p> {move.move.name} </p>
                                        </div>


                                    )
                                }
                            })
                        }
                    </div>
                </Stats>

            </ContainerDetails>
        </>
    )
}

export default Details;