export const ADD_TO_CART = "ADD_TO_CART";
export const INCREAESE_QUANTITY = "INCREAESE_QUANTITY";
export const DECREAESE_QUANTITY = "DECREAESE_QUANTITY";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: INCREAESE_QUANTITY,
    id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREAESE_QUANTITY,
    id,
  };
};
