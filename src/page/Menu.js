import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  Tab,
  Tabs,
} from "@mui/material";
import TCard from "components/TCard";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#e0e0e0" }}>
      <Box
        sx={{ background: "#da291c", "& .Mui-selected": { color: "white !important" } }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
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
        <Box sx={{ width: "100%" }}>
          <BottomNavigation
            showLabels
            value={1}
            onChange={(event, newValue) => {
              // setValue(newValue);
            }}
          >
            <BottomNavigationAction
              style={{ flex: 1 }}
              label="Back"
              icon={<ArrowBackIcon />}
            />

            <BottomNavigationAction
              style={{ flex: 1 }}
              label="Add to Card"
              icon={<ShoppingCartIcon />}
            />
          </BottomNavigation>
        </Box>
      </Box>
    </Box>
  );
}

export default Menu;
