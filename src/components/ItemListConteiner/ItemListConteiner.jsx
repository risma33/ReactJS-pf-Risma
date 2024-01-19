import { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import classes from './ItemListConteiner.module.css';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where  } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notificaciones/NotificationService"

const ItemListConteiner = ({prop}) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const { showNotification } = useNotification()
    

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ?query (collection (db, 'products'),where('category', '==', categoryId) )
        :collection (db, 'products')

        getDocs(collectionRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map (doc => {
                    const fields = doc.data()
                    return {id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch ( () => {
                showNotification('error', 'upRight', 'Hubo un error' )
            })
            .finally(()=>{setLoading(false)})
    }, [categoryId])

    const productsWithStock = products.filter(products => products.stock > 0);

    if(loading){
        return (
            <h1 className={classes.itemlistConteiner_loading}>Loading...</h1>
        )
    }
    return(
        
        <div >
            <h1 className={classes.itemList_title}>Productos</h1>
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