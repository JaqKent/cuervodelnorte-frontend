import NavBar from "components/navbar";
import SearchBar from "components/searchBar";
import Home from "screens/home";
import ProductIndex from "screens/productIndex";

function App() {
  return (
    <>
      <NavBar />
      <SearchBar />

      <ProductIndex />
    </>
  );
}

export default App;
