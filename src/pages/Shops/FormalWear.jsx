import React from "react";
import { useGetProductsQuery } from "../../redux/productsApi";
import ProductCard from "../../components/productCard";
import Skeleton from "../../components/Skeleton";

const FormalWear = () => {
  const { data, isLoading } = useGetProductsQuery();
  const products = data ? data : [];
  const FormalWears = products.filter(
    (product) => product.category === "formal-wear"
  );

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <h1 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl ml-5">
        Formal Wear
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-2">
        {FormalWears.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
};

export default FormalWear;
