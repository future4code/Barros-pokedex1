import { useNavigate } from "react-router-dom";
import { homePage, pokedexPage } from "../../routes/coordinator";
import { Header, ContainerDetails, ContainerPhotos, Stats } from "./styled";
import Logo from "../Home/image/pokemon-logo.png"
import Pokebola from "../Home/image/129-1298368_ref-pokeball-transparent-background.png"
import Background from "./images/pngwing.com.png"
import PokemonFront from "./images/bubassour.png"
import PokemonBack from "./images/bubassour_back.png"



const Details=()=>{
    const navigate=useNavigate();


    return(
        <>
    <Header>
      <img onClick={() => homePage (navigate)} src={Logo}/>
      <h1>NOME DO POKEMON</h1>
      <div onClick={() => pokedexPage (navigate)}>
        <img src={Pokebola}/>
        <p>Pokedex</p>
      </div>
    </Header>
            <ContainerDetails
            back = {Background}
            >
                {/* <h1>PAGINA DETALHES</h1> */}
                {/* <button onClick={() => homePage(navigate)}>HOME</button>
                <button onClick={() => pokedexPage(navigate)}>POKEDEX</button> */}
                <ContainerPhotos>
                    <div>
                        <img src={PokemonFront} />
                    </div>
                    <div>
                        <img src={PokemonBack} />
                    </div>
                </ContainerPhotos>

                <Stats>
                    <div>
                        <h2>Stats</h2>
                        <ul>
                            <li><strong>HP:</strong> 46</li>
                            <li><strong>Attack:</strong> 39</li>
                            <li><strong>Defense:</strong> 52</li>
                            <li><strong>Special-Attack:</strong> 43</li>
                            <li><strong>Special-defense:</strong> 54</li>
                            <li><strong>Speed:</strong> 54</li>
                        </ul>
                    </div>
                    <div>
                        <p>Type 1</p>
                        <p>Type 2</p>
                    </div>
                    <div>
                        <h2>Moves</h2>
                        <ul>
                            <li>Move name 1</li>
                            <li>Move name 2</li>
                            <li>Move name 3</li>
                        </ul>
                    </div>
                </Stats>

            </ContainerDetails>
        </>
    )
}

export default Details;