import axios from "axios";

export const orderFunction = (order, props, item, products) => {
let orderId = 0 
  if (order) {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/api/user/64b94a56ff0aa719f67cffba/orders/${order}`,
        {
          products: products,
        }
      )
      .then((response) => {
        props.addToCart(response.data.products[0]._id, response.data._id);
      })
      .catch((error) => console.log(error));
  } else {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/api/user/64b94a56ff0aa719f67cffba/order`,
        {
          products: [item],
        }
      )
      .then((response) => {
        props.addToCart(response.data.products[0]._id, response.data._id);
        orderId = response.data._id
      })
      .catch((error) => console.log(error));
  }
  return([[item], orderId]);
};
