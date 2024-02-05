import React from "react";
import { Link, Outlet } from 'react-router-dom';
function ProductLayout(){
    return(
        <>
        <nav>
            <ul>
            <li>
                    <Link to="/products/singleproduct">Single Products</Link>
                </li>
                <li>
                    <Link to="/products/newproduct">New Product</Link>
                </li> 
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default ProductLayout; 