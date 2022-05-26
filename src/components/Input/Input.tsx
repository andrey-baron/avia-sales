import React from "react";
import { InputStyled } from "./Input.styled";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input: React.FC<InputProps> = props => {
  return <InputStyled {...props} />;
};

export default Input;
