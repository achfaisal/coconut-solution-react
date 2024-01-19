import React from "react";
import Navbar from "../components/Navbar";
import navbarData from "../lang/navbarData";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Solution = () => {
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
      <section>
        <div className="uk-container">
          <div className="uk-text-center">
            COMING SOON
            {/* <h1 id="airsolution" className="test-height">
              AIR SOLUTION
            </h1>
            <h1 id="landsolution" className="test-height">
              LAND SOLUTION
            </h1>
            <h1 id="spillsolution" className="test-height">
              SPILL SOLUTION
            </h1> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
