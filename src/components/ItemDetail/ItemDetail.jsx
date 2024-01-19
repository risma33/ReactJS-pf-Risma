import { useCart } from '../../context/CartContext';
import { useNotification } from '../../notificaciones/NotificationService';
import ConfirmWithText from '../ConfirmWithText/ConfirmWithText';
import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const ItemDetail = ({ id,
    title,
    description,
    price,
    discountPercentage,
    stock,
    img,
     }) => {
    const navigate = useNavigate()
    const [cantidadElegida, setCantidadElegida] = useState(1);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const {addItem, isInCart} = useCart()
    const { showNotification } = useNotification()

    const handleAddToCar = (quantity) => {
        const objProductToAdd = {
            id, title, price, quantity
        }
        addItem(objProductToAdd);
        setShowConfirmation(true);
        showNotification('success', 'upRight', `Se agrego correctamente ${quantity} "${title}" al carrito`);
    }

   

    const handleContinueShopping = () => {
        setShowConfirmation(false);
        navigate('/')
    };

    const handleGoToCart = () => {
        navigate('/cart')
    };


    return (
        <div className={classes.itemDetailConteiner}>
            <div className={classes.itemDetail_img}>
                <img className={classes.itemImg} src={img} alt={title} />
            </div>

            <div className={classes.itemDetail_Title}>
                <h3>{title}</h3>
                <h4>{description}
                    <p className={cantidadElegida === stock ? classes.pLimiteStock : ''}>In Stock:{stock}</p></h4>
                <h5>${price} ({discountPercentage}% off)</h5>


                <div className={classes.itemDetail_Price}>
                    <div>
                        {isInCart(id) ? (
                            <ConfirmWithText
                                onCancel={handleContinueShopping}
                                onConfirm={handleGoToCart}
                                titleText=""
                                cancelText="Seguir Comprando"
                                confirmText="Ir al carrito"
                            />

                        ) : (
                            <ItemCount
                                onAdd={handleAddToCar}
                                stock={stock}
                            />
                        )}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ItemDetail