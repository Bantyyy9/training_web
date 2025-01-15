import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppUtils = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat().format(price);
  };

  return {
    formatPrice,
  };
};

export const useCarts = () => {
  const { carts, setCarts } = useContext(AppContext);

  const totalCartItems = carts?.length;
  const totalAmount = carts?.reduce((prevData, item) => {
    return item?.quantity * item?.price + prevData;
  }, 0);

  const addToCarts = (item) => {
    const cartItem = { ...item, quantity: 1 };
    setCarts((prev) => [cartItem, ...prev]);
  };
  const removeFromCarts = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };
  const updateCartItem = (id, type) => {
    //find the item that matches the id
    const item = carts?.find((item) => item.id === id);
    if (item) {
      // we update the the quantity base the type[increment,decrement]
      if (type === "increment") {
        item.quantity = item?.quantity + 1;
      } else if (type === "decrement") {
        item.quantity = item?.quantity - 1;
      }

      if (item.quantity < 1) {
        removeFromCarts(id);
      } else {
        //find the index of the item that matches the id
        const index = carts?.findIndex((item) => item.id === id);
        const newCarts = [...carts];
        newCarts.splice(index, 1, item);
        //update the state
        setCarts(newCarts);
      }
    }
  };
  const isItemPartOfCart = (id) => {
    return !!carts.find((item) => item.id === id);
  };
  const getCartItemQuantity = (id) => {
    return carts.find((item) => item.id === id)?.quantity || 0;
  };

  return {
    totalCartItems,
    totalAmount,
    carts,
    addToCarts,
    removeFromCarts,
    updateCartItem,
    isItemPartOfCart,
    getCartItemQuantity,
  };
};
