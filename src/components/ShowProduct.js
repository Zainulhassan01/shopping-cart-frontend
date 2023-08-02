import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ShowProduct = () => {
  const { id } = useParams();
  const item = useSelector((state) =>
    state.items.filter((e) => e.id === parseInt(id))
  );
  return (
    <>
      {item && (
        <div className="card">
          <div className="card-image">
              <img src={item[0].img} alt={item[0].title} />
              <span className="card-title">{item[0].title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i
                className="material-icons"
              >
                add
              </i>
            </span>
          </div>

          <div className="card-content">
            <p>{item[0].desc}</p>
            <p>
              <b>Price: {item[0].price}$</b>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowProduct;
