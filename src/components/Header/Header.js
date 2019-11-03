import React, { useState } from "react";
import ReactDOM from "react-dom";
import Wrapper from "../Wrapper/Wrapper";
import MyWidget from "../../PaymentWidget";
import Backdrop from "../Backdrop/Backdrop";
import profileIcon from "../../assets/icons/profile_close_2.png";
import cartIcon from "../../assets/icons/bag_3.png";
// import searchIcon from "../../assets/icons/search-icon.png";
import styles from "./Header.module.css";

const PaymentWidget = MyWidget.driver("react", {
  React: React,
  ReactDOM: ReactDOM
});

const Header = ({ itemsInCart, total }) => {
  const [paymentView, setPaymentView] = useState(false);

  const openPaymentModal = () => {
    setPaymentView(true);
  };

  const closePaymentModal = () => {
    setPaymentView(false);
  };

  return (
    <>
      {paymentView && (
        <>
          <Backdrop clicked={closePaymentModal} />
          <div className={styles.paymentModal}>
            <div className={styles.payCollectWidget}>
              <div className={styles.close} onClick={closePaymentModal}>
                X
              </div>
              <PaymentWidget amount={total} close={closePaymentModal} />
            </div>
          </div>
        </>
      )}
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
                <span>{itemsInCart} Items</span>
                <span className={styles.price}>${`${total}`}.00</span>
              </div>
              <div>
                <button
                  onClick={openPaymentModal}
                  className={styles.payCollect}
                >
                  Pay
                </button>
                {/* <img src={searchIcon} alt="search icon" /> */}
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
