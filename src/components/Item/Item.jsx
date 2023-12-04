const Item = ({name, price, descripcion, stock}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{descripcion}</h3>
            <h4>{price}</h4>
            <h5>{stock}</h5>
        </div>
    )
}

export default Item