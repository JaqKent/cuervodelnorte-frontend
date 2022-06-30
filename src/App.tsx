import Footer from "components/footer/Index";
import NavBar from "components/navbar";
import ProductPage from "components/productPage";
import SearchBar from "components/searchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "screens/home";
import ProductIndex from "screens/productIndex";

function App() {
  return (
    <Router>
      <NavBar />
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
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
