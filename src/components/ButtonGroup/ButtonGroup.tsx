import React from "react";
import { ButtonGroupStyled } from "./ButtonGroup.styled";
import Button from "../Button/Button";
import { SortType } from "../../Contracts";

interface ButtonGroupProps {
  sortType: SortType;
  onChangeType: (value: SortType) => void;
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({ sortType, onChangeType }) => {
  return (
    <ButtonGroupStyled>
      {}
      <Button {...(sortType === "Cheap" ? { type: "primary" } : "")} onClick={() => onChangeType("Cheap")} title="Самый дешевый"></Button>
      <Button {...(sortType === "Fast" ? { type: "primary" } : "")} onClick={() => onChangeType("Fast")} title="Самый быстрый"></Button>
      <Button {...(sortType === "Optimal" ? { type: "primary" } : "")} onClick={() => onChangeType("Optimal")} title="Оптимальный"></Button>
    </ButtonGroupStyled>
  );
};

export default ButtonGroup;
