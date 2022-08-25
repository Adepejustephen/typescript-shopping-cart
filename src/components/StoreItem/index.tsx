import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { StoreItemsProps } from "../../model";
import { formatCurrency } from "../../utilities";
import "./storeitem.css";

export const StoreItem = ({ id, name, price, image }: StoreItemsProps) => {
  const {
    getQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getQuantity(id);

  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <div className="card__body">
        <div className="card__title">
          <span className="card__name">{name}</span>
          <span className="card__price">{formatCurrency(price)}</span>
        </div>
        <div className="card__addTocart">
          {quantity === 0 ? (
            <button
              className="card__addTocart--btn"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to cart
            </button>
          ) : (
            <div className="card__quantity">
              <div className="card__quantity--btns">
                <button
                  className="card__quantity--btn"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="card__quantity--btn"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>

              <button
                className="remove__btn"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
