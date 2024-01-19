import { useState } from 'react';
import classes from './Checkout.module.css';
import { useCart } from "../../context/CartContext"
import { db } from '../../services/firebase/firebaseConfig';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { useNotification } from '../../notificaciones/NotificationService';



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, SetOrderId] = useState(null)
    const { cart, total, clearCart } = useCart()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [direccion, setDireccion] = useState()
    const { showNotification } = useNotification()

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value);
    }

    const createOrder = async () => {
        const userData = {
            name,
            email,
            phone,
            direccion,
        }
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total: total
            }
            console.log('Orden generada:', objOrder)

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))


            const { docs } = await getDocs(productsCollection)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedtoCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedtoCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const ordersCollection = collection(db, 'orders')

                const { id } = await addDoc(ordersCollection, objOrder)
                SetOrderId(id)
                clearCart()
            } else {
                showNotification('error', 'upRight', 'Hay productos sin Stock disponible')
            }

        } catch (error) {
            showNotification('error', 'upRight', 'Hubo un error generando la orden' + error.message)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1 className={classes.orderLoading}>Se esta generando su orden ...</h1>
    }

    if (orderId) {
        return <div className={classes.correctOrderConteiner} >
            <h1 className={classes.correctOrderTitle}>La orden se ha generado correctamente. <br></br> Orden N°:  <span>{orderId}</span></h1>
            <div className={classes.userData} >
                <h2>Datos de Envio:</h2>
                <h3>{name}
                </h3>
                <h3>{email}
                </h3>
                <h3>{direccion}
                </h3>
                <h3>{phone}
                </h3>
            </div>

        </div>

    }
    return (
        <div className={classes.checkoutConteiner}>
            <h1 className={classes.checkoutTitle}>Datos de Envio</h1>
            <div className={classes.checkoutFormConteiner}> <input type='text' placeholder='Nombre' onChange={handleChangeName} value={name} />
                <input type='email' placeholder='Correo Electrónico' onChange={handleChangeEmail} value={email} />
                <input type='tel' placeholder='Teléfono' onChange={handleChangePhone} value={phone} />
                <textarea placeholder='Dirección' onChange={handleChangeDireccion} value={direccion} /></div>
            <button className={classes.checkoutCreateOrderButton} onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default Checkout