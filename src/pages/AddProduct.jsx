import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../redux/productsApi";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("price", data.price);
      formData.append("image", data.image[0]); // grab the first file

      await addProduct(formData).unwrap();
      toast.success("Product added successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Error Adding Product");
    }
  };

  return (
    <div className=" w-full">
      <button onClick={() => navigate(-1)} className="btn btn-ghost btn-circle">
        <IoChevronBack size={30} />
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[95vw]  md:w-[50vw] mx-auto mt-10 p-6 bg-[#fdfdfd] rounded-xl shadow-lg m-auto"
      >
        {/* Name */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-error text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Enter product description"
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full"
          />
          {errors.description && (
            <p className="text-error text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Category */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            className="select  w-full"
          >
            <option value="">-- Select Category --</option>
            <option value="shoe">Shoe</option>
            <option value="accessories">Accessories</option>
            <option value="streetwear">Streetwear</option>
            <option value="formal-wear">Formal-wear</option>
          </select>
          {errors.category && (
            <p className="text-error text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Price */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Price ($)</span>
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="Enter product price"
            {...register("price", {
              required: "Price is required",
              min: { value: 1, message: "Price must be greater than 0" },
            })}
            className="input input-bordered w-full"
          />
          {errors.price && (
            <p className="text-error text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Image */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: "Image is required" })}
            className="file-input file-input-bordered w-full"
          />
          {errors.image && (
            <p className="text-error text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn bg-black text-white hover:bg-[#313131] w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
