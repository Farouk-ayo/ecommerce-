import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log(state, action);
};

const CartProvider = () => {
  const [cartState, dispatchState] = useReducer(cartReducer, defaultState);

  const addCartItems = () => {
    dispatchState();
  };
};
