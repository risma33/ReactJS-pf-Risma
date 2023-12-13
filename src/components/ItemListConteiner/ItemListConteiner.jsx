import { getProducts, getProductByCategory } from "../../asyncMock";
import { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import classes from './ItemListConteiner.module.css';
import { useParams } from 'react-router-dom'

const ItemListConteiner = ({prop}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    

    useEffect(() => {
        if (categoryId) {
            getProductByCategory(categoryId)
                .then(response => {
                    setProducts(response)
                })
        } else{
            getProducts()
            .then(response => {
                setProducts(response)
            })
        }
        
    }, [categoryId])

    const productsWithStock = products.filter(products => products.stock > 0);
    return(
        
        <div >
            <h1 className={classes.itemList_title}>Estamos en Desarrollo</h1>
            {<div className={classes.itemListConteiner}>
                {
             productsWithStock.map(products => {
                    return(
                        <ItemCard key={products.id} {...products} />
                    )
                })
            }
            </div>}
            
            
            
        </div>
    )
}

export default ItemListConteiner