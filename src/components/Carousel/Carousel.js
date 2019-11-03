import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Carousel.module.css";
// import { Carousel } from 'react-bootstrap';
import rightArrow from "../../assets/icons/arrow right.png";
import leftArrow from "../../assets/icons/arrow left.png";
import phone from "../../assets/images/iphonex_spacegray.png";

const myCarousel = () => (
  <section className={styles.carousel}>
    <Wrapper>
      <div className={styles.wrapper}>
        <div>
          <img src={leftArrow} alt="left arrow icon" />
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <h3>iPhone X</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <a href="/">MORE</a>
          </div>
          <div className={styles.phoneContainer}>
            <img src={phone} alt="Latest iPhone X" />
          </div>
        </div>
        <div>
          <img src={rightArrow} alt="right arrow icon" />
        </div>
      </div>
      

{/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={phone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={phone}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={phone}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
    </Wrapper>
    
  </section>
);

export default myCarousel;
