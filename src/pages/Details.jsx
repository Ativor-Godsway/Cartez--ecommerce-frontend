import { Link, useNavigate, useParams } from "react-router-dom";
import { products, useGetProductQuery } from "../redux/productsApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import toast from "react-hot-toast";

const Details = () => {
  const [size, setSize] = useState(0);
  const { id } = useParams();
  const { data } = useGetProductQuery(id);
  const product = data ? data : {};
  console.log(product);
  console.log(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (size === 0 && product.category !== "accessories") {
      return alert("Select your preferred size");
    }
    const item = { ...product, size: size };
    dispatch(addToCart(item));
    toast.success("Added");
  };

  const handleBuyNow = (product) => {
    if (size === 0) {
      return alert("Select your preferred size");
    }
    const item = { ...product, size: size };
    dispatch(addToCart(item));
    toast.success("Added");
    navigate("/cart");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 p-2">
      <img
        src={product?.image?.url}
        alt={product.name}
        className="w-full md:w-[45vw] aspect-square object-contain object-center"
      />
      <div>
        <h1 className="text-4xl font-serif font-semibold">{product.name}</h1>
        <p className="text-[#6f6e6e] ">{product.description}</p>
        <p className="text-3xl mt-4">${product.price}</p>
        <div>
          <h3 className="mt-7 text-[1.2rem]">Select Size:</h3>
          <div className="grid grid-cols-2 mt-2 ">
            {[
              "XS (UK 4–6)",
              "S (UK 8–10)",
              "M (UK 12–14)",
              "L (UK 16–18)",
              "XL (UK 20–22)",
              "XXL (UK 24-26)",
            ].map((sizeOption) => (
              <button
                disabled={product.category === "accessories"}
                key={sizeOption}
                className={`border  px-4 py-2 m-1 rounded hover:bg-gray-200 ${
                  size === sizeOption
                    ? "border-black border-2"
                    : "border-gray-400"
                }  ${
                  product.category === "accessories"
                    ? "border-gray-400 text-gray-400 cursor-not-allowed "
                    : ""
                }`}
                onClick={() => setSize(sizeOption)}
              >
                {sizeOption}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 md:mt-20">
          <button
            className="btn bg-black text-white text-[1.2rem] w-full py-2 hover:bg-[#373737] hover:shadow-lg rounded-full"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>

          <button
            className="btn mt-4 bg-white text-black border border-[#707070] text-[1.2rem] hover:shadow-lg  w-full py-2 hover:border-[black] rounded-full"
            onClick={() => handleBuyNow(product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
