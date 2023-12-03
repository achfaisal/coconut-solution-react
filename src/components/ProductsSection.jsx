import React from "react";
import CardProducts from "./CardProducts";

const ProductsSection = () => {
  return (
    <>
      <section id="product-section">
        <div className="uk-container">
          <div>
            <h1>Produk Kami</h1>
            <p>Berikut ini adalah produk-produk berkualitas dari kami.</p>
          </div>
          <CardProducts />
          {/* CardProducts */}
          {/* <div
            className="uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center"
            data-uk-grid=""
          >
            <a>
              <div>
                <div className="uk-card-height uk-card uk-card-hover uk-card-default custom-card modified overflow-text">
                  <div className="uk-card-media-top">
                    <img
                      src="/img/kelapa-1.jpg"
                      className="image-product"
                      alt=""
                    />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title title-margin">Coco Fiber</h3>
                    <p className="product-text">
                      Serat yang diekstrak dari sabut kelapa
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
