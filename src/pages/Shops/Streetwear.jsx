import { useGetProductsQuery } from "../../redux/productsApi";
import ProductCard from "../../components/productCard";
import Skeleton from "../../components/Skeleton";

const Streetwear = () => {
  const { data, isLoading } = useGetProductsQuery();
  const products = data ? data : [];
  const streetwears = products.filter(
    (product) => product.category === "streetwear"
  );

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <h1 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl ml-5">
        Streetwear
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-2">
        {streetwears.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
};

export default Streetwear;
