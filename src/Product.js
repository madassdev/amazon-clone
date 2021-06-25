import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue()
    console.log("basket", basket)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
  return (
    <Container>
      <ProductInfo>
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </ProductRating>
      </ProductInfo>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
`;
const ProductRating = styled.div`
  display: flex;
`;

export default Product;
// const m = `.product {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-end;
//     margin: 10px;
//     padding: 20px;
//     width: 100%;
//     max-height: 400px;
//     min-width: 100px;
//     background-color: white;
//     z-index: 1;
//   }

//   .product__rating {
//     display: flex;
//   }

//   .product > img {
//     max-height: 200px;
//     width: 100%;
//     object-fit: contain;
//     margin-bottom: 15px;
//   }

//   .product > button {
//     background: #f0c14b;
//     border: 1px solid;
//     margin-top: 10px;
//     border-color: #a88734 #9c7e31 #846a29;
//     color: #111;
//   }

//   .product__price {
//     margin-top: 5px;
//   }

//   .product__info {
//     height: 100px;
//     margin-bottom: 15px;
//   }
//   `;
