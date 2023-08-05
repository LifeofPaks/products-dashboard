import React from "react";
import "../Products/Products.scss";
import { Triangle } from "react-loader-spinner";

const Products = () => {
  return (
    <>
      <div className="products">Products</div>
      <div className="loader">
        <Triangle
          height="80"
          width="80"
          color="#fff"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Products;
