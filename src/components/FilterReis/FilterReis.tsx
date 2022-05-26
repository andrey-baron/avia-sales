import React from "react";
import Input from "../Input/Input";
import { FilterWrapper } from "./FilterReis.styled";

interface FilterReisProps {
  onChangeOrigin: (value: string) => void;
  onChangeDestination: (value: string) => void;
  onChangeDateStart: (value: string) => void;
  onChangeDateEnd: (value: string) => void;
}
const FilterReis: React.FC<FilterReisProps> = ({ onChangeOrigin, onChangeDestination, onChangeDateStart, onChangeDateEnd }) => {
  return (
    <FilterWrapper>
      <Input placeholder="Откуда" onChange={e => onChangeOrigin(e.currentTarget.value)} />
      <Input placeholder="Куда" onChange={e => onChangeDestination(e.currentTarget.value)} />
      <Input placeholder="Когда" type="date" onChange={e => onChangeDateStart(e.currentTarget.value)} />
      <Input placeholder="Обратно" type="date" onChange={e => onChangeDateEnd(e.currentTarget.value)} />
    </FilterWrapper>
  );
};
export default FilterReis;
