import { createContext, useContext, useState, useEffect } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShopingCartContext = createContext({});
// to save in local storage 
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const ShoppingCartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setcartItems] = useState(initialCartItems);
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );
      useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
      }, [cartItems]);


    const openCart = () => {
        setIsOpen(true);
    }
    const closeCart = () => {
        setIsOpen(false);
    }
    const getItemsQuantity = (id) => {
        return(
            cartItems.find((item) => item.id === id)?.quantity || 0
        );
    }
  const increasecartQuantity = (id) => {
    setcartItems((currItems) => {
        if(currItems.find(item => item.id === id) == null){
            return [...currItems, {id, quantity: 1}];
        }else{
            return currItems.map((item) => {
                if(item.id === id){
                    return {...item, quantity: item.quantity + 1}
                }else{
                    return item;
                };
            });
        };
    });
  };  
  const decreasecartQuantity = (id) => {
    setcartItems((currItems) => {
        if(currItems.find(item => item.id === id) == null){
            return currItems.filter((item) => item.id !== id);
        }else{
            return currItems.map((item) => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1}
                }else{
                    return item;
                };
            });
        };
    });
  };  
  const removeItemFromCart = (id) => {
    setcartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  return (
    <ShopingCartContext.Provider value={{cartItems, getItemsQuantity, increasecartQuantity, decreasecartQuantity, removeItemFromCart, openCart, closeCart, cartQuantity}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShopingCartContext.Provider>
  );
}

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShopingCartContext);
}