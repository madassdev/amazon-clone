import React from "react";
import styled from "styled-components";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <Container>
      <LeftSection>
        <img src="checkout_banner.jpg" />
        {/* <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/> */}
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </LeftSection>
      <RightSection>
       <Subtotal/>
      </RightSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;
const LeftSection = styled.div`
  img {
    width: 100%;
    margin-bottom: 10px;
  }
  h2 {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
`;
const RightSection = styled.div`
  
`;

export default Checkout;
