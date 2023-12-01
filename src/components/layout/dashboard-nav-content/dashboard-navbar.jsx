import { NavLink } from "react-router-dom";

function DashboardNavbar() {

    return (
        
        <ul>
            <li>
                <NavLink to="/all-products">All products</NavLink>
            </li>
            <li>
                <NavLink to="/create-product">Create Product</NavLink>
            </li>
            <li>
                <NavLink to="/update-product">Update Product</NavLink>
            </li>
            <li>
                <NavLink to="/delete-product">Delete Product</NavLink>
            </li>
        </ul>

    )
}

export default DashboardNavbar;
