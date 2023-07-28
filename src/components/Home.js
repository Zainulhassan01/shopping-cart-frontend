import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  let itemList = props.items.map((item, i) => {
    return (
      <>
        <div className="card" key={i}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
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
    items: state.items,
  };
};

export default connect(mapStateToProps)(Home);
