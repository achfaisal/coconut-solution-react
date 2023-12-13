import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const CardProducts = ({ productName, productDetail, imageUrl }) => {
  const formattedProductName = productName.toLowerCase().replace(/\s/g, "");

  return (
    <Link to={`/products/${formattedProductName}`}>
      <div className="uk-card-height uk-card uk-card-hover uk-card-default custom-card modified overflow-text">
        <div className="uk-card-media-top">
          <img src={imageUrl} className="image-product" alt="" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title title-margin">{productName}</h3>
          <p className="product-text">{productDetail}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProducts;
