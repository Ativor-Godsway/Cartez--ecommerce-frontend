import { TfiTrash } from "react-icons/tfi";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex  justify-between w-full">
        <div>
          <figure className="flex gap-3">
            <img
              src={product?.image?.url}
              alt={product.name}
              className="w-32 aspect-square object-contain object-center rounded "
            />
            <div>
              <h2 className="text-[1.5rem] text-semibold">{product.name}</h2>
              <p className="text-[#525252]">{product.category}</p>
              <p>
                Size{" : "}
                <span className="underline text-[0.9rem]">{product.size}</span>
              </p>
            </div>
          </figure>
          <div className="flex gap-5 py-2 px-4 border rounded-full w-32 items-center justify-center mt-3">
            {product.quantity === 1 ? (
              <TfiTrash onClick={() => dispatch(removeFromCart(product._id))} />
            ) : (
              <LuMinus
                onClick={() => dispatch(decreaseQuantity(product._id))}
              />
            )}
            <div>
              <p>{product.quantity}</p>
            </div>
            <LuPlus onClick={() => dispatch(addToCart(product))} />
          </div>
        </div>
        <p className="text-[1.1rem] font-semibold">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>
      <hr className="mb-5 mt-2" />
    </div>
  );
};

export default CartItem;
