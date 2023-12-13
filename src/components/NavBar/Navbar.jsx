import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={classes.navBarConteiner}>
            <ul>
                <Link to='/category/tablet' style={{ textDecoration: 'none' }}><li>Tablet</li></Link>
                <Link to='/category/smartphones'style={{ textDecoration: 'none' }}><li>Celulares</li></Link>
                <Link to='/category/laptops'style={{ textDecoration: 'none' }}><li>Laptops</li></Link>
            </ul>
        </div>
    )
}

export default NavBar