// src/Components/Card.js

import React from "react";
import styled from "styled-components";

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: start; // Aligns content to the top
  border: none; // Removes the border
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adds a subtle shadow
  background-color: transparent; // Make the background transparent
  margin: 20px 0; // Some margin around the card
`;
//
