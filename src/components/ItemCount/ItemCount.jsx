import classes from './itemCount.module.css';
import { useState } from 'react';


const ItemCount = ({ onAdd, stock, initial = 1 }) => {
    const [totalItem, setTotalItem] = useState(initial)

    const handleIncrece = () => {
        if (totalItem < stock) {
            setTotalItem(prev => prev + 1)
        }
        
    }

    const handleDecrece = () => {
        if (totalItem > 1) {
            setTotalItem(prev => prev - 1)
        }
    }


    return (
        <div className={classes.itemCountConteiner}>
            <div className={classes.itemCount}>
                <button onClick={handleDecrece} className={classes.itemCountButton}>-</button>
                <h6>{totalItem}</h6>
                <button onClick={handleIncrece} className={classes.itemCountButton}>+</button>
            </div>
            <div>
               <button className={classes.itemCount_addToCartButton} onClick={()=> onAdd(totalItem)} > Agregar al Carrito</button> 
            </div>
            
        </div>
    )
}



export default ItemCount;