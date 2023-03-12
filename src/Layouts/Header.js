import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

import styles from "./Header.module.scss";

const Header = (props) => {
  const { btn } = styles;

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          My Recipe
        </Typography>
        <div className={btn}>
          <Button
            variant="outlined"
            color="textColor"
            size="large"
            startIcon={<LoginIcon />}
          >
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
