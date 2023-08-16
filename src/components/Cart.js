import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../actions/cartAction";
import axios from 'axios';

const Cart = (props) => {
  function increaseQuantity(id) {
    props.increaseQuantity(id);
  }

  function decreaseQuantity(id) {
    props.decreaseQuantity(id);
  }

  function removeItem(id) {
    props.removeItem(id);
  }

  function checkout(){
    axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/user/64b94a56ff0aa719f67cffba/orders/${props.orderId}/checkout`, {
      order: props.items,
    }).then((response) => {
      props.addToCart(response.data);
    })
    .catch((error) => console.log(error))
  }

  let addedItems = props.items.length ? (
    props.items.map((item) => {
      return (
        <li className="collection-item avatar" key={item._id}>
          <div className="item-img">
            <img src={item.img} alt={item.img} className="" />
          </div>

          <div className="item-desc">
            <span className="title">{item.name}</span>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price.replace('$', '') * item.quantity}$</b>
            </p>
            <p>
              <b>Quantity: {item.quantity}</b>
            </p>
            <div className="add-remove">
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => increaseQuantity(item._id)}
                >
                  arrow_drop_up
                </i>
              </Link>
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => decreaseQuantity(item._id)}
                >
                  arrow_drop_down
                </i>
              </Link>
            </div>
            <button
              className="waves-effect waves-light btn pink remove"
              onClick={() => removeItem(item._id)}
            >
              Remove
            </button>
            <br />
            <button
              className="waves-effect waves-light btn black remove"
              onClick={() => checkout()}
            >
              Check Out
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <p>Nothing.</p>
  );
  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">{addedItems}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart.addedItems,
    orderId: state.cart.orderId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (id) => {
      dispatch(increaseQuantity(id));
    },
    decreaseQuantity: (id) => {
      dispatch(decreaseQuantity(id));
    },
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
