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

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA || "");
  }, []);
  return (
    <Router>
      <Notifications options={{ top: 60, zIndex: 9999 }} />
      <NavBar />
      <Routes>
        <Router
          path="/"
          element={
            <>
              <SearchBar />
              <Home />
              <ProductIndex />
            </>
          }
        />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
