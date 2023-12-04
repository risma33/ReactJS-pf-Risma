import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';
import classes from './BodyConteiner.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from "../../asyncMock";
import { useEffect, useState } from 'react';




const BodyConteiner = (props)=> {
    const [products, setProducts] = useState ([])
    
    useEffect(()=>{
        getProducts()
            .then(response => {
                setProducts(response)
            })
    }, [])
    console.log(products);
    
    return(

        <div className={classes.bodyConteiner_conteiner}>
            <h1 className={classes.bodyConteiner_title}>{props.text}</h1>
            <div className={classes.bodyConteiner_spinnerConteiner}>
                <Spinner animation="border" style={{color: "#6E99B3", width: "6rem", height:"6rem"}} />
            </div>
            <ItemCount/>
            <ItemList products={products}/>
        </div>
    )
}

export default BodyConteiner