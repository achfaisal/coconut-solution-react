import React from "react";
import Navbar from "../components/Navbar";
import i18n from "../i18n";
import navbarData from "../lang/navbarData";
import { useTranslation } from "react-i18next";

const About = () => {
  const getNavData = () => {
    const currentLanguage = i18n.language;
    return navbarData.find((lang) => lang.language === currentLanguage);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useTranslation();

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
      <div className="about-main__container">
        <div className="about-image__container"></div>

        <div className="uk-container about-text__container">
          <h1 className="uk-text-center">TENTANG KAMI</h1>
          <div className="uk-child-width-1-1 uk-child-width-1-2@s" data-uk-grid>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio sequi pariatur veniam, mollitia voluptatibus earum
              modi! Ipsa cupiditate, eveniet minima optio modi repellendus sunt?
              Consequatur ipsam dolores excepturi labore voluptatum alias fugiat
              consectetur voluptate officia laudantium quo delectus, minima
              placeat ducimus officiis, earum vitae eum distinctio libero in
              laboriosam eligendi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio sequi pariatur veniam, mollitia voluptatibus earum
              modi! Ipsa cupiditate, eveniet minima optio modi repellendus sunt?
              Consequatur ipsam dolores excepturi labore voluptatum alias fugiat
              consectetur voluptate officia laudantium quo delectus, minima
              placeat ducimus officiis, earum vitae eum distinctio libero in
              laboriosam eligendi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
