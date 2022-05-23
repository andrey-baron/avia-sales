import React from "react";
import { ButtonStyled, IButtonType } from "./Button.styled";

interface IButton {
  title?: string;
  onClick?: () => void;
}

const Button: React.FC<IButton & IButtonType> = ({ title, type, onClick }) => {
  return (
    <ButtonStyled
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      type={type ?? "default"}>
      {title}
    </ButtonStyled>
  );
};

export default Button;
