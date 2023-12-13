import React from "react";
import CardProducts from "./CardProducts";

const ProductsSection = ({ cards, productHeader, productDesc }) => {
  return (
    <section id="products" className="uk-margin-medium-top bg-color">
      <div className="uk-container">
        <div>
          <h1 className="uk-margin-medium-top">{productHeader}</h1>
          <p>{productDesc}</p>
        </div>
        <div className="uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid>
          {cards.map((card) => (
            <CardProducts key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
