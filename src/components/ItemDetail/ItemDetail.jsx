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
                <div className={classes.itemDetail_img}>
                   <img className={classes.itemImg} src={thumbnail} alt={title} /> 
                </div>
                
                <div className={classes.itemDetail_Title}>
                    <h3>{title}</h3>
                    <h2>{description}</h2>
                </div>
                <div className={classes.itemDetail_Price}>
                    <div>
                        ${price} ({discountPercentage}% off)
                        <ItemCount/>
                    </div>
                </div>
                
            </div>
        )
}

export default ItemDetail