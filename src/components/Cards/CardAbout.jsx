import React from "react";
import { Link } from "react-router-dom";

const CardAbout = ({ aboutTitle, about }) => {
  return (
    <>
      <div className="about-card uk-text-center">
        <h3>{aboutTitle}</h3>
        <p>{about}</p>
      </div>
    </>
  );
};

export default CardAbout;
