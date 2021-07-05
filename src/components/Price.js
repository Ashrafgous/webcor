import React from "react";
import styled from "styled-components";
import PriceBg from "../Images/send.png";
function Price() {
  return (
    <Container>
      <Wrap></Wrap>
      <PriceContainer>
        <PriceContent></PriceContent>
      </PriceContainer>
    </Container>
  );
}

export default Price;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #181717;
`;
const Wrap = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${PriceBg});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
`;
const PriceContainer = styled.div``;
const PriceContent = styled.div``;
