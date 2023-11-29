import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import navbarId from "../lang/navbar-id";
import navbarEn from "../lang/navbar-en";
import { Link } from "react-router-dom";

const Navbar = () => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const getNavbarData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? navbarEn() : navbarId();
  };

  const navbarData = getNavbarData();
  useTranslation();

  return (
    <>
      <nav className="uk-navbar-container custom-navbar">
        <div className="uk-container">
          <div data-uk-navbar>
            <div className="uk-flex-middle uk-navbar-left">
              <a href="#">
                <img className="logo-main" src="img/coco-solu.png" alt="" />
              </a>
            </div>

            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav custom-nav">
                <li className="uk-visible@s">
                  <Link to="/">{navbarData[0].home}</Link>
                </li>
                <li className="uk-visible@s">
                  <Link to="/">{navbarData[0].about}</Link>
                </li>
                <li className="uk-visible@s">
                  <Link to="/products">
                    {navbarData[0].product}
                    <span data-uk-icon="icon: chevron-down"></span>
                  </Link>
                  <div
                    id="dropdown"
                    className="custom-card custom-dropdown"
                    data-uk-dropdown="offset:0"
                  >
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <a href="cocofiber.html">Coco Fiber</a>
                      </li>
                      <li>
                        <a href="cocomesh.html">Coco Mesh</a>
                      </li>
                      <li className="uk-active">
                        <a href="#">Coco Bristle</a>
                      </li>
                      <li>
                        <a href="cocopeat.html">Cocopeat</a>
                      </li>
                      <li>
                        <a href="cocosheet.html">Coco Sheet</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="uk-visible@s">
                  <a
                    className="navbar-font"
                    href="#"
                    data-uk-scroll="offset: 80"
                  >
                    {navbarData[0].contact}
                  </a>
                </li>

                <li className="uk-visible@s">
                  <a
                    className="navbar-font"
                    href="#"
                    data-uk-scroll="offset: 80"
                  >
                    <span data-uk-icon="icon: world"></span>
                    <span data-uk-icon="icon: chevron-down"></span>
                  </a>
                  <div
                    id="dropdown"
                    className="custom-card custom-dropdown"
                    data-uk-dropdown="offset:0"
                  >
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <a href="#" onClick={() => changeLanguage("en")}>
                          English
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => changeLanguage("id")}>
                          Bahasa Indonesia
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="uk-hidden@s">
                  <a
                    href="#offcanvas-usage"
                    data-uk-icon="icon: menu"
                    id="hamburger-bar"
                    data-uk-toggle="target: #offcanvas-overlay"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Off Canvas Sidebar */}
      <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            data-uk-close
          ></button>
          <ul className="uk-nav uk-nav-default">
            <li className="uk-active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" data-uk-scroll="offset: 110">
                About Us
              </a>
            </li>
            <li className="uk-parent">
              <a href="#" data-uk-scroll="offset: 80">
                Product
              </a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">Coco Fiber</a>
                </li>
                <li>
                  <a href="#">Coco Mesh</a>
                </li>
                <li className="uk-active">
                  <a href="#">Coco Bristle</a>
                </li>
                <li>
                  <a href="#">Cocopeat</a>
                </li>
                <li>
                  <a href="#">Coco Sheet</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" data-uk-scroll>
                Contact Us
              </a>
            </li>
            <li className="uk-parent">
              <a href="#" data-uk-scroll="offset: 80">
                Language
              </a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">Bahasa Indonesia</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
