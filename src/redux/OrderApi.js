import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("cartezAdminToken"); // adjust based on your auth slice
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const OrderApi = createApi({
  reducerPath: "OrderApi",
  baseQuery: baseQuery,
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    // GET all Order items
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Order"],
    }),

    // GET a single Order item
    getOrder: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: "Order", id }],
    }),

    // Add a new Order
    addOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder,

        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["Order"],
    }),

    // UPDATE a Order Status
    updateOrderStatus: builder.mutation({
      query: ({ id, ...status }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: status,
      }),
      invalidatesTags: ["Order"],
    }),

    // UPDATE a Order item
    updateOrder: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Order"],
    }),

    // DELETE a Order item
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetOrderQuery,
  useGetOrdersQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = OrderApi;

export default OrderApi;
