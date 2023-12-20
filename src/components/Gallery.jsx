import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Gallery = () => {
  return (
    <>
      <div
        className="dotnav-gallery"
        data-uk-slideshow="animation: push; max-height: 600;"
      >
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          data-tabindex="-1"
        >
          <ul className="uk-slideshow-items">
            <li>
              <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/2ickhM20h2k?si=JH2IT7q0MQ0mC5IZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              />

              <div className="uk-position-center uk-overlay"></div>
            </li>
            <li>
              <img src="/img/kelapa-2.png" alt="" data-uk-cover />
            </li>
          </ul>

          <Link
            className="uk-position-center-left uk-position-small uk-visible@s"
            href="#"
            data-uk-slidenav-previous
            data-uk-slideshow-item="previous"
          ></Link>
          <Link
            className="uk-position-center-right uk-position-small uk-visible@s"
            href="#"
            data-uk-slidenav-next
            data-uk-slideshow-item="next"
          ></Link>
        </div>

        <ul className="dotnav-gallery uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-hidden@s"></ul>
      </div>
    </>
  );
};

export default Gallery;
