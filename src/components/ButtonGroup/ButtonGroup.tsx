import React from "react";
import { ButtonGroupStyled } from "./ButtonGroup.styled";
import Button from "../Button/Button";

const ButtonGroup: React.FC = () => {
  return (
    <ButtonGroupStyled>
      <Button type="primary" title="Самый дешевый"></Button>
      <Button title="Самый быстрый"></Button>
      <Button title="Оптимальный"></Button>
    </ButtonGroupStyled>
  );
};

export default ButtonGroup;
