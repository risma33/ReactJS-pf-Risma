import classes from './itemCount.module.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardItem = () => {
    const [totalItem, setTotalItem] = useState (0)

    const handleIncrece = () => {
        setTotalItem (prev => prev +1)
    }

    const handleDecrece = () => {
       if (totalItem > 1) {
        setTotalItem (prev => prev -1)
       }  
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Item</Card.Title>
            </Card.Body>
            <Card.Footer className={classes.cardFooter}>
                <button onClick={handleDecrece} className={classes.cardFotterButton}>-</button>
                <h6>{totalItem}</h6>
                <button onClick={handleIncrece} className={classes.cardFotterButton}>+</button>
                <button className={classes.addToCartButton}> Agregar al Carrito</button>
                
            </Card.Footer>
        </Card>
    )
};


const ItemCount = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(show => !show)}>Show ItemCount</button>
            {show && <CardItem />}
        </>
    )
}



export default ItemCount;