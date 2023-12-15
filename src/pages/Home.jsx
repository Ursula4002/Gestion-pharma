import { useContext } from "react";
import UserContext from "../components/context/UserContext";
import { useNavigate } from "react-router-dom";


function Home(){
    
    const user = UserContext(UserContext);
    const navigate = useNavigate();

    if (!user.isLogged){
        navigate("/")
    }

    return(
    <>
    <h1>Welcome to Gestion Pharma</h1>
    <h2>👋 Bienvenue, {user.pseudo}</h2>
    
    </>

    )
}

export default Home;