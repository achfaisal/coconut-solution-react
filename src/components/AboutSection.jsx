import React from "react";

const AboutSection = ({ aboutHeader, aboutDesc }) => {
  return (
    <section id="about" className="about-section">
      <div className="uk-container">
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin about-section__container"
          data-uk-grid
        >
          <div className="uk-card-media-left uk-cover-container left-about">
            <img
              className="about-image"
              src="/img/kelapa-2.png"
              alt=""
              data-uk-cover
            />
            <canvas width={600} height={400} />
          </div>
          <div className="uk-card-body right-about">
            <h3 className="uk-card-title uk-margin-small-bottom about-section__header">
              {aboutHeader}
            </h3>
            <p>{aboutDesc}</p>
            {/* <button
              className="uk-button uk-button-default about-button"
              disabled
            >Read More</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
