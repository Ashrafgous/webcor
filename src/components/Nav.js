import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavBar>
      <Logo>WebCore</Logo>
      <NavItems>
        <ul>
          <li>About Us</li>
        </ul>
        <ul>
          <li>Services</li>
        </ul>
        <ul>
          <li>Send Prices</li>
        </ul>
        <ul>
          <li>Contacts</li>
        </ul>
      </NavItems>
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.div`
  display: flex;
  margin: 1.2rem;

  justify-content: space-around;
`;
const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
`;
const NavItems = styled.div`
  display: flex;
  padding: 0 2rem 0 2rem;
  ul {
    list-style: none;
    margin-left: 2rem;
    cursor: pointer;
  }
`;
