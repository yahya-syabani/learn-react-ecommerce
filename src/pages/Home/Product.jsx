import React from "react";
import "./Product.css";
import { useStateValue } from "../../stores/StateProvider";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";

function Cart({ id, title, qty, image, price }) {}

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
        <div className="product_title">{title}</div>
        <Rating name="read-only" value={rating} readOnly />
        <span className="product_price">
          <span>$</span>
          <strong> {price}</strong>
        </span>
        {/* <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div> */}
      </div>

      <img src={image} alt="" />

      <motion.button whileTap={{ scale: 0.8 }} onClick={addToBasket}>
        Add to Basket
      </motion.button>
    </motion.div>
  );
}

export default Product;
