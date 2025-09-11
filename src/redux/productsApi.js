import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { data } from "react-router-dom";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api/products",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("cartezAdminToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    // GET all Product items
    getProducts: builder.query({
      query: () => "/",
      providesTags: ["Product"],
    }),

    // GET a single Product item
    getProduct: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    // Add a new Product
    addProduct: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),

    // UPDATE a Product item
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    // DELETE a Product item
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = ProductApi;

export default ProductApi;

export const products = [
  {
    name: "Urban Runner",
    description:
      "Urban Runner designed for shoe lovers who want both comfort and style. ",
    price: 205.81,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1001?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Street Flex",
    description:
      "Street Flex designed for shoe lovers who want both comfort and style.",
    price: 64.26,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Night Glide",
    description:
      "Night Glide designed for shoe lovers who want both comfort and style.",
    price: 176.53,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1003?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "High Stepper",
    description:
      "High Stepper designed for shoe lovers who want both comfort and style.",
    price: 227.92,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1004?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bold Stride",
    description:
      "Bold Stride designed for shoe lovers who want both comfort and style.",
    price: 141.67,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1005?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Wave Rider",
    description:
      "Wave Rider designed for shoe lovers who want both comfort and style.",
    price: 198.11,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1006?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Classic Court",
    description:
      "Classic Court designed for shoe lovers who want both comfort and style.",
    price: 112.4,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1007?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Storm Kicks",
    description:
      "Storm Kicks designed for shoe lovers who want both comfort and style.",
    price: 159.73,
    category: "shoe",
    image:
      "https://images.unsplash.com/photo-1008?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },

  {
    name: "Graffiti Hoodie",
    description:
      "Graffiti Hoodie designed for streetwear lovers who want both comfort and style.",
    price: 119.42,
    category: "streetwear",
    image:
      "https://images.unsplash.com/photo-1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Oversized Tee",
    description:
      "Oversized Tee designed for streetwear lovers who want both comfort and style.",
    price: 58.39,
    category: "streetwear",
    image:
      "https://images.unsplash.com/photo-1012?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cargo Joggers",
    description:
      "Cargo Joggers designed for streetwear lovers who want both comfort and style.",
    price: 86.91,
    category: "streetwear",
    image:
      "https://images.unsplash.com/photo-1013?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Street Bomber",
    description:
      "Street Bomber designed for streetwear lovers who want both comfort and style.",
    price: 160.28,
    category: "streetwear",
    image:
      "https://images.unsplash.com/photo-1014?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Denim Jacket",
    description:
      "Denim Jacket designed for streetwear lovers who want both comfort and style.",
    price: 142.0,
    category: "streetwear",
    image:
      "https://images.unsplash.com/photo-1015?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Layered Flannel",
    description:
      "Layered Flannel designed for streetwear lovers who want both comfort and style.",
    price: 94.12,
    category: "streetwear",
    image:
      "https://images.unsplash.com/photo-1016?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Skater Shorts",
    description:
      "Skater Shorts designed for streetwear lovers who want both comfort and style.",
    price: 75.66,
    category: "streetwear",
    image:
      "https://images.unsplash.com/photo-1017?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },

  {
    name: "Leather Strap Watch",
    description:
      "Leather Strap Watch designed for accessories lovers who want both comfort and style.",
    price: 135.55,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1020?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Crossbody Bag",
    description:
      "Crossbody Bag designed for accessories lovers who want both comfort and style.",
    price: 84.5,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1021?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Beanie Hat",
    description:
      "Beanie Hat designed for accessories lovers who want both comfort and style.",
    price: 45.8,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1022?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aviator Sunglasses",
    description:
      "Aviator Sunglasses designed for accessories lovers who want both comfort and style.",
    price: 145.9,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1023?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chunky Chain",
    description:
      "Chunky Chain designed for accessories lovers who want both comfort and style.",
    price: 99.45,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1024?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Snapback Cap",
    description:
      "Snapback Cap designed for accessories lovers who want both comfort and style.",
    price: 53.3,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1025?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Wristband Set",
    description:
      "Wristband Set designed for accessories lovers who want both comfort and style.",
    price: 39.99,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1026?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Minimalist Ring",
    description:
      "Minimalist Ring designed for accessories lovers who want both comfort and style.",
    price: 62.15,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },

  {
    name: "Slim Fit Blazer",
    description:
      "Slim Fit Blazer designed for formal-wear lovers who want both comfort and style.",
    price: 230.0,
    category: "formal-wear",
    image:
      "https://images.unsplash.com/photo-1031?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Oxford Shirt",
    description:
      "Oxford Shirt designed for formal-wear lovers who want both comfort and style.",
    price: 110.25,
    category: "formal-wear",
    image:
      "https://images.unsplash.com/photo-1032?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tailored Pants",
    description:
      "Tailored Pants designed for formal-wear lovers who want both comfort and style.",
    price: 142.66,
    category: "formal-wear",
    image:
      "https://images.unsplash.com/photo-1033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Classic Tie",
    description:
      "Classic Tie designed for formal-wear lovers who want both comfort and style.",
    price: 55.4,
    category: "formal-wear",
    image:
      "https://images.unsplash.com/photo-1034?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Double Breasted Suit",
    description:
      "Double Breasted Suit designed for formal-wear lovers who want both comfort and style.",
    price: 299.99,
    category: "formal-wear",
    image:
      "https://images.unsplash.com/photo-1035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Leather Dress Shoes",
    description:
      "Leather Dress Shoes designed for formal-wear lovers who want both comfort and style.",
    price: 180.22,
    category: "formal-wear",
    image:
      "https://images.unsplash.com/photo-1036?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Velvet Tuxedo",
    description:
      "Velvet Tuxedo designed for formal-wear lovers who want both comfort and style.",
    price: 350.75,
    category: "formal-wear",
    image:
      "https://images.unsplash.com/photo-1037?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];
