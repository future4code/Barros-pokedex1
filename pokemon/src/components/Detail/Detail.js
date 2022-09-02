import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { homePage, pokedexPage } from "../../routes/coordinator";
import { Header, ContainerDetails, ContainerPhotos, Stats } from "./styled";
import Logo from "../Home/image/pokemon-logo.png"
import Pokebola from "../Home/image/129-1298368_ref-pokeball-transparent-background.png"
import Background from "./images/pngwing.com.png"
// import PokemonFront from "./images/bubassour.png"
// import PokemonBack from "./images/bubassour_back.png"



const Details=()=>{
    const navigate=useNavigate();
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


    return(
        <>
    <Header>
      <img onClick={() => homePage (navigate)} src={Logo}/>
      <h1>{selectPoke && selectPoke.name}</h1>
      <div onClick={() => pokedexPage (navigate)}>
        <img src={Pokebola}/>
        <p>Pokedex</p>
      </div>
    </Header>
            <ContainerDetails
            back = {Background}
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
                            selectPoke.moves && selectPoke.moves.map((move,index) => {
                                if (index <= 3 && selectPoke.moves.length ) {
                                return (
                                        <div key={move.move.name}>
                                            <p> {move.move.name} </p>
                                        </div>
                                    

                                )}
                        })
                        }
                    </div>
                </Stats>

            </ContainerDetails>
        </>
    )
}

export default Details;