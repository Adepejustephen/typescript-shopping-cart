import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { items } from '../../data/items';

type CartItemProps = {
    id: number;
    quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = items.find(i => i.id === id);
    if(item === null) return null
  return (
      <div className="cartItem">
          
   </div>
  )
}
