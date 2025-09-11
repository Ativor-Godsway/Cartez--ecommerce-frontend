import React from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/productsApi";
import { TfiTrash } from "react-icons/tfi";
import { AiOutlineEdit } from "react-icons/ai";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const { data } = useGetProductsQuery();
  const products = data ? data : [];
  console.log(products);

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id) => {
    try {
      deleteProduct(id);
      toast.success("Deleted Product");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="pb-10 pl-2 lg:pl-[3rem] w-full">
      <h1 className="text-4xl font-serif font-semibold  ">Products</h1>
      <div className="flex items-center justify-center">
        <Link
          className="border flex items-center flex-col p-5 rounded-lg border-black mb-10 transition-all duration-100 hover:scale-[1.01] "
          to={"/admin/add-product"}
        >
          <RiStickyNoteAddFill className="size-[5rem]" />
          <p className="text-[1.2rem] font-light">Add New Product</p>
        </Link>
      </div>
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pl-3">Item</th>
              <th className="text-left py-2 pr-10 pl-3 border border-t-transparent">
                Price
              </th>
              <th className="text-left py-2 pl-3 border border-t-transparent">
                Description
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name} className="border-b">
                <td className="py-2">
                  <div className="flex flex-col lg:flex-row justify-center md:justify-start text-center items-center gap-2 ">
                    <img
                      src={product.image.url}
                      alt={product.name}
                      className="w-16 md:w-24 aspect-square object-contain rounded "
                      loading="lazy"
                    />
                    {product.name}
                  </div>
                </td>
                <td className="py-2 pr-10 pl-3  text-left border ">
                  ${product.price}
                </td>
                <td className="py-2 pl-3 border border-t-transparent">
                  {product.description}
                </td>
                <td className="py-2 px-3 ">
                  <div className="flex gap-3">
                    <TfiTrash
                      className="hover:text-red-500 size-5"
                      onClick={() => {
                        handleDelete(product._id);
                      }}
                    />
                    <Link to={`/admin/update-product/${product._id}`}>
                      {" "}
                      <AiOutlineEdit className="size-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
