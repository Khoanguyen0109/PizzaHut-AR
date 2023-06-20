import { Badge, Box, Fab, Grid, Tab, Tabs } from "@mui/material";
import TCard from "components/TCard";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "context/CartContext";
const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
  backgroundColor: "red",
  color: "white",
};
function Menu() {
  const { cart } = useCart();
  const totalItem = cart.length;
  console.log("totalItem", totalItem);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#e0e0e0" }}>
      <Box
        sx={{
          background: "#da291c",
          "& .Mui-selected": { color: "white !important" },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Pizza" />
          <Tab label="Deserts" />
          <Tab label="Beverages" />
          <Tab label="Wingstreet" />
          <Tab label="Sides" />
        </Tabs>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          sx={{ margin: "12px" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <TCard />
          </Grid>
          <Grid item xs={6}>
            <TCard />
          </Grid>
          <Grid item xs={6}>
            <TCard />
          </Grid>
          <Grid item xs={6}>
            <TCard />
          </Grid>
        </Grid>
        <Fab sx={fabStyle} aria-label={"Add"} color={"red"}>
          <Badge badgeContent={totalItem} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </Fab>
      </Box>
    </Box>
  );
}

export default Menu;
