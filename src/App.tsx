import NavBar from "components/navbar";
import Notifications from "react-notify-toast";
import SearchBar from "components/searchBar";
import ProductIndex from "screens/productIndex";
import Home from "screens/Home";
import { useEffect } from "react";
import ReactGA from "react-ga";
import Footer from "components/footer/Index";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA || "");
  }, []);
  return (
    <>
      <Notifications options={{ top: 60, zIndex: 9999 }} />
      <NavBar />
      <SearchBar />
      <Home />
      <ProductIndex />
      <Footer />
    </>
  );
}

export default App;
