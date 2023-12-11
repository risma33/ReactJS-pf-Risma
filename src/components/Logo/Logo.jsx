import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div className={classes.LogoConteiner}>
      <p className={classes.LogoConteiner_Gervi}>Gervi</p>
      <p className={classes.LogoConteiner_Store}>Store</p>
    </div>
  );
};

export default Logo;
