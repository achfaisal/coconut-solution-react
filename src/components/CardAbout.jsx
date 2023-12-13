import React from "react";
import "../css/AboutUs.css";
import { Link } from "react-router-dom";

const CardAbout = ({ aboutTitle, about }) => {
  return (
    <>
      <Link className="remove-text__decoration" to="/">
        <div className="about-card uk-text-center">
          <img className="uk-border-circle" src="img/round-1.png" alt="" />
          <h3>{aboutTitle}</h3>
          <p>{about}</p>
        </div>
      </Link>
    </>
  );
};

export default CardAbout;
