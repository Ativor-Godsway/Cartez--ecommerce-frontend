import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAddOrderMutation } from "../redux/OrderApi";
import toast from "react-hot-toast";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [addOrder] = useAddOrderMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const order = {
        products: cartItems.map((item) => ({
          id: item._id,
          product: item.name,
          quantity: item.quantity,
        })),

        totalPrice: Number(totalPrice.toFixed(2)),
        status: "pending",
        ...data,
      };
      await addOrder(order).unwrap();
      document.getElementById("my_modal_2").showModal();
    } catch (error) {
      console.error(error);
      toast.error("Error Adding Item!");
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-7 p-3">
        <div className="w-full md:w-[50vw]">
          <h1 className="font-serif font-semibold text-3xl md:text-4xl mb-5">
            Order Information
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">Name</label>

              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Contact */}
            <div className="form-control">
              <label className="label">Contact</label>
              <input
                type="tel"
                {...register("contact", { required: "Contact is required" })}
                placeholder="Phone number"
                className="input input-bordered w-full"
              />
              {errors.contact && (
                <span className="text-red-500 text-sm">
                  {errors.contact.message}
                </span>
              )}
            </div>

            {/* City */}
            <div className="form-control">
              <label className="label">City</label>
              <input
                type="text"
                {...register("city", { required: "City is required" })}
                placeholder="Your city"
                className="input input-bordered w-full"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            {/* Country */}
            <div className="form-control">
              <label className="label">Country</label>
              <input
                type="text"
                defaultValue={"Ghana"}
                {...register("country", { required: "Country is required" })}
                placeholder="Your country"
                className="input input-bordered w-full"
              />
              {errors.country && (
                <span className="text-red-500 text-sm">
                  {errors.country.message}
                </span>
              )}
            </div>

            {/* Digital Address */}
            <div className="form-control">
              <label className="label">Digital Address</label>
              <input
                type="text"
                {...register("digitalAddress", {
                  required: "Digital address is required",
                })}
                placeholder="GhanaPost GPS e.g. GA-123-4567"
                className="input input-bordered w-full"
              />
              {errors.digitalAddress && (
                <span className="text-red-500 text-sm">
                  {errors.digitalAddress.message}
                </span>
              )}
            </div>

            {/* Payment Method */}
            <div className="form-control">
              <label className="label">Payment Method</label>
              <select
                {...register("paymentMethod", {
                  required: "Select a payment method",
                })}
                className=" select w-full"
              >
                <option value="">-- Select Payment Method --</option>
                <option value="momo">Mobile Money</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
                <option value="paystack">Paystack</option>
              </select>
              {errors.paymentMethod && (
                <span className="text-red-500 text-sm">
                  {errors.paymentMethod.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              className={`btn bg-black text-white hover:bg-[#6d6d6d] rounded-full w-full py-2 my-5 mt-5 text-[1.2rem] `}
            >
              Place Order
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
          </form>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-2xl font-serif flex gap-3 items-center ">
                <IoIosCheckmarkCircle className="text-green-600 size-10" />{" "}
                Order Succesful!
              </h3>
              <p className="py-4">
                Your order has been placed successfully! Our sales
                representative will contact you as soon as your order is ready
                for delivery.
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => navigate("/")}>close</button>
            </form>
          </dialog>
        </div>
        <div className="border rounded-xl h-fit p-3 w-full md:w-[30vw]">
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
          <div className="max-h-[50vh] overflow-auto">
            <h3 className="text-2xl font-serif mt-4 ">Orders</h3>
            {cartItems.map((product) => (
              <div key={product.name} className="flex gap-3 my-3">
                <img
                  src={product.image?.url}
                  alt={product.name}
                  className="w-[30%] aspect-square object-contain rounded "
                />
                <div>
                  <h3 className="text-[1.3rem] font-serif font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-[#5b5b5b]">Size : {product.size}</p>
                  <p className="text-[#5b5b5b]">
                    Quantity : {product.quantity}
                  </p>
                  <p className="text-[1.1rem] font-serif italic">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
