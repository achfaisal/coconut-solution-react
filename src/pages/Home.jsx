import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import homeEn from "../lang/home-en";
import homeId from "../lang/home-id";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";

const Home = () => {
  // const changeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

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
      <AboutUs aboutTitle={homeData[0].aboutTitle} about={homeData[0].about} />
      <OurProducts />
    </>
  );
};

export default Home;
