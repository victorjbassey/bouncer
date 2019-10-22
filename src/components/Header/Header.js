import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import profileIcon from "../../assets/icons/profile_close_2.png";
import cartIcon from "../../assets/icons/bag_3.png";
import searchIcon from "../../assets/icons/search-icon.png";
import styles from "./Header.module.css";

const header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.headerContent}>
          <div>
            <select>
              <option value="en">EN</option>
            </select>
            <select>
              <option value="usd">USD</option>
            </select>
          </div>
          <div className={styles.profileArea}>
            <div className={styles.headerItem}>
              <div className={styles.iconWrapper}>
                <img src={profileIcon} alt="Profile icon" />
              </div>
              <span>My Profile</span>
            </div>
            <div className={styles.headerItem}>
              <div className={styles.iconWrapper}>
                <img src={cartIcon} alt="Cart icon" />
              </div>
              <span>0 Items</span>
              <span className={styles.price}>$0.00</span>
            </div>
            <div>
              <img src={searchIcon} alt="search icon" />
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default header;
