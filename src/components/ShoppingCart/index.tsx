import React from "react";
import { FaTimes } from "react-icons/fa";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { items } from "../../data/items";
import { formatCurrency } from "../../utilities";
import { CartItem } from "../CartItem";
import './shoppingCart.css'

export const ShoppingCart = () => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__topBar">
          <h4 className="cart__title">Cart</h4>
          <FaTimes className="cart__close--btn" onClick={closeCart} />
        </div>
        <div className="cart__body">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <span className="cart__total">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = items.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
