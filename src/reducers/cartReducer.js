import {
  ADD_TO_CART,
  INCREAESE_QUANTITY,
  DECREAESE_QUANTITY,
} from "../actions/cartAction";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
    },
    {
      id: 2,
      title: "Adidas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
    },
    {
      id: 3,
      title: "Vans",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
    },
    {
      id: 4,
      title: "White",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
    },
    {
      id: 6,
      title: "Blues",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  } else if (action.type === INCREAESE_QUANTITY) {
    let item = state.items.find((item) => item.id === action.id);
    if (item) {
      item.quantity += 1;
      let newTotal = state.total + item.price;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal,
      };
    }
  } else if (action.type === DECREAESE_QUANTITY) {
    let item = state.items.find((item) => item.id === action.id);
    if (item && item.quantity > 0) {
      item.quantity -= 1;
      let newTotal = state.total - item.price;
      if (item.quantity === 0) {
        let items = state.addedItems.filter((item) => item.id !== action.id);
        return {
          ...state,
          addedItems: items,
          total: newTotal,
        };
      }
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
