import React from "react";

const Gallery = () => {
  return (
    <>
      <div data-uk-slideshow="animation: push; min-height: 300; max-height: 400; autoplay: true; autoplay-interval: 3000">
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

          <a
            className="uk-position-center-left uk-position-small uk-visible@s"
            href="#"
            data-uk-slidenav-previous
            data-uk-slideshow-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small uk-visible@s"
            href="#"
            data-uk-slidenav-next
            data-uk-slideshow-item="next"
          ></a>
        </div>

        <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-hidden@s"></ul>
      </div>
    </>
  );
};

export default Gallery;
