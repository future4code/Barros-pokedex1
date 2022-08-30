import { pokedexPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";



const Home=()=>{
    const navigate = useNavigate();


    return(
        <>
        <h1>HOME</h1>

    
        <button  onClick={() => pokedexPage (navigate)}>POKEDEX</button>
        </>
    )
}

export default Home;