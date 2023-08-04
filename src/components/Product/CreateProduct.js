import React, { useState } from "react";

const CreateProduct = () => {
  const [productData, setproductData] = useState({
    title: "",
    price: "",
    desc: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setproductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", productData);
    setproductData({
      title: "",
      price: "",
      desc: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div>
        <label>title:</label>
        <input
          type="text"
          name="title"
          value={productData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>price:</label>
        <input
          type="price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>desc:</label>
        <input
          type="desc"
          name="desc"
          value={productData.desc}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProduct;
