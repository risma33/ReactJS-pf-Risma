import React from 'react';
import classes from './item.module.css'

const Item = ({ id,
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
                <p>
                    {category}
                </p>
                <h3>{title}</h3>
                <p>
                     ${price} ({discountPercentage}% off)
                </p>
                <p>
                    <strong>Stock:</strong> {stock}
                </p>

            </div>
        </div>
    )
}

export default Item