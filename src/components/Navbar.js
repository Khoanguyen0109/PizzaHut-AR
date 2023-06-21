import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import navLog from "assets/nav_log.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "context/CartContext";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const onHome = () => {
    navigate("/menu");
    clearCart();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "#212121" }}>
        <Toolbar disableGutters>
          <img
            src={navLog}
            style={{ width: "200px" }}
            alt="Logo"
            onClick={onHome}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
