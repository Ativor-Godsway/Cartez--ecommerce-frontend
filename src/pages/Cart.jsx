import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/CartSlice";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-7 p-3">
        <div className="w-full md:w-[50vw]">
          <div className="w-full flex items-center justify-between mb-5">
            <h1 className="font-serif font-semibold text-3xl md:text-4xl ">
              Your Cart
            </h1>
            <p
              className="font-light underline text-[#343434] hover:text-red-700"
              onClick={() => dispatch(clearCart())}
            >
              clear
            </p>
          </div>
          {cartItems.length === 0 ? (
            <p>No cart item</p>
          ) : (
            cartItems.map((product) => (
              <CartItem key={product.name} product={product} />
            ))
          )}
        </div>
        <div className="border rounded-xl h-fit p-3 w-full md:w-[30vw] shadow-lg">
          <h2 className="text-[1.6rem] md:text-3xl">Summary</h2>
          <p className="flex justify-between items-center my-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </p>
          <p className="flex justify-between items-center">
            <span>Estimated Delivery</span>
            <span className="text-green-600">FREE</span>
          </p>
          <hr />
          <p className="flex justify-between items-center text-2xl font-semibold py-4">
            <span>Total</span>
            <span className="text-2xl font-semibold italic">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
          <hr />
          <button
            className={`btn rounded-full w-full py-2 mt-5 text-[1.2rem] ${
              cartItems.length === 0
                ? "bg-gray-300 text-[#686868]  cursor-not-allowed hover:none"
                : " bg-black text-white  hover:bg-[#373737] hover:shadow-lg"
            }`}
            onClick={() => navigate("/checkout")}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
