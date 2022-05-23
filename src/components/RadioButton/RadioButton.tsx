import React, { useState } from "react";
import { RadioButtonContainer, HiddenRadioButton, Icon, StyledRadioButton, Label } from "./RadioButton.styled";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const RadioButton: React.FC<InputProps> = props => {
  return (
    <RadioButtonContainer>
      <HiddenRadioButton {...{ ...props, type: "radio" }} />
      <StyledRadioButton checked={props.checked}>
        <Icon width="12" height="12" viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="6" fill="#2196F3" />
        </Icon>
      </StyledRadioButton>
      <Label>1 пересадка</Label>
    </RadioButtonContainer>
  );
};

export default RadioButton;
