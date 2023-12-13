import React from 'react';
import classes from './ItemCard.module.css'
import { Link } from "react-router-dom";

const ItemCard = ({ id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images, }) => {
    return (
        <div className={classes.productCard}>
            <img className={classes.productThumbnail} src={thumbnail} alt={title} />
            <div className={classes.productDetails}>
                <h3>{title}</h3>
                <div>
                    <div className={classes.productPrice}>
                        ${price}
                    </div>
                    <div className={classes.productDiscount}>
                        {discountPercentage}% OFF
                    </div>
                </div>
                <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>ver detalle
                </Link>
            </div>
        </div>



    )
}

export default ItemCard