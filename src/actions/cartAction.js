// import axios from 'axios';
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREAESE_QUANTITY = "INCREAESE_QUANTITY";
export const DECREAESE_QUANTITY = "DECREAESE_QUANTITY";
export const REMOVE_ITEM = "REMOVE_ITEM";

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

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

// export const fetchItems = () => async (dispatch) => {
  // try {
  //   const response = await axios.get('/api/products');
  //   dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
  // } catch (error) {
  //   dispatch({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
  // }
// };

