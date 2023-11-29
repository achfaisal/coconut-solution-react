import React from "react";
import "../css/AboutUs.css";
import CardAbout from "./CardAbout";

const AboutUs = ({ aboutTitle, about }) => {
  return (
    <section id="about-us" className="uk-container">
      <div>
        <h1>{aboutTitle}</h1>
        <p>{about}</p>
      </div>
      <div className="uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid>
        <div>
          <CardAbout />
        </div>
        <div>
          <CardAbout />
        </div>
        <div>
          <CardAbout />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
