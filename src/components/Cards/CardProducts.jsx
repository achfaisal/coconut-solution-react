import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const CardProducts = ({ productName, productDetail, imageUrl }) => {
  const formattedProductName = productName.toLowerCase().replace(/\s/g, "");

  return (
    <Link
      className="remove-text__decoration"
      to={`/products/${formattedProductName}`}
    >
      <div className="card-border uk-card-height uk-card uk-card-hover uk-card-default">
        <div className="uk-card-body card-products">
          <img src={imageUrl} alt="" className="card-image" />
          <h3 className="uk-card-title title-margin">{productName}</h3>
          <p className="product-text">{productDetail}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProducts;
