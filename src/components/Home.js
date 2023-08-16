import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartAction";
import axios from "axios";

const Home = (props) => {
  const [order, setOrder] = useState('')
  const [products, setProduct] = useState([])

  const dispatch = useDispatch();
  const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/api/products`)
      .then((response) => dispatch({ type: "SET_ITEMS", item: response.data }))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleClick(item) {
    if(order){
      products.push(item)
      axios.post(`${BACKEND_BASE_URL}/api/user/64b94a56ff0aa719f67cffba/orders/${order}`, {
        products: products,
      }).then((response) => {
        props.addToCart(response.data.products[0]._id, response.data._id);
      })
      .catch((error) => console.log(error))
    }
    else{
      axios.post(`${BACKEND_BASE_URL}/api/user/64b94a56ff0aa719f67cffba/order`, {
        products: [item],
      }).then((response) => {
        props.addToCart(response.data.products[0]._id, response.data._id);
        setProduct([item])
        setOrder(response.data._id)
      })
      .catch((error) => console.log(error))
    }
  }

  let itemList = props.items.map((item, i) => {
    return (
      <>
        <div className="card" key={i}>
          <div className="card-image">
            <Link to={`/product/${item._id}`}>
              <img src={item.img} alt={item.title} />
              <span className="card-title">{item.title}</span>
            </Link>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons" onClick={() => handleClick(item)}>
                add
              </i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      </>
    );
  });
  return (
    <div>
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, orderId) => {
      dispatch(addToCart(id, orderId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
