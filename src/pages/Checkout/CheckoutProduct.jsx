import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../stores/StateProvider";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  //remove the item from the basket
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="product" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <Rating name="read-only" value={rating} readOnly />
        <p className="checkoutProduct_price">
          <p>$</p>
          <strong>{price}</strong>
        </p>
        {/* <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div> */}

        <motion.button onClick={removeFromBasket}>
          Remove from Basket
        </motion.button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
