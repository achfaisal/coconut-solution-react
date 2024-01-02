import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { productEn, productId } from "../lang/productData";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Navbar = ({
  navbarHome,
  navbarAbout,
  navbarProduct,
  navbarContact,
  onClickHandler,
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      // behavior: "smooth",
    });
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
        className="sel-target: uk-navbar-container sticky-navbar cls-active: uk-navbar-sticky navbar-container"
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
                <li className="uk-visible@m">
                  <Link className="navbar-font" to="/" onClick={scrollToTop}>
                    {navbarHome}
                  </Link>
                </li>
                <li className="uk-visible@m">
                  <Link
                    className="navbar-font"
                    to="/about"
                    scroll={(el) => scrollWithOffset(el, 120)}
                    onClick={scrollToTop}
                  >
                    {navbarAbout}
                  </Link>
                </li>
                <li className="uk-visible@m">
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
                          >
                            {product.productName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="uk-visible@m">
                  <Link
                    className="navbar-font"
                    href="#"
                    data-uk-scroll="offset: 80"
                  >
                    {navbarContact}
                  </Link>
                </li>

                <li className="uk-visible@m">
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
                    className="hamburger-button uk-button uk-button-default uk-margin-small-right uk-hidden@m"
                    type="button"
                    data-uk-toggle="target: #offcanvas-usage"
                  >
                    <span data-uk-icon="menu"></span>
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
                          <a href="#" data-uk-scroll="offset: 80">
                            Language
                          </a>
                          <ul className="uk-nav-sub">
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
