import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import Notifications from "react-notify-toast";
import NavBar from "components/NavBar";
import SearchBar from "components/SearchBar";
import ProductPage from "components/ProductPage";
import ProductCategory from "components/ProductCategory";
import ProductsProvider from "context/Product";
import ProductIndex from "screens/productIndex";

import { notifications } from "./constant";
import Footer from "components/footer/Index";
import Home from "screens/home";

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
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </ProductsProvider>
      <Footer />
    </Router>
  );
}

export default App;
