import React from "react";
import CardAbout from "./Cards/CardAbout";

const AboutSection = ({ aboutHeader, aboutDesc, cards }) => {
  return (
    <section id="about" className="about-section">
      <div className="uk-container about-card__container">
        <div className="uk-text-center">
          <h1>{aboutHeader}</h1>
          <p>{aboutDesc}</p>
        </div>
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid>
          {cards.map((card) => (
            <CardAbout key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
