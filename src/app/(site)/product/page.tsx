import ProductList from "@/components/ProductList";
import React from "react";
import { faker } from "@faker-js/faker/locale/id_ID";
import Ppob from "@/components/Ppob";

export const revalidate = 0;

const getProducts = async () => {
  return Array.from({ length: 10 }).map(() => {
    return {
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      image: faker.image.abstract(),
      button: "Add to cart",
      href: "#",
    };
  });
};

const Product = async () => {
  const products = await getProducts();
  return (
    <>
      <div className="bg-gray-100">
        <Ppob />
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products to choose
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
