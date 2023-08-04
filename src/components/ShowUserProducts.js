import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ShowProduct = () => {
  const { id } = useParams();
  const items = useSelector((state) =>
    state.cart.items.filter((item) => item.userId === parseInt(id))
  );
  return (
    <>
      {items &&
        items.map((item) => {
          return (
            <div className="card">
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
          );
        })}
    </>
  );
};

export default ShowProduct;
