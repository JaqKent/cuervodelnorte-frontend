import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import Notifications from "react-notify-toast";

import ProductCategory from "components/ProductCategory";
import ProductScreen from "components/ProductScreen";
import NavBar from "components/NavBar";
import Footer from "components/Footer/Index";

import ProductsProvider from "context/Product";
import CartProvider from "context/Cart";

import HomeScreen from "screens/HomeScreen";
import Cart from "screens/Cart";

import { notifications } from "./constant";
import AboutUs from "screens/AboutUs";

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
            <Route path="/productcategory/:id" element={<ProductCategory />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
      <Footer />
    </Router>
  );
}

export default App;
