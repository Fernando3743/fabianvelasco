import React from "react";
import ProductImage from "./productImage";
import ProductInfo from "./ProductInfo";

const Product = (props) => {
  return (
    <div className="bg-white">
      <ProductImage {...props} />
      <ProductInfo {...props} />
    </div>
  );
};

export default Product;
