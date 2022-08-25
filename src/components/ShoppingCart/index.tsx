import React from "react";
import { FaTimes } from "react-icons/fa";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "../CartItem";

export const ShoppingCart = () => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__topBar">
          <h4 className="cart__title">Cart</h4>
          <FaTimes />
        </div>
        <div className="cart__body">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
