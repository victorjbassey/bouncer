import React from "react";
import logo from "../../assets/images/logo@2x.png";
import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.logoWrapper}>
    <img src={logo} alt="bouncer logo" />
  </div>
);

export default Logo;
