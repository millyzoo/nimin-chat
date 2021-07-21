import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { MEDIA_QUERY_SM } from '../../constants/breakpoint';
import { Wrapper, SubmitButton } from '../../constants/mainStyle';
import { AuthContext } from '../../contexts'

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

const AvatarContainer = styled.div`
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

const Avatar = styled.div`
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.background};
  border-radius: 50%;
`

export default function HomePage() {
  const [errorMessages, setErrorMessages] = useState("");
  const [currentUser, setCurrentUser] = useState({
    username: "",
    avatar: "",
  });
  const { setIsUserLogin } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (!currentUser.username && !currentUser.avatar) {
      setErrorMessages('資料填寫不齊全')
      return
    } else if (!currentUser.username) {
      setErrorMessages('尚未填寫名字')
      return
    } else if (!currentUser.avatar) {
      setErrorMessages('尚未選擇頭貼')
      return
    }
    setErrorMessages("")
    setIsUserLogin(true)
    history.push("/mode");
  }

  const handleUsernameChange = e => {
    switch (e.target.name) {
      case "username":
        setCurrentUser({
          ...currentUser,
          username: e.target.value,
        })
        setErrorMessages("")
        break;
      case "avatar":
        setCurrentUser({
          ...currentUser,
          avatar: e.target.value
        })
        setErrorMessages("")
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>NIMIN CHAT</Title>
        <InputContainer>
          <label htmlFor="username">
            名字
            {errorMessages && <InputErrorText>{errorMessages}</InputErrorText>}
          </label>
          <Input id="username" name="username" placeholder="請填寫名字" onChange={handleUsernameChange} />
        </InputContainer>
        <p>選擇頭貼</p>
        <AvatarContainer>
          <Option htmlFor="option1">
            <Avatar background="#e0969b" />
            <input type="radio" name="avatar" id="option1" value="#e0969b" onChange={handleUsernameChange} />
            <OptionButton />
          </Option>
          <Option htmlFor="option2">
            <Avatar background="#b59a92" />
            <input type="radio" name="avatar" id="option2" value="#b59a92" onChange={handleUsernameChange} />
            <OptionButton />
          </Option>
          <Option htmlFor="option3">
            <Avatar background="#77bce2" />
            <input type="radio" name="avatar" id="option3" value="#77bce2" onChange={handleUsernameChange} />
            <OptionButton />
          </Option>
          <Option htmlFor="option4">
            <Avatar background="#93a5d2" />
            <input type="radio" name="avatar" id="option4" value="#93a5d2" onChange={handleUsernameChange} />
            <OptionButton />
          </Option>
        </AvatarContainer>
        <SubmitButton type="submit" value="進入聊天室" />
      </Form>
    </Wrapper>
  );
}