import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ category }) => {
  return (
    <div
      className={`flex flex-col justify-end items-start pl-10 pb-10 h-[80vh] w-full bg-cover  bg-top text-white mt-3 relative  `}
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[50%] w-full  absolute  bottom-0 left-0 bg-gradient-to-t from-[#000000a1]  to-transparent"></div>
      <p className="font-light text-[#cecdcd] z-10">{category.description}</p>
      <h1 className="text-4xl z-10">{category.name}</h1>

      <Link to={`/${category.category}`} className="z-10">
        <button className="btn bg-white text-[1.2rem] text-black border border-black px-5 py-1 mt-5 rounded-full hover:bg-[#c1c1c1] ">
          Shop
        </button>
      </Link>
    </div>
  );
};

export default ShopCard;
