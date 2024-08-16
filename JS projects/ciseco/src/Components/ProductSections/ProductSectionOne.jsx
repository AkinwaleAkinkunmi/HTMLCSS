"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";

const url = "https://fakestoreapi.com/products";

const ProductSectionOne = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log("This is my data", products);
  return (
    <div>
      {products.map((product) => (
        <div>
          <Image
            className="w-[30%]"
            src={product.image}
            unoptimized={true}
            width={0}
            height={0}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductSectionOne;
