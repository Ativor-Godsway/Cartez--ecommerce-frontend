import ShopCard from "./shopCard";

const Collection = () => {
  const categories = [
    {
      name: "Streetwear",
      description: "Nothing interesting yet",
      image: `streetwear.jpg`,
      category: "streetwear",
    },
    {
      name: "Shoes",
      description: "Nothing interesting yet",
      image: "shoe.jpg",
      category: "shoes",
    },
    {
      name: "Accessories",
      description: "Nothing interesting yet",
      image: "accessories.jpg",
      category: "accessories",
    },
    {
      name: "Formal Wear",
      description: "Nothing interesting yet",
      image: "formal.jpg",
      category: "formal-wear",
    },
  ];

  return (
    <div className="pb-10">
      <h2 className="mt-10 text-5xl font-serif pl-5">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 md:px-5">
        {categories.map((category, index) => (
          <ShopCard category={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
