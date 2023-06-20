import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ArView from "./page/ArView/ArView";
import Menu from "./page/Menu";
import MenuDetail from "./page/MenuDetail";
import Checkout from "./page/Checkout";
import Payment from "./page/Finish";
import Summary from "./page/Summary";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CartContextProvider } from "context/CartContext";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/ar-view" element={<ArView />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu-detail" element={<MenuDetail />} />{" "}
            <Route path="/checkout" element={<Checkout />} />{" "}
            <Route path="/payment" element={<Payment />} />{" "}
            <Route path="/summary" element={<Summary />} />{" "}
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
