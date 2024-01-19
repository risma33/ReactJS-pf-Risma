import { useState, useEffect } from 'react'
import classes from './ItemDetailConteiner.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from '../../notificaciones/NotificationService'



const ItemDetailConteiner = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams()
    const { showNotification } = useNotification()


    useEffect(() => {
        const documentRef = doc(db, 'products', productId)
        getDoc(documentRef)
        .then(queryDocumentSnapshot=>{
            const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)

        }).catch( () => {
            showNotification('error', 'upRight', 'Hubo un error' )
        })
    }, [productId]);



    return (
        <div className={classes.itemDetailContainer}>
            { <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailConteiner