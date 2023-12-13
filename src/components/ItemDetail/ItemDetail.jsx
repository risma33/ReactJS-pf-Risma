import ItemCount from '../ItemCount/ItemCount'
import classes from './ItemDetail.module.css'

const ItemDetail = ({ id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images }) => {
        return (
            <div className={classes.itemDetailConteiner}>
                <img className={classes.itemImg} src={thumbnail} alt={title} />
                <div className={classes.itemDetail}>
                    <h3>{title}</h3>
                    <p>
                         ${price} ({discountPercentage}% off)
                    </p>
                      
                </div>
                <ItemCount/>
            </div>
        )
}

export default ItemDetail