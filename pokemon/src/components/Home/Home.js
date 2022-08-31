import { pokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

import * as style from "../Home/styled"
import background from "../Home/image/pokemon-logo.png"
import btnBackGround from "../Home/image/129-1298368_ref-pokeball-transparent-background.png"


const Home=()=>{
  const navigate = useNavigate();


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
        <style.Button>adicionar</style.Button>
        <style.Button>detalhes</style.Button>
      </style.Card>
      <style.Card>2</style.Card>
      <style.Card>3</style.Card>
      <style.Card>4</style.Card>
      <style.Card>5</style.Card>
      <style.Card>6</style.Card>
      <style.Card>7</style.Card>
      <style.Card>7</style.Card>
    </style.Main>
  </style.ContainerHome>
  )
}

export default Home;