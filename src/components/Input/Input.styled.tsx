import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 15px 20px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #4a4a4a;
  background: #fff;
  width: 100%;
  transition: all 0.3s;
  margin: 0 1px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border: 0;
  &:first-of-type {
    border-radius: 5px 0px 0px 5px;
    margin-left: 0;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
    margin-right: 0;
  }

  /* box-shadow: 0px 0px 0px 2px #ff6f32; */
  &:focus {
    border-color: #ff6f32;
    box-shadow: 0px 0px 0px 2px #ff6f32;
    border-right-width: 1px;
    outline: 0;
  }
`;
