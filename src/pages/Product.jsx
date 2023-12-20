// SingleProduct.js
import React from "react";
import { useParams } from "react-router-dom";
import i18n from "../i18n";
import Navbar from "../components/Navbar";
import navbarData from "../lang/navbarData";
import { productEn, productId } from "../lang/productData";

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

  // Remove spaces and convert the URL-friendly product name back to lowercase
  const formattedProductName = productName.replace(/\s+/g, "").toLowerCase();

  // Find the product based on the formatted product name
  const selectedProduct = getProductData().find(
    (product) =>
      product.productName.toLowerCase().replace(/\s+/g, "") ===
      formattedProductName
  );

  if (!selectedProduct) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar
        navbarHome={getNavData().home}
        navbarAbout={getNavData().about}
        navbarProduct={getNavData().product}
        navbarContact={getNavData().contact}
        onClickHandler={changeLanguage}
      />

      {/* <div
        className="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
        data-src={selectedProduct.imageUrl}
        data-uk-img
      >
        <h1 className="product-title">{selectedProduct.productName}</h1>
      </div> */}

      <div className="product-image__container">
        <img src={selectedProduct.imageUrl} alt="Kelapa Image" />
      </div>

      <section className="uk-container product-order">
        <div
          className="uk-child-width-expand@s uk-grid-large product-breadcrumb"
          data-uk-grid
        >
          <div>
            <nav aria-label="Breadcrumb">
              <ul className="uk-breadcrumb">
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">{selectedProduct.productName}</a>
                </li>
              </ul>
            </nav>
            <img className="product-img" src="img/cocobristle.jpg" alt="" />
            <p className="product-desc">{selectedProduct.productDetail}</p>
          </div>
          <div>
            <ul>
              <div>
                <h4>Spesifikasi</h4>
                <ul className="uk-list uk-list-disc">
                  <li className="margin-li">
                    Memiliki panjang serat minimal 5 cm
                  </li>
                  <li>Memiliki kadar air kurang dari 15%</li>
                  <li>
                    Memiliki kepadatan yang baik dan tidak terlalu padat atau
                    terlalu renggang.
                  </li>
                  <li>
                    Cocofiber memiliki warna yang cerah dan tidak terlalu kusam
                  </li>
                  <li>
                    Mempunyai kandungan mineral yang baik untuk pertumbuhan
                    tanaman seperti kalium, magnesium, natrium, fosfor, dan
                    kalsium.
                  </li>
                  <li>Mempunyai tingkat pH antara 5,5 hingga 6,5.</li>
                  <li>
                    Mampu menyerap dan menyimpan cadangan udara yang baik.
                  </li>
                  <li>Bebas bakteri, jamur, dan lumut.</li>
                  <li>
                    Memiliki daya serap yang baik sehingga air yang disiram
                    tidak terciprat ke area sekitarnya.
                  </li>
                  <li>
                    Serat kelas terbaik berwarna terang, kuning keemasan (serat
                    dari kelapa mentah) atau coklat (serat dari kelapa matang).
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
              href="img/product-img/cocobristle1.jpg"
              data-caption="Image"
            >
              <img
                className="gallery-border"
                src="img/product-img/cocobristle1.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
      {/* Product section end */}
    </div>
  );
};

export default Product;
