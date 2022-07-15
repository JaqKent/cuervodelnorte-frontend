import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import Notifications from "react-notify-toast";

import ProductCategory from "components/ProductCategory";
import ProductScreen from "components/ProductScreen";
import SearchBar from "components/SearchBar";
import Footer from "components/Footer/index";
import NavBar from "components/NavBar";
import ProductsProvider from "context/Product";

import Home from "screens/Home";
import ProductIndex from "screens/productIndex";

import { notifications } from "./constant";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA || "");
  }, []);
  return (
    <Router>
      <Notifications options={notifications} />
      <NavBar />
      <ProductsProvider>
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
        </Routes>
      </ProductsProvider>
      <Footer />
    </Router>
  );
}

export default App;
