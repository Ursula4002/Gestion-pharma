import { useNavigate } from "react-router-dom";
import Button from "../components/layout/button";

function Login() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleClick}>
                Connexion
            </button>
            <Button/>
        </>
    )
}

export default Login;