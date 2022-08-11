import SearchBar from "components/SearchBar";
import Home from "screens/Home";
import ProductIndex from "screens/productIndex";

function HomeScreen() {
  return (
    <>
      <SearchBar />
      <Home />
      <ProductIndex />
    </>
  );
}

export default HomeScreen;
