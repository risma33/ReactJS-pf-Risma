import classes from './HeaderConteiner.module.css'
import Logo from "../Logo/Logo"
import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';



const HeaderConteiner = () => {
    return (
        <div className={classes.headerConteiner}>
          <Logo/>
          <CartWidget/>
          <NavBar/>
        </div>
      );
    
}

export default HeaderConteiner