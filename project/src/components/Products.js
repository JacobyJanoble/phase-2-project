
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import {useState, useEffect} from 'react';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/popularProducts')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setProduct(data)
    })
  }, [])

  return (
    <Container>
      {product.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;