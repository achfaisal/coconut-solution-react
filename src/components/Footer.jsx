import React from "react";
import Maps from "./Maps";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer-container">
      <div id="about" className="uk-container">
        <div
          className="uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-medium-top"
          data-uk-grid
        >
          <div>
            <div className="uk-margin-bottom footer-company__name">
              <img src="/img/white-logo.png" alt="" width="100px" />
              <h1>PT. Indo Kelapa Nusantara</h1>
            </div>
            <h1>Address</h1>
            <p>Jl. Sunset Road No.28, Kelurahan Seminyak, Badung, Bali</p>
          </div>
          <div>
            <h1>Find Us On</h1>
            <Link className="icon-social">
              <p>
                <span className="margin-icon" data-uk-icon="instagram"></span>
                <span>Instagram</span>
              </p>
            </Link>
            <Link className="icon-social">
              <p>
                <span className="margin-icon" data-uk-icon="heart"></span>
                <span>Tokopedia</span>
              </p>
            </Link>
            <Link className="icon-social">
              <p>
                <span className="margin-icon" data-uk-icon="whatsapp"></span>
                <span>Whatsapp</span>
              </p>
            </Link>
          </div>
          <div>
            <h1>Location</h1>
            <Maps />
          </div>
        </div>
      </div>
      <div className="uk-text-center copyright-section">
        <p>Copyright © 2023 Coconut Solution. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
