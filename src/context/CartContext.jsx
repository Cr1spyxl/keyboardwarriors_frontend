/*
  Import from React:

  createContext → creates a global storage (Context)
  useState → creates and manages state
*/
import { createContext, useState } from 'react';

/*
  Create a Context object.
  This will allow components to share cart data globally.
*/
export const CartContext = createContext();

/*
  CartProvider wraps the app.
  It gives all child components access to the cart.
*/
const CartProvider = ({ children }) => {

  // Global cart state (starts as empty array)
  const [cart, setCart] = useState([]);

  /*
    Add product to cart.
    If product already exists → increase qty.
    If not → add new item with qty = 1.
  */
  const addToCart = (product) => {
    setCart(prevCart => {

      // Check if item already in cart
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        // Increase quantity (create new updated array)
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // Add new product
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  /*
    Remove item completely from cart.
    filter() removes the matching item.
  */
  const removeFromCart = (id) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    );
  };

  /*
    Increase item quantity by 1.
  */
  const increaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  /*
    Decrease quantity by 1.
    Prevent quantity from going below 1.
  */
  const decreaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // Clear all items in cart (after checkout)
  const clearCart = () => {
    setCart([]);
  };

  /*
    Provider makes these values available globally:
    - cart (state)
    - addToCart
    - removeFromCart
    - increaseQty
    - decreaseQty

    Any component inside CartProvider
    can access them using useContext(CartContext)
  */
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
``