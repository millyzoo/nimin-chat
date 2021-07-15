import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SM } from "../../constants/breakpoint";
import { Wrapper } from "../../constants/mainStyle";

const Form = styled.form`
  padding: 40px;
  width: 400px;
  background-color: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.05);

  ${MEDIA_QUERY_SM} {
    width: 90%;
  }
`

const Title = styled.h1`
  margin-bottom: 40px;
  color: #00b9a3;
  font-size: 1.875rem;
  font-weight: 900;
  text-align: center;
`

const InputContainer = styled.div`
  margin: 0 0 30px 0;
`

const InputErrorText = styled.span`
  margin-left: 20px;
  color: #d62f39;
`

const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  color: #505050;
  background-color: #ffffff;
  transition: all 0.3s;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    border: 1px solid #00b9a3;
  }
`

const OptionContainer = styled.div`
  display: flex;
  margin: 10px 0 30px 0;
`

const OptionButton = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border: 2px solid #aaaaaa;
  border-radius: 50%;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #aaaaaa;
    transition: all 0.3s;
    opacity: 0;
  }
`

const Option = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 30px;
  }

  input:checked + ${OptionButton}::after {
    opacity: 1;
  }
`

const OptionImage = styled.div`
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.background};
  border-radius: 50%;
`

const SubmitButton = styled.input`
  padding: 12px;
  border-radius: 50px;
  width: 100%;
  border: none;
  background-color: #00b9a3;
  color: #ffffff;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #00ad98;
  }
`

export default function HomePage() {

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>NIMIN CHAT</Title>
        <InputContainer>
          <label htmlFor="name">
            名字
            <InputErrorText>請輸入五個字以內</InputErrorText>
          </label>
          <Input id="name" placeholder="請輸入名字" />
        </InputContainer>
        <p>選擇頭貼</p>
        <OptionContainer>
          <Option htmlFor="option1">
            <OptionImage background="#e0969b" />
            <input type="radio" name="user-photo" id="option1" />
            <OptionButton />
          </Option>
          <Option htmlFor="option2">
            <OptionImage background="#b59a92" />
            <input type="radio" name="user-photo" id="option2" />
            <OptionButton />
          </Option>
          <Option htmlFor="option3">
            <OptionImage background="#77bce2" />
            <input type="radio" name="user-photo" id="option3" />
            <OptionButton />
          </Option>
          <Option htmlFor="option4">
            <OptionImage background="#93a5d2" />
            <input type="radio" name="user-photo" id="option4" />
            <OptionButton />
          </Option>
        </OptionContainer>
        <SubmitButton type="submit" value="進入聊天室" />
      </Form>
    </Wrapper>
  );
}