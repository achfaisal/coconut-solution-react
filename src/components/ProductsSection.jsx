import React from "react";
import CardProducts from "./Cards/CardProducts";

const ProductsSection = ({ cards, productHeader, productDesc }) => {
  return (
    <section id="products">
      <div className="uk-container product-cards__container">
        <div className="uk-text-center">
          <h1 className="product-section__header">{productHeader}</h1>
          <p>{productDesc}</p>
        </div>
        <div
          className="uk-child-width-1-2@s uk-child-width-1-3@m products-cards"
          data-uk-grid
        >
          {cards.map((card) => (
            <CardProducts key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
