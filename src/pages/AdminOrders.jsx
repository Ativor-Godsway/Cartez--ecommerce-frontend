import { useState } from "react";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../redux/OrderApi";
import toast from "react-hot-toast";
import { TfiTrash } from "react-icons/tfi";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const AdminOrders = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const { data, error } = useGetOrdersQuery();
  const orders = data ? data : [];

  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  const handleDelete = async (id) => {
    try {
      deleteOrder(id);
      toast.success("Deleted Product");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting order.");
    }
  };

  return (
    <div className="overflow-x-auto  md:mx-3 w-full">
      <h2 className="text-3xl font-serif font-semibold mb-5">Orders</h2>
      {orders.length === 0 ? (
        <div className="w-[100vw] md:w-[74vw] flex-col h-[90vh] flex items-center justify-center ">
          <CiNoWaitingSign size={70} />
          <p className="text-3xl">No Orders Yet</p>
        </div>
      ) : (
        <table className="table w-[100vw] md:w-full border">
          {/* Table Head */}
          <thead>
            <tr className="border-b">
              <th>Name</th>
              <th>Products</th>
              <th>Total Price</th>
              <th className="hidden md:flex">Contact</th>
              <th className="hidden md:table-cell">Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orders.map((order, index) => (
              <>
                {/* Summary Row */}
                <tr key={order._id} className="">
                  <td className="align-top">
                    <div className="flex flex-col md:flex-row gap-1">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                        checked={order.status === "completed"}
                        onChange={() =>
                          updateOrderStatus({
                            id: order._id,
                            status:
                              order.status === "pending"
                                ? "completed"
                                : "pending",
                          })
                        }
                      />
                      <strong>{order.name}</strong>
                    </div>
                  </td>
                  <td>
                    <div className="grid ">
                      {order.products.map((p, i) => (
                        <span
                          key={i}
                          className="border-2 border-black rounded-lg p-1 m-1"
                        >
                          {p.product} × {p.quantity}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="align-top">${order.totalPrice}</td>
                  <td className="hidden md:flex">{order.contact}</td>
                  <td className="align-top hidden md:table-cell">
                    <span
                      className={`badge ${
                        order.status === "pending"
                          ? "badge-warning"
                          : "badge-success"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="align-top">
                    <div className="flex gap-2 items-center">
                      <TfiTrash
                        size={30}
                        onClick={() => handleDelete(order._id)}
                        className="md:block hidden"
                      />
                      <button className="" onClick={() => toggleExpand(index)}>
                        {expanded === index ? (
                          <FaEyeSlash size={30} />
                        ) : (
                          <FaEye size={30} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Expanded Row */}
                {expanded === index && (
                  <tr>
                    <td colSpan="5" className="  p-4">
                      <div className="space-y-2">
                        <p>
                          <strong>City:</strong> {order.city}
                        </p>
                        <p>
                          <strong>Country:</strong> {order.country}
                        </p>
                        <p className="block md:hidden">
                          <strong>Contact:</strong> {order.contact}
                        </p>
                        <p>
                          <strong>Digital Address:</strong>{" "}
                          {order.digitalAddress}
                        </p>
                        <p>
                          <strong>Payment Method:</strong> {order.paymentMethod}
                        </p>
                        <p className="block md:hidden">
                          <strong>Status:</strong>{" "}
                          <span
                            className={`badge ${
                              order.status === "pending"
                                ? "badge-warning"
                                : "badge-success"
                            }`}
                          >
                            {order.status}
                          </span>
                        </p>
                        <TfiTrash
                          size={30}
                          onClick={() => handleDelete(order._id)}
                          className="block md:hidden"
                        />
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;
