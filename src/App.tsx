import NavBar from "components/navbar";
import Notifications from "react-notify-toast";
import ProductCategory from "components/productCategory";
import SearchBar from "components/searchBar";
import Home from "screens/home";
import ProductIndex from "screens/productIndex";

function App() {
  return (
    <>
      <Notifications options={{ top: 60, zIndex: 9999 }} />
      <NavBar />
      <SearchBar />
      <Home />
      <ProductIndex />
      <ProductCategory />
    </>
  );
}

export default App;
