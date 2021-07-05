import React from "react";
import styled from "styled-components";
import AboutBg from "../Images/About.png";

function About() {
  return (
    <Container>
      <Wrap></Wrap>
      <AboutContainer>
        <AboutContent>
          <h1>About</h1>
          <p>
            We are engaged in the development of Websites, mobile applications
            and SEO optimization. More than 83% of our customers come to us
            again and work with us for many years.
          </p>
          <p>
            We are confident that the agency and the client can work as a team
            to achieve joint results.
          </p>
        </AboutContent>
      </AboutContainer>
    </Container>
  );
}

export default About;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #e4e4e4;
`;
const Wrap = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${AboutBg});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
`;
const AboutContainer = styled.div`
  position: relative;
  width: 50vw;
`;
const AboutContent = styled.div`
  position: absolute;
  width: 30vw;
  top: 20%;
  left: 18%;

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;
