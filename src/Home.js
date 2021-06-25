import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Home() {
  return (
    <HomeWrapper>
      <Container>
        <img className="home__image" src="/banner_bg.jpg" alt="" />
        <HomeRow>
          <Product />
          <Product />
        </HomeRow>
        <HomeRow>
          <Product />
          <Product />
          <Product />
        </HomeRow>
        <HomeRow>
          <Product />
        </HomeRow>
      </Container>
    </HomeWrapper>
  );
}

const Container = styled.div``;
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
  .home__image {
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const HomeRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
export default Home;
