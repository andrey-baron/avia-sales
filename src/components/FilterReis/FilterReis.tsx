import React from "react";
import Input from "../Input/Input";
import { FilterWrapper } from "./FilterReis.styled";

const FilterReis: React.FC = () => {
  return (
    <FilterWrapper>
      <Input placeholder="Откуда"></Input>
      <Input placeholder="Куда"></Input>
      <Input placeholder="Когда" type="date"></Input>
      <Input placeholder="Обратно" type="date"></Input>
    </FilterWrapper>
  );
};
export default FilterReis;
