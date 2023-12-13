import { useState, useEffect } from 'react'
import classes from './ItemDetailConteiner.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState()
    const params = useParams()
    console.log(params);

    useEffect(() => {
        getProductById(params.productId)
            .then(response => {
                setProduct(response)
            })
    }, [params.productId]);

    console.log(product);

    return (
        <div className={classes.itemDetailContainer}>
            { <ItemDetail key={product.id} {...product}/>}
        </div>
    )
}

export default ItemDetailConteiner