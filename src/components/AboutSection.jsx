import React from "react";
import "../css/AboutUs.css";
import CardAbout from "./CardAbout";

const AboutSection = ({ aboutHeader, aboutDesc, cards }) => {
  return (
    <section id="about" className="uk-container uk-margin-medium-top">
      <div>
        <h1>{aboutHeader}</h1>
        <p>{aboutDesc}</p>
      </div>
      <div className="uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid>
        {cards.map((card) => (
          <CardAbout key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
