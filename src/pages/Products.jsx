import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import productEn from "../lang/product-en";
import productId from "../lang/product-id";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Products() {
  const getProductData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? productEn() : productId();
  };

  const productData = getProductData();
  useTranslation();

  return (
    <>
      <Navbar />
      <div>
        <h1>PRODUK 1</h1>
        <div>{productData[0].product}</div>
        <div>{productData[0].description}</div>
      </div>
      <div>
        <h1>PRODUK 2</h1>
        <div>{productData[1].product}</div>
        <div>{productData[1].description}</div>
      </div>
    </>
  );
}

export default Products;
