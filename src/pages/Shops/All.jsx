import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/productsApi";
import ProductCard from "../../components/productCard";
import Skeleton from "../../components/Skeleton";

const All = () => {
  const { data, isLoading } = useGetProductsQuery();
  const products = data ? data : [];
  const [category, setCategory] = useState("all");

  const sortedProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <div className="flex justify-between items-center flex-row-reverse md:hidden p-3">
        <div className="flex md:hidden">
          <label className="label">Sort Category</label>
          <select
            name="category"
            id="category"
            className="select"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="streetwear">Streetwear</option>
            <option value="shoe">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="formal-wear">Formal Wear</option>
          </select>
        </div>
        <h1 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl">
          Our Shop
        </h1>
      </div>
      <h1 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl hidden md:block ml-5">
        Our Shop
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-2">
        {sortedProducts.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
};

export default All;
