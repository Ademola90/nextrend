import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../../services/apiFirstProducts";
import Spinner from "../../ui/spinner";

function ProductsTable({ productIdsToInclude }) {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <Spinner />;

  // Filter the products based on the included IDs
  const filteredProducts = productIdsToInclude
    ? products.filter((product) => productIdsToInclude.includes(product.id))
    : products;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-white px-5 py-10 rounded-md">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="shadow-md rounded-md p-4 truncate hover:scale-105 hover:duration-300 ease-in"
          >
            <img className="w-[250px] h-[250px]" src={product.image} alt="" />
            <div className="py-3">
              <p className="text-black font-bold">{product.name}</p>
              <p className="text-black">{product.productDesc}</p>
              <p className="text-black font-semibold">
                #{product.productPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsTable;
