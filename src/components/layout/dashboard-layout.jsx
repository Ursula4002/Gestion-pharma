import { Outlet } from "react-router-dom";
import DashboardNavbar from "./dashboard-nav-content/dashboard-navbar";

function DashboardLayout() {

    return (
        <>
            <h1>Admin Dashboard</h1>
            <DashboardNavbar />
            <main>
            <Outlet/>
            </main>
        </>
    )
}

export default DashboardLayout;