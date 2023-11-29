import React from "react";
import "../css/AboutUs.css";
import { Link } from "react-router-dom";

const CardAbout = () => {
  return (
    <>
      <Link className="remove-text__decoration" to="/">
        <div className="about-card">
          <img className="uk-border-circle" src="img/round-1.png" alt="" />
          <h3>Enviromental Friendly</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            incidunt.
          </p>
        </div>
      </Link>
    </>
  );
};

export default CardAbout;
