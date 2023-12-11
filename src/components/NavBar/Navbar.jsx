import classes from './NavBar.module.css'
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    const toggleCategories = () => {
        setShowCategories((prev) => !prev);
      };

    useEffect (()=>{
        const uniqueCategories = [... new Set()]
    })
    return (
        <nav className='navBarConteiner'>
            <ul>
                <li>
                    Products
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default NavBar