import React from "react";
import { useGetProductsQuery } from "../../redux/productsApi";
import ProductCard from "../../components/productCard";
import Skeleton from "../../components/Skeleton";

const Shoe = () => {
  const { data, isLoading } = useGetProductsQuery();
  const products = data ? data : [];
  const shoes = products.filter((product) => product.category === "shoe");

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <h1 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl ml-5">
        Shoes
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-2  ">
        {shoes.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
};

export default Shoe;
