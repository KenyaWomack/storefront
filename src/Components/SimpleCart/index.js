import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const SimpleCart = ({ cartItems }) => {
  return (
    <div>
      <Typography variant="body2">SimpleCart</Typography>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

SimpleCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SimpleCart;
