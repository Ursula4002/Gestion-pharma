import NavBar from "../nav-bar/nav-bar";
import { Outlet } from "react-router-dom";

function LayoutAdmin(){

    return(
        <>
        <h1>Clients</h1>
        <nav>
            <NavBar/>
            <main>
            <Outlet/>
            </main>
        </nav>
        </>
    )
}

export default LayoutAdmin;
