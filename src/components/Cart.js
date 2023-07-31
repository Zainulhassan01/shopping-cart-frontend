import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, increaseQuantity } from "../actions/cartAction";

const Cart = (props) => {
  function increaseQuantity(id) {
    props.increaseQuantity(id);
  }

  function decreaseQuantity(id) {
    props.decreaseQuantity(id);
  }

  let addedItems = props.items.length ? (
    props.items.map((item) => {
      return (
        <li className="collection-item avatar" key={item.id}>
          <div className="item-img">
            <img src={item.img} alt={item.img} className="" />
          </div>

          <div className="item-desc">
            <span className="title">{item.title}</span>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
            <p>
              <b>Quantity: {item.quantity}</b>
            </p>
            <div className="add-remove">
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => increaseQuantity(item.id)}
                >
                  arrow_drop_up
                </i>
              </Link>
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  arrow_drop_down
                </i>
              </Link>
            </div>
            <button className="waves-effect waves-light btn pink remove">
              Remove
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
    items: state.addedItems,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
