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
              <div className="air-solution__top">
                <h1>Gas Metan</h1>
                <p>
                  Berdasarkan data KLHK tahun 2022, timbulan sampah di Indonesia
                  didominasi oleh sampah organik, khususnya sisa
                  makanan.tumpukan sampah organik tersebut mengeluarkan gas
                  rumah kaca dalam jumlah sangat besar.
                </p>
              </div>
              <div className="air-solution__top">
                <h1>Kurangnya Lahan Hijau</h1>
                <p>
                  Dampak buruk kurangnya penghijauan di kota yang pertama adalah
                  menyebabkan pencemaran udara meningkat. Jalanan di kota akan
                  dipenuhi dengan asap sehingga kadar karbondioksida menjadi
                  sangat tinggi
                </p>
              </div>
              <div className="air-solution__top">
                <h1>Asap Kendaraan</h1>
                <p>
                  Polusi kendaraan bermotor bisa memicu terjadinya gangguan
                  pernapasan, seperti asma, ISPA, dan kanker paru-paru. Selain
                  itu, juga bisa berakhir pada berkurangnya kadar oksigen di
                  dalam tubuh manusia, sehingga membahayakan kesehatan.
                </p>
              </div>
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
