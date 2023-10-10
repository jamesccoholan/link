// src\coreApp\components\DropdownMenu.js

import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase"; // Ensure the path is correct
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function DropdownMenu({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to the landing page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const goToRecordsPage = () => {
    navigate("/records"); // Assuming "/records" is the route for RecordsPage
    setIsOpen(false); // Close the dropdown after navigating
  };

  return (
    <DropdownContainer>
      <Hamburger onClick={toggleDropdown}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      {isOpen && (
        <Menu>
          {/* <MenuItem onClick={goToRecordsPage}>Records</MenuItem>{" "} */}
          <MenuItem onClick={handleLogoutClick}>Log Out</MenuItem>
        </Menu>
      )}
    </DropdownContainer>
  );
}

export default DropdownMenu;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  transition: 0.3s;

  div {
    height: 3px;
    width: 100%;
    background-color: #e0e0e0;
    transition: 0.3s;
  }

  &:hover {
    div {
      background-color: #bbbbbb; // A bit lighter on hover
    }
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  width: 150px;
  border-top: 3px solid #e0e0e0; // Highlighted border-top
  border-right: 1px solid #333;
  border-left: 1px solid #333;
  background-color: #000000;
  z-index: 1;
  transition: 0.3s;
  border-radius: 0 0 5px 5px; // Rounded corners at the bottom
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); // Adding some shadow for depth
`;

const MenuItem = styled.div`
  padding: 12px 16px; // Increased padding for more space
  cursor: pointer;
  color: #e0e0e0;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    background-color: #333333;
    color: #ffffff; // White text on hover
  }
`;
