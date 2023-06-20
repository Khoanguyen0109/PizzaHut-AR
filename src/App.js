import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ArView from "./page/ArView";
import Menu from "./page/Menu";
import MenuDetail from "./page/MenuDetail";
import Checkout from "./page/Checkout";

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
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
            <Route path="/ar" element={<ArView />} />{" "}
            {/* 👈 Renders at /app/ */}
            <Route path="/menu" element={<Menu />} />{" "}
            {/* 👈 Renders at /app/ */}
            <Route path="/menu-detail" element={<MenuDetail />} /> {/* 👈 Renders at /app/ */}
            <Route path="/checkout" element={<Checkout />} /> {/* 👈 Renders at /app/ */}
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
