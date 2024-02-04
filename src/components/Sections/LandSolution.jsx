/* eslint-disable react/prop-types */
import React from "react";

const LandSolution = ({ solutionName }) => {
  return (
    <section id="landsolution" className="land-solution__section">
      <div className="uk-container solution-text">
        <div>
          <div className="uk-text-center">
            <h1 className="solution-header">{solutionName[1].solutionName}</h1>
          </div>
          <p className="solution-headline">{solutionName[1].solutionDetail}</p>
        </div>
        <div className="land-solution__container">
          <h1 className="title-solution">{solutionName[1].solutionHeader}</h1>
          <div>
            {solutionName[1].solutionPoint.map((point, index) => {
              return (
                <div className="uk-text-center" data-uk-grid key={index}>
                  <div className="uk-width-auto@m">
                    <img
                      className="land-solution__bottom__image"
                      src={`/img/solution/land-solution-${index + 1}.png`}
                      alt=""
                    />
                  </div>
                  <div className="uk-width-expand@m uk-text-left land-solution__bottom">
                    <div>
                      <h2>{point}</h2>
                      <p>{solutionName[1].solutionDescription[index]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandSolution;
