import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { productEn, productId } from "../lang/productData";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Navbar = ({
  navbarHome,
  navbarAbout,
  navbarAirSolution,
  navbarLandSolution,
  navbarSpillSolution,
  navbarProduct,
  navbarContact,
  onClickHandler,
}) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleProductLinkClick = () => {
    const offcanvas = UIkit.offcanvas("#offcanvas-usage");
    if (offcanvas.isActive()) {
      offcanvas.hide();
    }
  };

  const products = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? productEn : productId;
  };

  console.log(products());
  useTranslation();

  return (
    <>
      <nav
        data-uk-sticky
        className={`sel-target: uk-navbar-container sticky-navbar cls-active: uk-navbar-sticky navbar-container ${
          scrolling ? "" : "uk-navbar-transparent"
        }`}
      >
        <div className="uk-container">
          <div data-uk-navbar>
            <div className="uk-flex-middle uk-navbar-left">
              <Link to="/" onClick={scrollToTop}>
                <img className="logo-main" src="/img/main-logo.png" alt="" />
              </Link>
            </div>

            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav custom-nav">
                <li className="uk-visible@s">
                  <Link className="navbar-font" to="/" onClick={scrollToTop}>
                    {navbarHome}
                  </Link>
                </li>
                <li className="uk-visible@s">
                  <Link
                    className="navbar-font"
                    to="/about"
                    scroll={(el) => scrollWithOffset(el, 120)}
                    onClick={scrollToTop}
                  >
                    {navbarAbout}
                  </Link>
                </li>
                <li className="uk-visible@s">
                  <Link
                    className="navbar-font"
                    to="/solution"
                    scroll={(el) => scrollWithOffset(el, 80)}
                  >
                    Solution
                    <span data-uk-icon="icon: chevron-down"></span>
                  </Link>
                  <div
                    id="dropdown"
                    className="custom-card custom-dropdown"
                    data-uk-dropdown="offset:0"
                  >
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <Link
                          scroll={(el) => scrollWithOffset(el, 120)}
                          to="/solution#airsolution"
                        >
                          Air Solution
                        </Link>
                      </li>
                      <li>
                        <Link
                          scroll={(el) => scrollWithOffset(el, 120)}
                          to="/solution#landsolution"
                        >
                          Land Solution
                        </Link>
                      </li>
                      <li>
                        <Link
                          scroll={(el) => scrollWithOffset(el, 120)}
                          to="/solution#spillsolution"
                        >
                          Spill Solution
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="uk-visible@s">
                  <Link
                    className="navbar-font"
                    to="/#products"
                    scroll={(el) => scrollWithOffset(el, 80)}
                  >
                    {navbarProduct}
                    <span data-uk-icon="icon: chevron-down"></span>
                  </Link>
                  <div
                    id="dropdown"
                    className="custom-card custom-dropdown"
                    data-uk-dropdown="offset:0"
                  >
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      {products().map((product) => (
                        <li key={product.id}>
                          <Link
                            to={`/products/${product.productName
                              .replace(/\s/g, "")
                              .toLowerCase()}`}
                            onClick={scrollToTop}
                          >
                            {product.productName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="uk-visible@s">
                  <Link
                    to="/#footer"
                    className="navbar-font"
                    href="#"
                    scroll={(el) => scrollWithOffset(el, 0)}
                  >
                    {navbarContact}
                  </Link>
                </li>

                <li className="uk-visible@s">
                  <Link
                    className="navbar-font"
                    href="#"
                    data-uk-scroll="offset: 80"
                  >
                    <span data-uk-icon="icon: world"></span>
                    <span data-uk-icon="icon: chevron-down"></span>
                  </Link>
                  <div
                    id="dropdown"
                    className="custom-card custom-dropdown"
                    data-uk-dropdown="offset:0"
                  >
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <Link onClick={() => onClickHandler("en")}>
                          English
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => onClickHandler("id")}>
                          Bahasa Indonesia
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Sidebar Offcanvas */}
                <li>
                  <a
                    className="hamburger-button uk-button uk-button-default uk-margin-small-right uk-hidden@s"
                    type="button"
                    data-uk-toggle="target: #offcanvas-usage"
                  >
                    <span
                      className="hamburger-color"
                      data-uk-icon="menu"
                    ></span>
                  </a>
                  <div id="offcanvas-usage" data-uk-offcanvas>
                    <div className="uk-offcanvas-bar">
                      <button
                        className="uk-offcanvas-close"
                        type="button"
                        data-uk-close
                      />
                      <ul className="uk-nav uk-nav-default">
                        <li>
                          <Link to="/" onClick={scrollToTop}>
                            {navbarHome}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/#about"
                            scroll={(el) => scrollWithOffset(el, 120)}
                          >
                            {navbarAbout}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            scroll={(el) => scrollWithOffset(el, 120)}
                          >
                            {navbarAirSolution}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            scroll={(el) => scrollWithOffset(el, 120)}
                          >
                            {navbarLandSolution}
                          </Link>
                        </li>
                        <li className="uk-parent">
                          <Link
                            to="/#products"
                            scroll={(el) => scrollWithOffset(el, 80)}
                          >
                            {navbarProduct}
                          </Link>
                          <ul className="uk-nav-sub">
                            {products().map((product) => (
                              <li key={product.id}>
                                <Link
                                  to={`/products/${product.productName
                                    .replace(/\s/g, "")
                                    .toLowerCase()}`}
                                  onClick={
                                    (scrollToTop, handleProductLinkClick)
                                  }
                                >
                                  {product.productName}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <a href="#" data-uk-scroll>
                            {navbarContact}
                          </a>
                        </li>
                        <li className="uk-parent">
                          Language
                          <ul className="uk-nav-sub">
                            <li>
                              <Link
                                onClick={() => {
                                  onClickHandler("en");
                                  handleProductLinkClick();
                                }}
                              >
                                English
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => {
                                  onClickHandler("id");
                                  handleProductLinkClick();
                                }}
                              >
                                Bahasa Indonesia
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
