// SingleProduct.js
import React from "react";
import { useParams } from "react-router-dom";
import i18n from "../i18n";
import Navbar from "../components/Navbar";
import navbarData from "../lang/navbarData";
import { productEn, productId } from "../lang/productData";
import Footer from "../components/Footer";
import { HashLink as Link } from "react-router-hash-link";

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

  return (
    <div>
      <Navbar
        navbarHome={getNavData().home}
        navbarAbout={getNavData().about}
        navbarProduct={getNavData().product}
        navbarContact={getNavData().contact}
        onClickHandler={changeLanguage}
      />

      <div className="image-container">
        <img src={selectedProduct.headerImageUrl} alt="Your Image" />
        <div className="center-text">{selectedProduct.productName}</div>
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
          <div>
            <ul>
              <div>
                <h4 className="spec-title">Spesifikasi</h4>
                <ul className="uk-list uk-list-disc">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    earum.
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <h1>More Photos</h1>
          <div className="gallery-container" data-uk-lightbox="">
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
