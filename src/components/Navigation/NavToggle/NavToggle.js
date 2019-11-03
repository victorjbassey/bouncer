import React from "react";
import styles from "./NavToggle.module.css";

const navToggle = ({ toggleNav }) => (
  <div onClick={toggleNav} className={styles.navToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default navToggle;
