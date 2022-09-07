import React from "react"
import Logo from "./image/pokemon-logo.png"
import Pokebola from "./image/129-1298368_ref-pokeball.png"
import { homePage, pokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import * as style  from "./style";  

export const Header = (props) => {
  const navigate = useNavigate()


  return (
    <style.Header>
      <img onClick={() => homePage (navigate)} src={Logo}/>
      <h1> {props.name}</h1>
      <div onClick={() => pokedexPage (navigate)}>
        <img src={Pokebola}/>
        <p>Pokedex</p>
      </div>
    </style.Header>
  )

}