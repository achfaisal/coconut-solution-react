import React from "react";
import Navbar from "../components/Navbar";
import i18n from "../i18n";
import navbarData from "../lang/navbarData";
import { useTranslation } from "react-i18next";
import { aboutDataId, aboutDataEn } from "../lang/aboutData";
import Footer from "../components/Footer";

const About = () => {
  const getNavData = () => {
    const currentLanguage = i18n.language;
    return navbarData.find((lang) => lang.language === currentLanguage);
  };

  const getAboutData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? aboutDataEn : aboutDataId;
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
        <div className="image-container">
          <img src="./img/banner/about.jpg" alt="Your Image" />
          <div className="about-title">
            <h1>{getAboutData()[0].aboutTitle}</h1>
          </div>
        </div>
        <div className="uk-container about-text__container">
          <p className="uk-text-center">{getAboutData()[0].about}</p>

          <hr />

          <div className="vision-mission__main__container">
            <div className="vision-container">
              <img src="./img/about/2.png" alt="" />
              <div>
                <h1>{getAboutData()[0].vision}</h1>
                <p>{getAboutData()[0].visionDetail}</p>
              </div>
            </div>

            <div className="mission-container">
              <img src="./img/about/1.png" alt="" />
              <div>
                <h1>{getAboutData()[0].mission}</h1>
                <p>{getAboutData()[0].missionDetail}</p>
              </div>
            </div>
          </div>

          <div className="uk-text-center">
            <img src="./img/our-location.png" width="500px" alt="" />
          </div>

          <hr />

          <div
            className="uk-child-width-1-1 uk-child-width-1-2@s about-gallery__container"
            data-uk-grid
          >
            <div>
              <h1>{getAboutData()[0].office}</h1>
              <div
                className="uk-position-relative uk-visible-toggle uk-light"
                tabIndex={-1}
                data-uk-slider
              >
                <ul className="uk-slider-items uk-child-width-1-2 uk-grid">
                  <li>
                    <div data-uk-lightbox>
                      <a
                        href="./img/office-factory/office1.jpg"
                        data-caption="Office 1"
                      >
                        <img
                          src="./img/office-factory/office1.jpg"
                          alt=""
                          className="about-gallery"
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div data-uk-lightbox>
                      <a
                        href="./img/office-factory/office2.jpg"
                        data-caption="Office 2"
                      >
                        <img
                          src="./img/office-factory/office2.jpg"
                          alt=""
                          className="about-gallery"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover"
                  href=""
                  data-uk-slidenav-previous
                  data-uk-slider-item="previous"
                />
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover"
                  href=""
                  data-uk-slidenav-next
                  data-uk-slider-item="next"
                />
              </div>
            </div>
            <div>
              <h1>{getAboutData()[0].factory}</h1>
              <div
                className="uk-position-relative uk-visible-toggle uk-light"
                tabIndex={-1}
                data-uk-slider
              >
                <ul className="uk-slider-items uk-child-width-1-2 uk-grid">
                  <li>
                    <div data-uk-lightbox>
                      <a
                        href="./img/office-factory/factory1.jpg"
                        data-caption="Factory 1"
                      >
                        <img
                          src="./img/office-factory/factory1.jpg"
                          alt=""
                          className="about-gallery"
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div data-uk-lightbox>
                      <a
                        href="./img/office-factory/factory2.jpg"
                        data-caption="Factory 2"
                      >
                        <img
                          src="./img/office-factory/factory2.jpg"
                          alt=""
                          className="about-gallery"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  className="uk-position-center-left uk-position-small uk-hidden-hover"
                  href=""
                  data-uk-slidenav-previous
                  data-uk-slider-item="previous"
                />
                <a
                  className="uk-position-center-right uk-position-small uk-hidden-hover"
                  href=""
                  data-uk-slidenav-next
                  data-uk-slider-item="next"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <Footer />
    </>
  );
};

export default About;
