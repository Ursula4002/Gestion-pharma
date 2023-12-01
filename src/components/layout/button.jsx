import { useNavigate } from "react-router-dom";

function Button() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('./dashboard-layout');
    }

    return (
        <>
            <button onClick={handleClick} className="admin-btn">
                Admin
            </button>
        </>
    )

    }

    export default Button;