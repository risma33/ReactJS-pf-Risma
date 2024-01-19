import React from 'react';
import classes from './ItemCard.module.css'
import { Link, useNavigate } from "react-router-dom";

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
    img, }) => {
        const navigate = useNavigate()
    return (
        <div className={classes.productCard} onClick={()=> navigate(`/detail/${id}`)}>
            <img className={classes.productThumbnail} src={img} alt={title} />
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
            
            </div>
        </div>



    )
}

export default ItemCard