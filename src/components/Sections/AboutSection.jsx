import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="uk-container">
        <div className="landing-main__container uk-box-shadow-large">
          <div className="uk-child-width-expand@s" data-uk-grid>
            <div className="about-text">
              <h1 className="uk-text-left landing-header">Coconut Solution</h1>
              <p className="uk-text-left">
                Keadaan bumi saat ini sedang tidak baik - baik saja, tanah yang
                semakin rusak karena zat kimia , polusi udara dari pembakaran
                carbon ataupun gas metana , yang akhirnya menimbulkan air bersih
                menjadi susah , hal tersebut adalah beberapa alasan kami untuk
                berinovasi untuk memperbaiki bumi dengan produk dari turunan
                pohon kelapa.
              </p>
            </div>

            <div className="landing-image__container__top uk-text-center">
              <div>
                <img
                  className="landing-image__top uk-margin-bottom"
                  src="/img/landing-image/landing-image-top-1.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="landing-image__top"
                  src="/img/landing-image/landing-image-top-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="uk-child-width-expand@s about-bottom" data-uk-grid>
            <div className="landing-container__bottom">
              <div className="landing-image__container__bottom">
                <img
                  className="landing-image__bottom"
                  src="/img/landing-image/landing-image-bottom-1.jpg"
                  alt=""
                />
                <p className="landing-text__left">Coir pot plant</p>
              </div>
              <div className="landing-image__container__bottom">
                <img
                  className="landing-image__bottom"
                  src="/img/landing-image/landing-image-bottom-2.jpg"
                  alt=""
                />
                <p className="landing-text__left">Cocopeat composter</p>
              </div>
              <div className="landing-image__container__bottom">
                <img
                  className="landing-image__bottom"
                  src="/img/landing-image/landing-image-bottom-3.jpg"
                  alt=""
                />
                <p className="landing-text__left">Coir pot plant</p>
              </div>
            </div>

            <div className="about-text">
              <p className="uk-text-left">
                Semenjak tahun 2018 kami berusaha untuk mengembangkan produk
                yang ramah lingkungan dan dapat bermanfaat untuk memperbaiki
                keadaan lingkungan. Sampai dengan saat ini beberapa solusi yang
                kami dapatkan :
              </p>
              <ul className="uk-list uk-list-disc uk-list-primary">
                <li>Solusi pencemaran udara</li>
                <li>Solusi pencemaran tanah</li>
                <li>Solusi tumpahan cairan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
