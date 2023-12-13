// SingleProduct.js
import React from "react";
import { useParams } from "react-router-dom";
import i18n from "../i18n";
import Navbar from "../components/Navbar";
import navbarData from "../lang/navbarData";
import { productEn, productId } from "../lang/productData";

const Product = () => {
  const getNavData = () => {
    const currentLanguage = i18n.language;
    return navbarData.find((lang) => lang.language === currentLanguage);
  };

  const getProductData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? productEn : productId;
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { productName } = useParams();

  // Remove spaces and convert the URL-friendly product name back to lowercase
  const formattedProductName = productName.replace(/\s+/g, "").toLowerCase();

  // Find the product based on the formatted product name
  const selectedProduct = getProductData().find(
    (product) =>
      product.productName.toLowerCase().replace(/\s+/g, "") ===
      formattedProductName
  );

  if (!selectedProduct) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar
        navbarHome={getNavData().home}
        navbarAbout={getNavData().about}
        navbarProduct={getNavData().product}
        navbarContact={getNavData().contact}
        onClickHandler={changeLanguage}
      />
      <h1>{selectedProduct.productName}</h1>
      <img src={selectedProduct.imageUrl} alt={selectedProduct.productName} />
      <p>{selectedProduct.productDetail}</p>
    </div>
  );
};

export default Product;
