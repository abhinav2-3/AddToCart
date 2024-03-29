import React from "react";

const ProductCard = ({ name, price, handler, id, imgSrc }) => {
  return (
    <div className="productcard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>₹{price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
