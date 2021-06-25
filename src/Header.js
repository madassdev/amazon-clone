import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue()
  return (

    <Container>
      <Link to="/">
        <Logo src="/amazon_PNG11.png" />
      </Link>

      <Search>
        <input type="text" />
        <SearchIcon className="search_icon" />
      </Search>

      <Nav>
        <NavOption>
          <p>Hello</p>
          <span>Sign In</span>
        </NavOption>
        <NavOption>
          <p>Returns</p>
          <span>&amp; Orders</span>
        </NavOption>
        <NavOption>
          <p>Your</p>
          <span>Prime</span>
        </NavOption>
        <Link to="/checkout">
          <BasketOption>
            <ShoppingBasketIcon />
            <span className="basket_count">{basket?.length}</span>
          </BasketOption>
        </Link>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

const Search = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
  input {
    height: 12px;
    padding: 10px;
    width: 100%;
  }
  .search_icon {
    padding: 5px;
    height: 22px !important;
    background: #cd9042;
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const NavOption = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  p {
    font-size: 10px;
  }
  span {
    font-size: 13px;
    font-weight: 800;
  }
`;

const BasketOption = styled.div`
  display: flex;
  align-items: center;
  color: white;
  .basket_count {
    font-size: 13px;
    font-weight: 800;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default Header;
