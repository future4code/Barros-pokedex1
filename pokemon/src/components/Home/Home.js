import React, {useContext} from "react";
import { pokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { PokContext } from "../../context/Context";
import * as style from "../Home/styled";
import logoPkm from "../Home/image/pokemon-logo.png";
import pokeball from "../Home/image/129-1298368_ref-pokeball.png"
import GlobalContext from "../../context/GlobalState";
import { Card } from "../Card/Card";


const Home=()=>{
  const navigate = useNavigate();
  //chamando o GlobalState
  const {pokemons20, photosPokemons} = useContext(PokContext, GlobalContext)
  console.log(photosPokemons)

  return(
  <style.ContainerHome>
    <style.Header>
      <style.LogoImg src={logoPkm}/>
      <style.DivBtn>
        <style.ImgBtn src={pokeball}/>
        <style.Button onClick={() => pokedexPage (navigate)}>
          <style.TextBtn>Pokedex</style.TextBtn>
        </style.Button>
      </style.DivBtn>
    </style.Header>
    
    <style.Main>
      <Card 
        photosPokemons={photosPokemons}
      />
    </style.Main>
  </style.ContainerHome>
  )
}

export default Home;
