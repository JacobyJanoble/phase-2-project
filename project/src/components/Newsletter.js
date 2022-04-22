import { Send } from "@material-ui/icons";
import styled from "styled-components";

import {useState} from 'react'


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;

`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {

  const [emails, setEmail] = useState({email: ''})

  const handleChange = (e) => {

    setEmail({
      email: e.target.value,
    })
    console.log(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: emails.email
      }),
    };

    fetch('http://localhost:3000/emails', configObj)
    .then(resp => resp.json())
    .then((data) => {
      setEmail(data)
      setEmail("")
    })


  }



  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <form onSubmit={handleSubmit}>
      <InputContainer>
        <Input placeholder="Your email"
        text="text"
        onChange={handleChange}
        name="email"
        value={emails.email}
        />

        <Button type="submit">
          <Send />
        </Button>
      </InputContainer>
      </form>
    </Container>
  );
};

export default Newsletter;