import React from "react";
import styled from "styled-components";

export default function Rating(props) {
  const percent = (props.rating / 5) * 100;

  const Stars = styled.div`
    display: inline-block;
    font-size: 2rem;
    font-family: Times;
    line-height: 1;
    &::after {
      content: "★★★★★";
      letter-spacing: 3px;
      background: linear-gradient(90deg, #FFC600 ${percent}%, #C1C8CE ${percent}%);
      -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  `;
  return <Stars />;
}
