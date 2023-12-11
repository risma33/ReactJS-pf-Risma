import classes from './CartWidget.module.css'


const CartWidget = ({ itemCount }) => {
  return (
    <div className={classes.CartWidgetBadge}>
      <i className={`fas fa-shopping-cart ${classes.CartIcon}`}></i>
      <span className={classes.CartItemCount}>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
