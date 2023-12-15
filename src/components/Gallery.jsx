import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <div
        className="dotnav-gallery"
        data-uk-slideshow="animation: push; min-height: 300; max-height: 400; autoplay: true; autoplay-interval: 3000"
      >
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          data-tabindex="-1"
        >
          <ul className="uk-slideshow-items">
            <li>
              <img src="/img/kelapa-1.jpg" alt="" data-uk-cover />
              <div className="uk-position-center uk-overlay"></div>
            </li>
            <li>
              <img src="/img/kelapa-2.png" alt="" data-uk-cover />
              <div className="uk-position-center uk-overlay"></div>
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
