import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { NavLink} from 'react-router-dom'
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 60px;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black
`;




const Navbar = () => {


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <nav>
        <NavLink to="/">
        <Center>
          <Logo>ReactCo</Logo>
        </Center>
        </NavLink>
        </nav>

        <Right>
          <nav>
          <NavLink to="/Register">
          <MenuItem>REGISTER</MenuItem>
          </NavLink>
          </nav>

          <nav>
          <NavLink to="/Login">
          <MenuItem>SIGN IN</MenuItem>
          </NavLink>
          </nav>
          <nav>
          <NavLink to="/Cart">
          <MenuItem>
            <Badge color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </NavLink>
          </nav>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;