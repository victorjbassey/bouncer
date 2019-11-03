import React from "react";
import ProductList from "./ProductList/ProductList";
import styles from "./BestSeller.module.css";

export default function BestSeller({ listItems, products, added }) {
  return (
    <div className={styles.bestSeller}>
      <h1 className={styles.heading}>BEST SELLER</h1>
      <div className={styles.listArea}>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
      <ProductList added={added} items={products} />
      <div className={styles.more}><span>LOAD MORE</span></div>
    </div>
  );
}

BestSeller.defaultProps = {
  listItems: [
    {
      title: "All"
    },
    {
      title: "Mac"
    },
    {
      title: "iPhone"
    },
    {
      title: "iPad"
    },
    {
      title: "Accessories"
    }
  ]
};
