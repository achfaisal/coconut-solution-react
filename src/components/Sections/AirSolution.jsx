/* eslint-disable react/prop-types */
import React from "react";

const AirSolution = ({ solutionName, imageData }) => {
  return (
    <section id="airsolution">
      <div className="uk-container solution-text">
        <div className="uk-text-center">
          <h1 className="solution-header">{solutionName[0].solutionName}</h1>
          <p className="solution-headline">{solutionName[0].solutionDetail}</p>
        </div>
        <div
          className="uk-child-width-1-1 uk-child-width-1-2@s air-solution__first__container"
          data-uk-grid
        >
          <div className="solution-left">
            <img
              className="image-solution"
              src="/img/solution/pm-graph.jpg"
              alt=""
            />
          </div>
          <div className="solution-right__container">
            <div className="solution-right">
              {solutionName[0].solutionPoint.map((title, index) => (
                <div key={index}>
                  <div className="air-solution__top">
                    <h1>{title}</h1>
                    <p>{solutionName[0].solutionDescription[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="air-solution__bottom">
        <div className="uk-container">
          <h1 className="title-solution">coirpot & tanaman pembersih udara</h1>
          <div className="uk-text-center test-container">
            <img className="air-solution__img" src={imageData} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirSolution;
