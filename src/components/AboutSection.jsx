import React from "react";
import CardAbout from "./Cards/CardAbout";

const AboutSection = ({ aboutHeader, aboutDesc, cards }) => {
  return (
    <section id="about" className="about-section">
      <div className="uk-container about-card__container">
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin card-border"
          data-uk-grid
        >
          <div className="uk-card-media-left uk-cover-container ">
            <iframe
              className="border-radius__left"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dkf486sKI7c"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{aboutHeader}</h3>
              <p>{aboutDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
