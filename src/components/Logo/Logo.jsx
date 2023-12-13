import classes from './Logo.module.css'
import { Link, useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate()
  return (
    
      <div className={classes.LogoConteiner} onClick={()=> navigate('/')}>
        <p className={classes.LogoConteiner_Gervi}>Gervi</p>
        <p className={classes.LogoConteiner_Store}>Store</p>
      </div>
    

  );
};

export default Logo;
