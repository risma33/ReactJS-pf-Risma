

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Header.module.css";
import CartWidget from "../CartWidget/CartWidget";



const Header = () => {
  return (
    <Navbar expand="lg" className= {classes.navBarStart}>
      <Container className={classes.navbarStart_conteiner} >
        <Navbar.Brand href="../../index.html" className={classes.navbarStart_conteiner_brand} >
          <div className={classes.fullLogo}>
            <p className={classes.g}>Gervi</p>
            <p className={classes.ervi}>Store</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle className={classes.navbarStart_conteiner_toggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={classes.basicNavbarNav}>
          <Nav className={`ml-auto ${classes.ml_auto}`}>
            <Nav.Link className={classes.navbarStart_conteiner_collapse_ml_auto_link} href="#home">Computadoras</Nav.Link>
            <Nav.Link className={classes.navbarStart_conteiner_collapse_ml_auto_link} href="#link">Celulares</Nav.Link>
            <Nav.Link className={classes.navbarStart_conteiner_collapse_ml_auto_link} href="#link">Tablets</Nav.Link>
            <Nav.Link className={classes.navbarStart_conteiner_collapse_ml_auto_link} href="#link">Accesorios</Nav.Link>
            <Nav.Link className={classes.navbarStart_conteiner_collapse_ml_auto_link} href="#link">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
