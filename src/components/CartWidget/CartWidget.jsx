import classes from './CartWidget.module.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = ({ itemCount }) => {
  return (
    <Badge pill className={classes.CartWidgetBadge}>
    <i className="fas fa-shopping-cart"></i>
    <span className={classes.CartItemCount}>9</span>
  </Badge>
  );
};

export default CartWidget;
