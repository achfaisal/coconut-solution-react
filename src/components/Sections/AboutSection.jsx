/* eslint-disable react/prop-types */
import React from "react";

const AboutSection = ({
  aboutDescTop,
  aboutDescBottom,
  descBottomOne,
  descBottomTwo,
  descBottomThree,
}) => {
  return (
    <section id="about" className="about-section">
      <div className="uk-container">
        <div className="landing-main__container uk-box-shadow-large">
          <div className="uk-child-width-expand@s" data-uk-grid>
            <div className="about-text">
              <h1 className="uk-text-left landing-header">Coconut Solution</h1>
              <p className="uk-text-left">{aboutDescTop}</p>
            </div>

            <div className="landing-image__container__top uk-text-center">
              <div>
                <img
                  className="landing-image__top uk-margin-bottom"
                  src="/img/landing-image/landing-image-top-1.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="landing-image__top"
                  src="/img/landing-image/landing-image-top-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="uk-child-width-expand@s about-bottom" data-uk-grid>
            <div className="landing-container__bottom">
              <div className="landing-image__container__bottom">
                <img
                  className="landing-image__bottom"
                  src="/img/landing-image/landing-image-bottom-1.jpg"
                  alt=""
                />
                <p className="landing-text__left">Coir pot plant</p>
              </div>
              <div className="landing-image__container__bottom">
                <img
                  className="landing-image__bottom"
                  src="/img/landing-image/landing-image-bottom-2.jpg"
                  alt=""
                />
                <p className="landing-text__left">Cocopeat composter</p>
              </div>
              <div className="landing-image__container__bottom">
                <img
                  className="landing-image__bottom"
                  src="/img/landing-image/landing-image-bottom-3.jpg"
                  alt=""
                />
                <p className="landing-text__left">Coir pot plant</p>
              </div>
            </div>

            <div className="about-text">
              <p className="uk-text-left">{aboutDescBottom}</p>
              <ul className="uk-list uk-list-disc uk-list-primary">
                <li>{descBottomOne}</li>
                <li>{descBottomTwo}</li>
                <li>{descBottomThree}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
