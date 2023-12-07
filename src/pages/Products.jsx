import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import homeEn from "../lang/home-en";
import homeId from "../lang/home-id";
import productEn from "../lang/product-en";
import productId from "../lang/product-id";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { animateScroll as scroll } from "react-scroll"; // Add this import

const Products = () => {
  const scrollToAboutSection = () => {
    scroll.scrollTo("about-us", {
      // Correctly reference the id "about-us"
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  const getHomeData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? homeEn() : homeId();
  };

  const getProductData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? productEn() : productId();
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const homeData = getHomeData();
  const productData = getProductData();

  useTranslation();

  return (
    <>
      <Navbar
        navbarHome={homeData[0].navbarHome}
        navbarAbout={homeData[0].navbarAbout}
        navbarProduct={homeData[0].navbarProduct}
        navbarContact={homeData[0].navbarContact}
        onClickHandler={changeLanguage}
      />
      <div>
        {/* Product 1 Section */}
        <section id="product-1">
          <h1>{productData[0].product}</h1>
          <div>{productData[0].description}</div>
        </section>

        {/* Product 2 Section */}
        <section id="product-2">
          <h1>{productData[1].product}</h1>
          <div>{productData[1].description}</div>
        </section>
      </div>
    </>
  );
};

export default Products;
