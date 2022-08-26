import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { items } from '../../data/items';
import { formatCurrency } from '../../utilities';
import './cartItem.css'

type CartItemProps = {
    id: number;
    quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = items.find(i => i.id === id);

    if(item == null) return null
  return (
    <div className="cartItem">
      <div className="cartItem__left">
        <img src={item.image} alt={item.name} className="cartItem__image" />
        <div className="cartItem__left--text">
          <p className="cartItem__name">
            {item.name}
            {quantity > 1 && <span>X{quantity} </span>}
          </p>
          <p className="cartItem__price">{formatCurrency(item.price)}</p>
        </div>
      </div>
      <div className="cartItem__right">
        <span className="total">{formatCurrency(item.price * quantity)} </span>
        <button className="delete__btn" onClick={()=>removeFromCart(id)}>X</button>
      </div>
    </div>
  );
}
