import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SuccessMessage = styled.h1`
  color: #4caf50;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #333;
  font-size: 1rem;
  text-align: center;
  max-width: 500px;
`;

const NavigateButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <StyledSuccessContainer>
      <SuccessMessage>Subscription Successful!</SuccessMessage>
      <Description>
        Thank you for subscribing. You can now generate audiobooks for texts
        longer than 250 characters.
      </Description>
      <NavigateButton onClick={() => navigate("/app")}>
        Go to App
      </NavigateButton>
    </StyledSuccessContainer>
  );
}

export default SuccessPage;
