import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Navbar from "../components/Navbar";
import navbarData from "../lang/navbarData";
import { aboutDataId, aboutDataEn } from "../lang/aboutData";
import { homeDataId, homeDataEn } from "../lang/homeData";
import { productEn, productId } from "../lang/productData";
import { solutionEn, solutionId } from "../lang/solutionData";
import Gallery from "../components/Gallery";
import AboutSection from "../components/Sections/AboutSection";
import ProductsSection from "../components/Sections/ProductsSection";
import Footer from "../components/Footer";
import "../css/style.css";

const Home = () => {
  const getNavData = () => {
    const currentLanguage = i18n.language;
    return navbarData.find((lang) => lang.language === currentLanguage);
  };

  const getAboutData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? aboutDataEn : aboutDataId;
  };

  const getProductData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? productEn : productId;
  };

  const getHomeData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? homeDataEn : homeDataId;
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <Navbar
        navbarHome={getNavData().home}
        navbarAbout={getNavData().about}
        navbarAirSolution={getNavData().airSolution}
        navbarLandSolution={getNavData().landSolution}
        navbarSpillSolution={getNavData().spillSolution}
        navbarProduct={getNavData().product}
        navbarContact={getNavData().contact}
        onClickHandler={changeLanguage}
      />
      <Gallery />
      <AboutSection
        cards={getAboutData()}
        aboutHeader={getHomeData()[0].aboutHeader}
        aboutDesc={getHomeData()[0].aboutDesc}
      />
      <ProductsSection
        cards={getProductData()}
        productHeader={getHomeData()[0].productHeader}
        productDesc={getHomeData()[0].productDesc}
        onClick={scrollToTop}
      />
      <Footer />
    </>
  );
};

export default Home;
