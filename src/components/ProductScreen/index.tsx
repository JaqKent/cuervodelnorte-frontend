import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "components/Spinner";
import ProductPage from "components/ProductPage";
import { ProductsContext } from "context/Product";

function ProductScreen() {
  const { id } = useParams<string>();
  const { gatherSingleProduct, singleProduct, isLoading } =
    useContext(ProductsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      gatherSingleProduct(id);
    }
  }, [gatherSingleProduct, id]);
  return (
    <div>
      {isLoading && <Spinner />}
      <ProductPage product={singleProduct} />
    </div>
  );
}

export default ProductScreen;
