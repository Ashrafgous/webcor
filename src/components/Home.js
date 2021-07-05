import React from "react";
import styled from "styled-components";
import background from "../Images/Background.png";
import Nav from "./Nav";

function Home() {
  return (
    <Wrap>
      <Nav />
      <ItemText>
        <h1>Web Studio WebCore.</h1>
        <h1>Welcome to us :)</h1>
      </ItemText>
    </Wrap>
  );
}

export default Home;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  object-fit: contain;
  background-image: url(${background});
  overflow-x: hidden;
`;
const ItemText = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-align: center;
`;
