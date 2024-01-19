import classes from './HeaderConteiner.module.css'
import Logo from "../Logo/Logo"
import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import GotoUpdate from '../GoToUpdate/GoToUpdate';




const HeaderConteiner = () => {
    return (
        <div className={classes.headerConteiner}>
          <Logo/>
          <CartWidget/>
          <NavBar/>
          {/* <GotoUpdate/> */}
        </div>
      );
    
}

export default HeaderConteiner