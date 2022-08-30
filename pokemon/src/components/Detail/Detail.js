import { useNavigate } from "react-router-dom";
import { homePage, pokedexPage } from "../../routes/coordinator";




const Details=()=>{
    const navigate=useNavigate();


    return(
        <>
        <h1>PAGINA DETALHES</h1>

        <button onClick={() => homePage(navigate)}>HOME</button>
        <button onClick={() => pokedexPage(navigate)}>POKEDEX</button>
        </>
    )
}

export default Details;