import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import Notifications from "react-notify-toast";

import ProductScreen from "components/ProductScreen";
import FooterBar from "components/FooterBar";

import ProductsProvider from "context/Product";
import CartProvider from "context/Cart";

import CategoryScreen from "screens/CategoryScreen";
import HomeScreen from "screens/HomeScreen";
import Cart from "screens/Cart";
import AboutUs from "screens/AboutUs";

import { notifications } from "./constant";
import NavBar from "components/NavBar";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA || "");
  }, []);

  return (
    <Router>
      <Notifications options={notifications} />
      <NavBar />
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/productcategory/:id" element={<CategoryScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
      <FooterBar />
    </Router>
  );
}

export default App;
