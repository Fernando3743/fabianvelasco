import Image from "next/image";
import React from "react";

const ProductImage = ({ src, type }) => {
  return (
    <div className="h-[211px] relative">
      <Image src={src} alt="ProductImage" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 left-0 px-4 py-2 bg-red-700">
        <span className="text-white font-[oswald-medium]">{type}</span>
      </div>
    </div>
  );
};

export default ProductImage;
