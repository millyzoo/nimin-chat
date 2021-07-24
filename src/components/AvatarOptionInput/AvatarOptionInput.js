import React from "react";
import styled from "styled-components";

const Avatar = styled.div`
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.background};
  border-radius: 50%;
  cursor: pointer;
`;

const AvatarInput = styled.input`
  display: none;
  border: none;
`;

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
`;

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
`;

export default function AvatarOptionInput({
  id,
  background,
  handleUserInfoChange
}) {

  return (
    <>
      <Option htmlFor={id}>
        <Avatar background={background} />
        <AvatarInput
          type="radio"
          name="avatar"
          id={id}
          value={background}
          onChange={handleUserInfoChange}
        />
        <OptionButton />
      </Option>
    </>
  );
}
