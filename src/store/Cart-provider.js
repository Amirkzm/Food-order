import { useState } from "react";
import CartContext, { DUMMY_MEALS } from "./Cart-context";

const CartContextProvider = (props) => {
  const [defaultCartState, setDefaultCartState] = useState({
    items: [],
    totalPrice: 0,
  });

  const [showCart, setShowCart] = useState(false);

  const onCloseModalHandler = () => {
    setShowCart(false);
  };

  const onOpenModalHandler = () => {
    setShowCart(true);
  };

  const onRemoveFromCart = (id) => {
    const selectedItem = defaultCartState.items.filter(
      (item) => item.id === id
    )[0];

    const selectedItemPrice = selectedItem.price;

    if (selectedItem.amount === "1") {
      const restOfItems = defaultCartState.items.filter(
        (item) => item.id !== id
      );
      console.log(restOfItems);
      setDefaultCartState((prev) => ({
        items: restOfItems,
        totalPrice: prev.totalPrice - selectedItemPrice,
      }));
    } else {
      const updatedItems = defaultCartState.items.map((item, index) => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item;
      });

      setDefaultCartState((prev) => ({
        items: updatedItems,
        totalPrice: prev.totalPrice - selectedItemPrice,
      }));
    }
  };

  const onAddToCartHandler = (newItem) => {
    const foundItem = defaultCartState.items.find(
      (item) => item.id === newItem.id
    );
    const foundItemIndex = defaultCartState.items.findIndex(
      (item) => item.id === newItem.id
    );

    if (foundItem) {
      console.log("found");
      const updatedItem = {
        ...newItem,
        amount: +newItem.amount + +foundItem.amount,
      };
      setDefaultCartState((prev) => ({
        items: [
          ...prev.items.slice(0, foundItemIndex),
          updatedItem,
          ...prev.items.slice(foundItemIndex + 1),
        ],
        totalPrice: prev.totalPrice + newItem.amount * newItem.price,
      }));
    } else {
      setDefaultCartState((prev) => ({
        items: [...prev.items, newItem],
        totalPrice: prev.totalPrice + newItem.amount * newItem.price,
      }));
    }
  };

  return (
    <CartContext.Provider
      value={{
        meals: DUMMY_MEALS,
        showCart,
        cartItems: defaultCartState.items,
        onCloseModal: onCloseModalHandler,
        onOpenModal: onOpenModalHandler,
        onAddToCart: onAddToCartHandler,
        onRemoveFromCart: onRemoveFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
