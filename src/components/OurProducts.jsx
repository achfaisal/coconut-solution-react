import React from "react";

const OurProducts = () => {
  return (
    <>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        data-tabindex="-1"
        data-uk-slideshow
      >
        <ul className="uk-slideshow-items">
          <li>
            <img src="images/photo.jpg" alt="" data-uk-cover />
          </li>
          <li>
            <img src="images/dark.jpg" alt="" data-uk-cover />
          </li>
          <li>
            <img src="images/light.jpg" alt="" data-uk-cover />
          </li>
        </ul>
        <a
          className="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-previous
          data-uk-slideshow-item="previous"
        ></a>
        <a
          className="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-next
          data-uk-slideshow-item="next"
        ></a>
      </div>
    </>
  );
};

export default OurProducts;
