import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n"; // Import your i18n configuration
import productEn from "./lang/product-en";
import productId from "./lang/product-id";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Get the product data based on the selected language
  const getProductData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? productEn() : productId();
  };

  const productData = getProductData();

  return (
    <>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("id")}>Indonesia</button>
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

export default App;
