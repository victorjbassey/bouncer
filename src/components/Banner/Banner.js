import React from "react";
import styles from "./Banner.module.css";
import cam from "../../assets/images/cam.png";
import phone from "../../assets/images/iPhone6s_discover.png";
import oculusRift from "../../assets/images/Oculus-Rift.png";

export default function Banner() {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.banner}>
        <div className={styles.phoneArea}>
          <div>
            <h3>iPhone 6</h3>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
            </p>
            <div className={styles.price}>$399</div>
          </div>
          <div className={`${styles.imgContainer} ${styles.phone}`}>
            <img src={phone} alt="iPhone 6s" />
          </div>
        </div>
        <div className={styles.oculusArea}>
          <div className={styles.imgContainer}>
            <img src={oculusRift} alt="Oculus Rift" />
          </div>
          <div>
            <h3>Oculus Rift</h3>
            <div className={styles.price}>$349</div>
          </div>
        </div>
        <div className={styles.goPro}>
          <div>
            <h3>GoPro Hero 6</h3>
            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className={styles.price}>$299</div>
          </div>
          <div className={styles.imgContainer}>
            <img src={cam} alt="GoPro Hero 6" />
          </div>
        </div>
      </div>
    </div>
  );
}
