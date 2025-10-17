import React from "react";
import "../Styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <div className="checkoutProduct__stars">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
        </div>
        <p className="checkoutProduct__inStock">In Stock</p>
        <div className="checkoutProduct__actions">
          <div className="checkoutProduct__quantity">Qty: 1 ▼</div>
          <span className="checkoutProduct__divider">|</span>
          <button onClick={removeFromBasket}>Delete</button>
          <span className="checkoutProduct__divider">|</span>
          <button>Save for later</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
