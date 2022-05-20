import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import { Heading, FilterCardStyled } from "./FilterCard.styled";

interface FilterCardProps {
  controlType: "radio" | "checkbox";
}

const FilterCard: React.FC<FilterCardProps> = props => {
  return (
    <FilterCardStyled>
      {props.controlType === "radio" ? (
        <>
          <Heading>Количество пересадок</Heading>
          <RadioButton checked={true} />
          <RadioButton checked={true} />
          <RadioButton checked={false} />
        </>
      ) : (
        <>
          <Heading>Количество пересадок</Heading>
          <Checkbox checked={true} />
          <Checkbox checked={true} />
          <Checkbox checked={false} />
        </>
      )}
    </FilterCardStyled>
  );
};

export default FilterCard;
