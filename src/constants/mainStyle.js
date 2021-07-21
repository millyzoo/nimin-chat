import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* 減去 footer + header */
`;

export const SubmitButton = styled.input`
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
`;
