import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  background-image: url(${(props) => props.backgroundImage || "none"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto; // Changed to allow vertical scrolling if content overflows
  color: ${(props) => props.theme.palette.text.primary};
`;

export const HeroSection = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const InputBox = styled.input`
  margin: 20px;
  padding: 10px;
  font-size: 16px;
`;

export const SendButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ResponseBox = styled.div`
  margin: 30px 20px; // Reduced the horizontal margin for better responsiveness
  padding: 0px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 4px;
  color: #ffffff;
  font-size: 26px;
  line-height: 3;
  font-family: "Roboto", sans-serif;
  background-color: transparent;
  text-align: left;
`;
