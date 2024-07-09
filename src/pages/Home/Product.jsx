import React from "react";
import "./Product.css";
import { useStateValue } from "../../stores/StateProvider";
import { motion } from "framer-motion";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispacth the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <motion.div
      className="product"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring" }}
    >
      <div className="product_info">
        <span>{title}</span>
        <span className="product_price">
          <span>$</span>
          <strong> {price}</strong>
        </span>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </motion.div>
  );
}

export default Product;
