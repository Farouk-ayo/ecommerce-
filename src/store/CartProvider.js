import CartCtx from "./Cartctx";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // ADD CART
  if (action.type === "ADD") {
    const totalAmnt = +state.totalAmount + +action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(action.item);
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedQuantity = existingItem.quantity + action.item.quantity;
      const updatedPrice = action.item.price * updatedQuantity;
      const updatedItem = {
        ...existingItem,
        quantity: updatedQuantity,
        totalPrice: updatedPrice,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      state.items.push(action.item);
      updatedItems = state.items;
    }

    return {
      items: updatedItems,
      totalAmount: totalAmnt,
    };
  }

  // REMOVE CART
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    console.log(existingItemIndex);
    const existingItem = state.items[existingItemIndex];
    const totalAmnt = state.totalAmount - +existingItem.price;
    let updatedItems;

    if (existingItem.price === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedQuantity = existingItem.quantity - 1;
      const updatedPrice = existingItem.price * updatedQuantity;
      const updatedItem = {
        ...existingItem,
        quantity: updatedQuantity,
        totalPrice: updatedPrice,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: totalAmnt,
    };
  }

  if (action.type === "CLEAR") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    console.log(existingItemIndex);
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    updatedItems = state.items.filter((item) => item.id !== action.id);

    const totalAmnt = state.totalAmount - +existingItem.totalPrice;

    return {
      items: updatedItems,
      totalAmount: totalAmnt,
    };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchState] = useReducer(cartReducer, defaultState);

  const addCartItems = (item) => {
    dispatchState({ type: "ADD", item: item });
  };

  const removeCartItems = (id) => {
    dispatchState({ type: "REMOVE", id: id });
  };

  const clearCartItems = (id) => {
    dispatchState({ type: "CLEAR", id: id });
  };

  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addCartItems,
    removeItems: removeCartItems,
    clearItems: clearCartItems,
  };

  return <CartCtx.Provider value={cartCtx}>{props.children}</CartCtx.Provider>;
};

export default CartProvider;
