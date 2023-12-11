import classes from './HeaderConteiner.module.css'
import Logo from "../Logo/Logo"
import CartWidget from '../CartWidget/CartWidget';


const HeaderConteiner = () => {
    return (
        <div className={classes.headerConteiner}>
          <Logo />
          <CartWidget/>
        </div>
      );
    
}

export default HeaderConteiner