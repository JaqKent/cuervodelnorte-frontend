import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import Notifications from "react-notify-toast";

import ProductCategory from "components/ProductCategory";
import ProductScreen from "components/ProductScreen";
import SearchBar from "components/SearchBar";

import NavBar from "components/NavBar";
import ProductsProvider from "context/Product";

import Home from "screens/Home";
import ProductIndex from "screens/productIndex";

import { notifications } from "./constant";
import Cart from "screens/Cart";
import CartProvider from "context/Cart";
import Footer from "components/Footer/Index";

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
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <Home />
                  <ProductIndex />
                </>
              }
            />
            <Route path="/productcategory/:id" element={<ProductCategory />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/Cart/:id" element={<Cart />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
      <Footer />
    </Router>
  );
}

export default App;
