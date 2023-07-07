import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <Typography variant="h6">Cart</Typography>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cart;
