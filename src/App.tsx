import NavBar from "components/navbar";
import Notifications from "react-notify-toast";
import SearchBar from "components/searchBar";
import ProductIndex from "screens/productIndex";
import Home from "screens/Home";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "components/footer/Index";
import ProductPage from "components/productPage";
import ProductCategory from "components/productCategory";
import ProductsProvider from "context/Product";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA || "");
  }, []);
  return (
    <Router>
      <Notifications options={{ top: 60, zIndex: 9999 }} />
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
