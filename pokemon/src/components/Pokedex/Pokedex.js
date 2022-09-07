import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { homePage, detailPage } from "../../routes/coordinator";
import { Header } from "../Header/Header";
import * as style from "../Card/styleCard" 






const Pokedex=()=>{
  const navigate=useNavigate();
  const [newPokemons , setNewPokemons] = useState([]) ;
  const listPokedex = JSON.parse(localStorage.getItem("listPokedex"));
  // const feijao = JSON.parse(localStorage.getItem("removed"))
  console.log(listPokedex)

  useEffect( ()=>{
    // if(newPokemons.length > 0){
    //   return  setNewPokemons(feijao)    
    // }
    if(listPokedex !== null) {
      setNewPokemons(listPokedex);
    }
  },[setNewPokemons])

  const removePokemon = (indexPokemon) => {
    listPokedex.filter( (poke,index) => {
      if(index === indexPokemon) {      
        let test5 = listPokedex.splice(indexPokemon,1);     
        localStorage.setItem("removed",JSON.stringify(test5)) ;
        setNewPokemons(newPokemons);
        console.log("entrou na funcao")
      }
    })
  };

  const addpokemon = (indexPokemon) => {
    listPokedex.filter( (poke,index) => {
      if(index === indexPokemon) {
        listPokedex.push(poke); 
        localStorage.setItem("newPokemon",JSON.stringify(listPokedex));   
        console.log("entrou na funcao");
      }
    })
  };

    
  return(
  <>
    <Header/> 
    {listPokedex !== null && listPokedex.length > 0  && newPokemons.length < 1 ? listPokedex.map((poke,index)=>{
      return (
        <style.Card 
          key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
          poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
          poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
          poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
          poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }>
          <style.Img src={poke.sprites.other.home.front_default}/>
          <style.NamePkm >{poke.name}</style.NamePkm>
          <style.DivBtn>
            {/* <style.Button  onClick={ () => {removePokemon(index);addpokemon(index)}}>remover</style.Button> */}
            <style.Button  onClick={ () => detailPage(navigate, poke.name) }>Detalhes</style.Button>
          </style.DivBtn>
        </style.Card> 
      )}) 
    : // aqui é o else  
    newPokemons.map((poke,index)=>{
      return (
        <style.Card 
          key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
          poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
          poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
          poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
          poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }>
          <style.Img src={poke.sprites.other.home.front_default}/>
          <style.NamePkm >{poke.name}</style.NamePkm>
          <style.DivBtn>
            {/* <style.Button  onClick={ () => removePokemon(index)}>remover</style.Button> */}
            <style.Button  onClick={ () => detailPage(navigate, poke.name) }>Detalhes</style.Button>
          </style.DivBtn>
        </style.Card> )})
    } {/* Aqui acaba a verificaçao, se nenhuma for positivo vai renderizar so oque ta abaixo */}
    <div>
      <button  onClick={() => homePage (navigate)}>HOME</button>
      <button  onClick={() => detailPage (navigate)}>DETALHES</button>
    </div>  
  </>
  )
};

export default Pokedex;