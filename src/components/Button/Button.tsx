import React from "react";
import { ButtonStyled, IButtonType } from "./Button.styled";

interface IButton {
  title?: string;
}

const Button: React.FC<IButton & IButtonType> = ({ title, type }) => {
  return <ButtonStyled type={type ?? "default"}>{title}</ButtonStyled>;
};

export default Button;
