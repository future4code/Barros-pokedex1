import React,{useContext} from "react";
import { pokedexPage, detailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { PokContext } from "../../context/Context";
import * as style from "../Home/styled";
import background from "../Home/image/pokemon-logo.png";
import btnBackGround from "../Home/image/129-1298368_ref-pokeball-transparent-background.png";
import GlobalContext from "../../context/GlobalState";


const Home=()=>{
  const navigate = useNavigate();

  //chamando o GlobalState
  const {pokemons20, photosPokemons} = useContext(PokContext, GlobalContext)
  console.log(photosPokemons)

  return(
  <style.ContainerHome>
    <style.Header>
      <style.LogoImg src={background}/>
      <style.Button onClick={() => pokedexPage (navigate)}>
        <style.ImgBtn src={btnBackGround}/>
        <style.TextBtn>Pokedex</style.TextBtn>
      </style.Button>
    </style.Header>
    
    <style.Main>
      <style.Card>
        <p>texto</p>
        {
             photosPokemons && photosPokemons.map((poke)=>{
                return (<div>
                  <h1 key = {poke.name}>{poke.name}</h1>
                  <img src={poke.sprites.front_default}/>
                  <style.Button>adicionar</style.Button>
                  <style.Button  onClick={() =>detailPage (navigate, poke.name)}>Detalhes</style.Button>
                </div>  
              )})
            }      
        
      </style.Card>
      
    </style.Main>
  </style.ContainerHome>
  )
}

export default Home;