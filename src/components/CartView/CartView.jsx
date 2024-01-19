import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import classes from './CartView.module.css';

const CartView = () => {
    const { cart, total, removeItem } = useCart()

    return (
        <div className={classes.cartViewConteiner}>
            <h1 className={classes.cartViewTitle}>Tu Compra</h1>
            <div className={classes.cartViewMapList}>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className={classes.cartViewMapElementConteiner}>
                                <div className={classes.cartViewMapElementTitle}>{prod.title}</div>
                                <div className={classes.cartViewMapElementQuantity}>Cantidad: {prod.quantity}</div>
                                <div className={classes.cartViewMapElementPrice}>Precio unidad: ${prod.price}</div>
                                <div className={classes.cartViewMapElementSubtotal}>Subtotal: ${prod.quantity * prod.price}</div>
                                <button className={classes.cartViewMapElementDeletButton} onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className={classes.cartViewTotalPrice}>Total de la compra: ${total}</h1>
            <button className={classes.cartViewEndBuy}><Link to='/checkout'>Finalizar Compra</Link></button>
        </div>
    )
}

export default CartView