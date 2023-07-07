
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, } from '@mui/material';

const Header = () => {
  const { cart } = useSelector((state) => state);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Store
        </Typography>
        <Typography variant="body2">Cart ({cart.length})</Typography>
        {/* <Badge badgeContent={cart.length} color="secondary">
          <Typography variant="body2">{cart.length}</Typography>
        </Badge> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
