import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { detailPage } from "../../routes/coordinator";
import { Header } from "../Header/Header";
import { ContainerHome, Main, CardPokedex, EmptyList } from "./styled"

const Pokedex=()=>{

  const navigate=useNavigate();
  // ABaixo recebe os pokemons do localStorage pokedex
  const [pokemonsPokedex , setPokemonsPokedex] = useState([]); 
  // Abaixo recebe os pokemons do localStorage listPokemonHome, essa variavel é precisa para atualizar o localStorage
  const [pokemonHome, setPokemonHome] = useState([])
  // ABaixo é so uma variavel para atualizar a lista de pokemons sempre que clicar no botao de remover
  const [refreshScreen, setRefreshScreen] = useState(0)

  // ListoPokedex é oque manda o valor para o PokemonsPokedex
  const listPokedex = JSON.parse(localStorage.getItem("listPokedex")); 
  const listPokemonHome = JSON.parse(localStorage.getItem("pokemonHome"));
  console.log(pokemonHome)

  useEffect( ()=>{
    if(listPokedex !== null) {
      setPokemonsPokedex(listPokedex);
    }
    if(listPokemonHome !== null){
      return setPokemonHome(listPokemonHome)
    }
  },[refreshScreen]);

  let addToListPkmHome;
  const removePokemon = (pokemon,indexPokemon) => {
    setRefreshScreen(refreshScreen+1);
    let newListAffterRemove = [...pokemonsPokedex];
    pokemonsPokedex.filter( (poke) => {
      if(poke.name === pokemon.name) {  
        addToListPkmHome = [...pokemonHome,pokemon]    
        newListAffterRemove.splice(indexPokemon,1);     
        localStorage.setItem("listPokedex",JSON.stringify(newListAffterRemove));
        setPokemonsPokedex(newListAffterRemove);
      }
    });
    setPokemonHome(addToListPkmHome);
    localStorage.setItem("pokemonHome",JSON.stringify(addToListPkmHome));
  };
    
  return(
  <>
    <Header/>
    <ContainerHome>
    <Main>
    {listPokedex.length === 0 && <EmptyList><h1>Sua pokedex está vazia!!!</h1></EmptyList>}
    {listPokedex !== null && listPokedex.length > 0  && pokemonsPokedex.length < 1 ? listPokedex.map((poke,index)=>{
      return (
        <CardPokedex 
          key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
          poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
          poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
          poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
          poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }>
          <div>
          <h2>{poke.name}</h2>
            <button  onClick={ () => removePokemon(poke,index)}>remover</button>
            <button  onClick={ () => detailPage(navigate, poke.name) }>Detalhes</button>
          </div>
            <img src={poke.sprites.other.home.front_default} alt="Imagem Pokemon"/>
        </CardPokedex> 
      )}) 
    : // aqui é o else  
    pokemonsPokedex.map((poke,index)=>{
      return (
        <CardPokedex 
          key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
          poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
          poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
          poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
          poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }>
          <div>
              <h1>{poke.name}</h1>
              <button onClick={ () => removePokemon(poke,index)}>Remover</button>
              <button  onClick={ () => detailPage(navigate, poke.name) }>Detalhes</button>
          </div>
          <img src={poke.sprites.other.home.front_default} alt="Imagem Pokemon"/>
        </CardPokedex> )})
    } {/* Aqui acaba a verificaçao, se nenhuma for positivo vai renderizar so oque ta abaixo */}
    </Main>
    </ContainerHome> 
  </>
  )
};

export default Pokedex;

// if(newPokemons.length > 0){
    //   return  setNewPokemons(feijao)    
    // }