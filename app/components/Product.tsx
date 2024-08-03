"use client";

import { useState } from "react";
import { addToCart, fetchPdt } from "../actions/data";
import Image from "next/image";

const Product = ({
  image,
  title,
  id,
}: {
  image: string;
  title: string;
  id: number;
}) => {
  const [data, setData] = useState<any | null>(null);
  const [showData, setshowData] = useState(false);

    const handleClick = () => {
      setshowData(true);
      addToCart(id,title)
    };

  return (
    <div>
      <div className="flex flex-col gap-4 items-center bg-gray-100 p-2">
        <Image
          src={image}
          height={300}
          width={300}
          alt={""}
          className="object-contain"
        />
        <h1>{title}</h1>
        <button className="px-4 py-2 bg-orange-600" onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
