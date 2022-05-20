import React, { useState } from "react";
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox, Label } from "./Checkbox.styled";

interface CheckboxProps {
  checked: boolean;
  nestedProps?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, nestedProps }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...nestedProps} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 12 8" width="12" height="8">
          <path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" />
        </Icon>
      </StyledCheckbox>
      <Label>1 пересадка</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
