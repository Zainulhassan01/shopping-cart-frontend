import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartAction";

const Home = (props) => {
  function handleClick(itemId) {
    props.addToCart(itemId);
  }

  let itemList = props.items.map((item, i) => {
    return (
      <>
        <div className="card" key={i}>
          <div className="card-image">
            <Link to={`/product/${item.id}`}>
              <img src={item.img} alt={item.title} />
              <span className="card-title">{item.title}</span>
            </Link>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i
                className="material-icons"
                onClick={() => handleClick(item.id)}
              >
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
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
