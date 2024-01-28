//Product.jsx
import React from "react";
import { useParams } from "react-router-dom";
import i18n from "../i18n";
import Navbar from "../components/Navbar";
import navbarData from "../lang/navbarData";
import { productEn, productId } from "../lang/productData";
import Footer from "../components/Footer";
import { HashLink as Link } from "react-router-hash-link";
import Cocofiber from "../components/Specifications/Cocofiber";
import Cocomesh from "../components/Specifications/Cocomesh";
import Cocobristle from "../components/Specifications/Cocobristle";
import Cocopeat from "../components/Specifications/Cocopeat";
import Cocosheet from "../components/Specifications/Cocosheet";
import Cocopot from "../components/Specifications/Cocopot";

const Product = () => {
  const getNavData = () => {
    const currentLanguage = i18n.language;
    return navbarData.find((lang) => lang.language === currentLanguage);
  };

  const getProductData = () => {
    const currentLanguage = i18n.language;
    return currentLanguage === "en" ? productEn : productId;
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { productName } = useParams();

  const selectedProduct = getProductData().find(
    (product) =>
      product.productName.toLowerCase().replace(/\s+/g, "") === productName
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const paragraphs = selectedProduct.extendedProductDetail
    .split("\n")
    .map((paragraph, index) => (
      <p key={index}>
        {paragraph.includes("</br>")
          ? paragraph.split("</br>").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < paragraph.split("</br>").length - 1 && <br />}
              </React.Fragment>
            ))
          : paragraph}
      </p>
    ));

  let specComponent = null;
  if (productName === "cocofiber") {
    specComponent = <Cocofiber changeLanguage={changeLanguage} />;
  } else if (productName === "cocomesh") {
    specComponent = <Cocomesh changeLanguage={changeLanguage} />;
  } else if (productName === "cocobristle") {
    specComponent = <Cocobristle changeLanguage={changeLanguage} />;
  } else if (productName === "cocopeat") {
    specComponent = <Cocopeat changeLanguage={changeLanguage} />;
  } else if (productName === "cocosheet") {
    specComponent = <Cocosheet changeLanguage={changeLanguage} />;
  } else if (productName === "cocopot") {
    specComponent = <Cocopot changeLanguage={changeLanguage} />;
  }

  return (
    <div>
      <Navbar
        navbarHome={getNavData().home}
        navbarAbout={getNavData().about}
        navbarAirSolution={getNavData().airSolution}
        navbarLandSolution={getNavData().landSolution}
        navbarSpillSolution={getNavData().spillSolution}
        navbarProduct={getNavData().product}
        navbarContact={getNavData().contact}
        onClickHandler={changeLanguage}
      />

      <div className="image-container">
        <img src={selectedProduct.headerImageUrl} alt="Your Image" />
        <div className="product-title">{selectedProduct.productName}</div>
      </div>

      <section className="uk-container product-order uk-margin-bottom">
        <div
          className="uk-child-width-expand@s uk-grid-large product-breadcrumb"
          data-uk-grid
        >
          <div>
            <nav aria-label="Breadcrumb">
              <ul className="uk-breadcrumb">
                <li>
                  <Link to="/#products">Products</Link>
                </li>
                <li>
                  <Link to="#">{selectedProduct.productName}</Link>
                </li>
              </ul>
            </nav>
            <img className="product-img" src={selectedProduct.imageUrl2} />
            <div className="product-desc">{paragraphs}</div>
          </div>
          {specComponent}
        </div>
        <hr />
        <div>
          <h1>More Photos</h1>
          <div className="gallery-container" data-uk-lightbox>
            <a
              className="gallery-images"
              href={selectedProduct.imageUrl3}
              data-caption={selectedProduct.productName}
            >
              <img
                className="gallery-border"
                src={selectedProduct.imageUrl3}
                alt=""
                width="100px"
              />
            </a>
            <a
              className="gallery-images"
              href={selectedProduct.imageUrl}
              data-caption={selectedProduct.productName}
            >
              <img
                className="gallery-border"
                src={selectedProduct.imageUrl}
                alt=""
                width="100px"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Product section end */}
      <Footer />
    </div>
  );
};

export default Product;
