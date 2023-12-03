import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import homeEn from "../lang/home-en";
import homeId from "../lang/home-id";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";

const Home = () => {
  const getHomeData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? homeEn() : homeId();
  };

  const homeData = getHomeData();
  useTranslation();

  return (
    <>
      <Navbar />
      <Gallery />
      <AboutSection
        aboutTitle={homeData[0].aboutTitle}
        about={homeData[0].about}
      />
      <ProductsSection />
    </>
  );
};

export default Home;
