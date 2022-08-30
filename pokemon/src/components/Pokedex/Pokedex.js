import { useNavigate } from "react-router-dom";
import { homePage, detailPage } from "../../routes/coordinator";
 




const Pokedex=()=>{
    const navigate=useNavigate();


    return(
        <>
        <h1>POKEDEX</h1>

        <button  onClick={() => homePage (navigate)}>HOME</button>
        <button  onClick={() => detailPage (navigate)}>DETALHES</button>
        </>
    )
}

export default Pokedex;