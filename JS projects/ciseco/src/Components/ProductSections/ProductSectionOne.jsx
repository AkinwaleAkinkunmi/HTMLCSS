"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";

const url = "https://fakestoreapi.com/products";

const ProductSectionOne = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async (params) => {
    
  }
  const fetchProduct = async () => {
    setIsLoading(true);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setIsLoading(false);
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log("This is my data", products);
  return (
    <div className="pt-40 h-screen">
      {isLoading === true ? (
        <div className="text-center flex justify-center items-center h-screen">
          <span class="loader"></span>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProductSectionOne;
