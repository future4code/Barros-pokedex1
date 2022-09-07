import React, {useContext,useState, useEffect} from "react";
import { PokContext } from "../../context/Context";
import * as style from "../Home/styled";
import GlobalContext from "../../context/GlobalState";
import { Card } from "../Card/Card";
import { Header } from "../Header/Header";




const Home=()=>{
  //chamando o GlobalState
  const {photosPokemons} = useContext(PokContext, GlobalContext); // essa variavel é a que recebe os dados da requisicao
  const [newListPokemons , setNewListPokemons] = useState([]); // essa outra é uma que eu uso para atualizar os pokemons na hora de renderizar
  const [pokedex, setPokedex] = useState([]); // essa variavel é a que vai receber os pokemons e atualizar o localStorage da pokedex
  
  // essa aqui abaixo, tbm é pra atualizar os pokemons quando clicar em adicionar
  const listPokemon = JSON.parse(localStorage.getItem("pokemonHome"));
  // Abaixo, recebe os pokemons que estao no pokedex
  const listPokedex = JSON.parse(localStorage.getItem("listPokedex"));
  useEffect( () => {
    if(listPokemon !== null) { // faz a verificaçao se existe a parte de cima
        return setNewListPokemons(listPokemon)
    } 
    setNewListPokemons(photosPokemons) // isso aqui é pra se caso nao existir nada no ListPokemon ele exibir o primeiro array 
  }, [photosPokemons]);
  // esse userEffect Abaixo, verifica se ja contem alguma coisa no listPokedex que é a variavel que recebe o localStorage do pokedex
    // e se caso tiver alguma coisa ela atualiza a variavel pokedex para nao iniciar vazio... 
  useEffect( () => {
    if(listPokedex !== null){
      return setPokedex(listPokedex)
    }
  },[]);
  
  // Abaixo a função que remove do home e adiciona no pokedex
  let addToListPokedex;
  const addPokedex = (pokemon,indexPokemon) => {
    let removePkm = [...newListPokemons]; // isso aqui é oque atualiza o local storage
    newListPokemons.filter( (poke) => {
      if(poke.name === pokemon.name) { // esse if é para verificar se existe o msm pokemon  e retirar ele 
        addToListPokedex = [...pokedex,pokemon];
        removePkm.splice(indexPokemon,1);   
        localStorage.setItem("pokemonHome",JSON.stringify(removePkm));// aqui cria a key no localStorage e manda os valores 
        setNewListPokemons(removePkm);
      };
    })
    setPokedex(addToListPokedex)
    localStorage.setItem("listPokedex",JSON.stringify(addToListPokedex))
    console.log(pokedex)
  };
  // ----------- //////// --------- /////// ------- ///// ---------//////
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
