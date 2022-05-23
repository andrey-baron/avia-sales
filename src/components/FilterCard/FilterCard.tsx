import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import { Heading, FilterCardStyled } from "./FilterCard.styled";

interface FilterCardProps {
  controlType: "radio" | "checkbox";
}

const FilterCard: React.FC<FilterCardProps> = props => {
  const [checked, setChecked] = useState(true);
  const handleCheckboxChange = (e: any) => {
    // setChecked(value);
  };
  return (
    <FilterCardStyled>
      {props.controlType === "radio" ? (
        <>
          <Heading>Количество пересадок</Heading>
          <RadioButton checked={true} onChange={handleCheckboxChange} />
          <RadioButton checked={true} onChange={handleCheckboxChange} />
          <RadioButton checked={false} onChange={handleCheckboxChange} />
        </>
      ) : (
        <>
          <Heading>Количество пересадок</Heading>
          <Checkbox checked={true} onChange={handleCheckboxChange} />
          <Checkbox checked={true} onChange={handleCheckboxChange} />
          <Checkbox checked={false} onChange={handleCheckboxChange} />
        </>
      )}
    </FilterCardStyled>
  );
};

export default FilterCard;
