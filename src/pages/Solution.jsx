import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import navbarData from "../lang/navbarData";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import { solutionEn, solutionId } from "../lang/solutionData";
import AirSolution from "../components/Sections/AirSolution";
import LandSolution from "../components/Sections/LandSolution";
import { HashLink as Link } from "react-router-hash-link";

const Solution = () => {
  const getNavData = () => {
    const currentLanguage = i18n.language;
    return navbarData.find((lang) => lang.language === currentLanguage);
  };

  const getSolutionData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? solutionEn : solutionId;
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useTranslation();

  const [scrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let imageUrl;
  if (windowWidth > 640) {
    imageUrl = getSolutionData()[0].imageUrl1;
  } else {
    if (windowWidth <= 640 && windowWidth > 500) {
      imageUrl = getSolutionData()[0].imageUrl2;
    } else {
      imageUrl = getSolutionData()[0].imageUrl3;
    }
  }

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
      <div className="all-solution__container">
        <div className="uk-container">
          <h1 className="uk-text-center all-solution__header">Solution</h1>
          <div className="solution-grid__container">
            <div
              className="uk-grid-divider uk-child-width-expand@s"
              data-uk-grid
            >
              <div className="solution-grid__card">
                <Link
                  to="/solution#airsolution"
                  className="remove-text__decoration"
                  scroll={(el) => scrollWithOffset(el, 120)}
                >
                  <div className="uk-card uk-card-body">
                    <h3 className="uk-card-title all-solution__card__title">
                      Air Solution
                    </h3>
                    <p className="all-solution__text">
                      Solusi untuk masalah polusi udara.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="solution-grid__card">
                <Link
                  to="/solution#landsolution"
                  className="remove-text__decoration"
                  scroll={(el) => scrollWithOffset(el, 120)}
                >
                  <div className="uk-card uk-card-body">
                    <h3 className="uk-card-title all-solution__card__title">
                      Land Solution
                    </h3>
                    <p className="all-solution__text">
                      Solusi untuk masalah polusi tanah.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="solution-grid__card">
                <Link
                  to="/solution#airsolution"
                  className="remove-text__decoration"
                  scroll={(el) => scrollWithOffset(el, 120)}
                >
                  <div className="uk-card uk-card-body">
                    <h3 className="uk-card-title all-solution__card__title">
                      Spill Solution
                    </h3>
                    <p className="all-solution__text">
                      Solusi untuk masalah polusi industri.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AirSolution solutionName={getSolutionData()} imageData={imageUrl} />
      <LandSolution />
      <Footer />
    </>
  );
};

export default Solution;
