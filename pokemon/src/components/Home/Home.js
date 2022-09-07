import React, {useContext,useState, useEffect} from "react";
import { PokContext } from "../../context/Context";
import * as style from "../Home/styled";
import GlobalContext from "../../context/GlobalState";
import { Card } from "../Card/Card";
import { Header } from "../Header/Header";




const Home=()=>{
  //chamando o GlobalState
  const {photosPokemons} = useContext(PokContext, GlobalContext) // essa variavel é a que recebe os dados da requisicao
  const [newListPokemons , setNewListPokemons] = useState([]) // essa outra é uma que eu uso para atualizar os pokemons na hora de renderizar
  const [pokedex, setPokedex] = useState([])
  
   // essa aqui abaixo, tbm é pra atualizar os pokemons quando clicar em adicionar
  const listPokemon = JSON.parse(localStorage.getItem("pokemonHome"))
  const listPokedex = JSON.parse(localStorage.getItem("pokedex"))
  useEffect( () => {
    if(listPokemon !== null) { // faz a verificaçao se existe a parte de cima
        return setNewListPokemons(listPokemon)
    } 
    setNewListPokemons(photosPokemons) // isso aqui é pra se caso nao existir nada no ListPokemon ele exibir o primeiro array 
  }, [photosPokemons])
  useEffect( () => {
    
  },[])
  // console.log(listPokemon)
  let addToListPokedex 
  const addPokedex = (pokemon,indexPokemon) => {
    let removePkm = [...newListPokemons] // isso aqui é oque atualiza o local storage
    newListPokemons.filter( (poke) => {
      // localStorage.setItem("pokedex",JSON.stringify(pkmPokedex)) 
      if(poke.name === pokemon.name) { // esse if é para verificar se existe o msm pokemon  e retirar ele 
        if( listPokedex !==null){
          return addToListPokedex = [...listPokedex,pokemon]
        } else {
          addToListPokedex = [...pokedex,pokemon]
        }
        removePkm.splice(indexPokemon,1)   
        localStorage.setItem("pokemonHome",JSON.stringify(removePkm))// aqui cria a key no localStorage e manda os valores 
        setNewListPokemons(removePkm)
      } 
    })
    setPokedex(addToListPokedex)
    localStorage.setItem("listPokedex",JSON.stringify(addToListPokedex))
    console.log(pokedex)
  }
  return(
  <style.ContainerHome>
    <Header />
    <style.Main>
      <Card 
        addPokedex={addPokedex}
        newListPokemons={newListPokemons}
      />
    </style.Main>
  </style.ContainerHome>
  )
}

export default Home;

// useEffect( () => {
//   if(test2 !== null) {
//     return setNewPokemons(test2)
//   }
//   setNewPokemons(photosPokemons)
  
// }, [photosPokemons])

// if(newPokemons.length === 0 && pokedex.length === 0 ) {
//   return setNewPokemons(photosPokemons)
// }