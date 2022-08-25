import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components";

type ProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
}

type CartContext = {
  openCart: () => void
  closeCart: () => void
  getQuantity: (id:number) => number
  increaseCartQuantity: (id:number) => void
  decreaseCartQuantity: (id:number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
};

const ShoppingCartContext = createContext({} as CartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: ProviderProps) => {

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setisOpen] = useState(false)
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  
  function getQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {

    return setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      }
      else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          }
          else {
            return item
          }
        })
      }
    }) 
  }

  function decreaseCartQuantity(id: number) {

    return setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity  - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    return setCartItems(currItems => currItems.filter((item) => item.id !== id))
  }

  const openCart = () => setisOpen(true)
  const closeCart = () => setisOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        getQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,

      }}
    >
      {children}
      <ShoppingCart/>
    </ShoppingCartContext.Provider>
  );
    
};
