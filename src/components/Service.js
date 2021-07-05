import React from "react";
import styled from "styled-components";
import ServiceBg from "../Images/Services.png";

function Service() {
  return (
    <Container>
      <ServiceContainer>
        <ServiceContent>
          <h1>Services</h1>
          <ul>
            <li>Creation of online stores</li>
            <li>Wholesale B2B online stores</li>
            <li>Mobile, responsive sites</li>
            <li>Mobile applications</li>
            <li>Ready sites and shops</li>
            <li> Prototypes UX, UI, mobile</li>
            <li>Corporate identity and logos.</li>
            <li>Promotion and advertising</li>
            <li>Online Sales Analytics</li>
          </ul>
        </ServiceContent>
      </ServiceContainer>
      <Wrap></Wrap>
    </Container>
  );
}

export default Service;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #1a1f25;
`;
const ServiceContainer = styled.div`
  width: 50vw;
  position: relative;
`;
const ServiceContent = styled.div`
  position: absolute;
  width: 30vw;
  top: 18%;
  left: 18%;
  color: #555c6f;
  h1 {
    font-size: 5rem;
    margin-bottom: 1.8rem;
  }
  li {
    font-size: 2rem;
  }
`;
const Wrap = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${ServiceBg});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
`;
