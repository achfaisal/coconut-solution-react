import React from "react";

const LandSolution = () => {
  return (
    <section id="landsolution" className="land-solution__section">
      <div className="uk-container solution-text">
        <div>
          <div className="uk-text-center">
            <h1 className="solution-header">Land Solution</h1>
          </div>
          <p className="solution-headline">
            Menurut data LCDI lahan kritis di indonesia tahun 2045 akan
            meningkat menjadi 25 juta hektar dan akan menjadi salah satu faktor
            Bencana alam yang terjadi di indonesia salah satu penyebabnya adlah
            tanah yang sakit atau krisis , tanah krisis disebabkan oleh
            kurangnya unsur hara yang ada di tanah , salah satu cara untuk
            membantu memperbaiki tanah yang rusak adalah dengan metode
            pengomposan rumah tangga.
          </p>
        </div>
        <div className="land-solution__container">
          <h1 className="title-solution">
            Permasalahan pengomposan rumah tangga
          </h1>
          <div>
            <div className="uk-text-center" data-uk-grid>
              <div className="uk-width-auto@m">
                <img
                  className="land-solution__bottom__image"
                  src="/img/solution/land-solution-1.png"
                  alt=""
                />
              </div>
              <div className="uk-width-expand@m uk-text-left land-solution__bottom">
                <div>
                  <h2>Tidak mengetahui cara pembuatan dan manfaat kompos.</h2>
                  <p>
                    Masih kurangnya literasi tentang manfaat pengomposan dan
                    cara pengomposan dalam lingkup rumah tangga.
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-text-center" data-uk-grid>
              <div className="uk-width-auto@m">
                <img
                  className="land-solution__bottom__image"
                  src="/img/solution/land-solution-2.png"
                  alt=""
                />
              </div>
              <div className="uk-width-expand@m uk-text-left land-solution__bottom">
                <div>
                  <h2>Proses pengomposan bau dan banyak larva lalat.</h2>
                  <p>
                    Pada proses pengomposan kadang terjadi sampah yang tidak
                    terurai dengan baik hingga menimbulkan bau dan mengundang
                    lalat untuk bertelur
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-text-center" data-uk-grid>
              <div className="uk-width-auto@m">
                <img
                  className="land-solution__bottom__image"
                  src="/img/solution/land-solution-3.png"
                  alt=""
                />
              </div>
              <div className="uk-width-expand@m uk-text-left land-solution__bottom">
                <div className="land-solution__bottom">
                  <h2>Kurangnya bahan coklat sebagai media pengomposan.</h2>
                  <p>
                    Bahan coklat seperti kerdus kertas dan sejenisnya merupakan
                    media dasar pengomposan, dan biasanya jumlah sampah coklat
                    lebih sedikit dibandingkan dengan sampah organik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandSolution;
