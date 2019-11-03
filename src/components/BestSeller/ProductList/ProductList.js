import React from "react";
import cart from "../../../assets/icons/cart_2.png";
import like from "../../../assets/icons/hearts.png";
import Rating from "./Rating";
import styles from "./ProductList.module.css";

export default function ProductList({ items, added }) {
  return (
    <div className={styles.productList}>
      {items.map((item, index) => (
        <div key={index} className={styles.product}>
          {item.hot ? <span className={styles.tag}>HOT</span> : null}
          <div className={styles.imageWrapper}>
            <div className={styles.cta}>
              <div>
                <img src={like} alt="Add to favorites" />
              </div>
              <div onClick={e => added(item.currentPrice)}>
                <img src={cart} alt="Add to cart" />
              </div>
            </div>
            <img src={item.image} className={styles.img} alt={item.name} />
          </div>
          <h3>{item.name}</h3>
          <Rating rating={item.rating} />
          <div className={styles.prices}>
            <span>${item.currentPrice}</span>
            <span>{item.oldPrice}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
