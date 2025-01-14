import ProductCard from "components/product-card/product-card";
import { products } from "utils/products";
import { useContext } from "react";
import { MainContext } from "utils/context";

function Store() {
  const { user, loading, filteredProducts } = useContext(MainContext);

  return loading ? (
    <div className="cart__message">Loading...</div>
  ) : user ? (
    <div className="store">
      {products.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      })}
    </div>
  ) : (
    <div className="store">
      {filteredProducts.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      })}
    </div>
  );
}
export default Store;
