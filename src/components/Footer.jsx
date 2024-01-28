import React from "react";
import Maps from "./Maps";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer-container">
      <div id="footer" className="uk-container">
        <div
          className="uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-medium-top"
          data-uk-grid
        >
          <div>
            <div className="uk-margin-bottom footer-company__name">
              <img src="/img/white-ikn-logo.png" alt="" width="100px" />
              <h1>PT. Indo Kelapa Nusantara</h1>
            </div>
            <h1>Address</h1>
            <p>Jl. Sunset Road No.28, Kelurahan Seminyak, Badung, Bali</p>
          </div>
          <div>
            <h1>Find Us On</h1>
            <div>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container"
              >
                <img src="/img/whatsapp.png" alt="" width="20px" />
                <p>Whatsapp</p>
              </a>
              <a
                href="https://www.instagram.com/coconutsolution.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container"
              >
                <img src="/img/instagram.png" alt="" width="20px" />
                <p>Instagram</p>
              </a>
              <a
                href="https://www.tokopedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-container"
              >
                <img src="/img/tokped.png" alt="" width="20px" />
                <p>Tokopedia</p>
              </a>
            </div>
          </div>
          <div>
            <h1>Location</h1>
            <Maps />
          </div>
        </div>
        <p className="copyright-footer">
          Copyright © 2023 Coconut Solution. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
