import React from "react";
import { formatter } from "../../utils";
import ProductSpecs from "./ProductSpecs";

const ProductInfo = ({ neighborhood, city, price, productSpecs }) => {
  return (
    <div className="p-4">
      <h2 className="font-bold font-['oswald-medium'] text-2xl py-2">
        {neighborhood}
      </h2>
      <p className="font-extralight font-['Oswald'] text-base">{city}</p>
      <span className="text-xl font-sans">{formatter.format(price)}</span>
      <hr className="my-4" />
      <ProductSpecs {...productSpecs} />
    </div>
  );
};

export default ProductInfo;
