import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import macbook from '../../assets/images/macbook.png';
import Nav from "../../components/Navigation/Nav";
import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";
import BestSeller from "../../components/BestSeller/BestSeller";

export default function Homepage({ products }) {
  const [state, setState] = useState({itemsInCart: 0, totalCost: 0});

  const addToCart = itemPrice => {
    setState(prevState => ({
      itemsInCart: prevState.itemsInCart + 1,
      totalCost: prevState.totalCost + itemPrice
    }))
  }
  return (
    <>
      <Header itemsInCart={state.itemsInCart} total={state.totalCost} />
      <Nav />
      <Carousel />
      <Banner />
      <BestSeller added={addToCart} products={products}/>
    </>
  );
}

Homepage.defaultProps = {
  products: [
    {
      name: "Apple Macbook Pro",
      rating: 4.5,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: true
    },
    {
      name: "Apple Macbook Pro",
      rating: 3.5,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: false
    },
    {
      name: "Apple Macbook Pro",
      rating: 4.1,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: false
    },
    {
      name: "Apple Macbook Pro",
      rating: 3.3,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: true
    },
    {
      name: "Apple Macbook Pro",
      rating: 4.7,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: false
    },
    {
      name: "Apple Macbook Pro",
      rating: 2.3,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: false
    },
    {
      name: "Apple Macbook Pro",
      rating: 4.6,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: true
    },
    {
      name: "Apple Macbook Pro",
      rating: 3.8,
      image: macbook,
      currentPrice: 499,
      oldPrice: "$500",
      hot: false
    }
  ]
};
