import styled from "styled-components";
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox, Label } from "./../Checkbox/Checkbox.styled";

interface IStyledRadioButtonProps {}
export const RadioButtonContainer = styled(CheckboxContainer)`
  display: flex;
  padding: 10px 20px;
  &:hover {
    transition: background 350ms;
    background: #f1fcff;
  }
`;

export const HiddenRadioButton = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledRadioButton = styled(StyledCheckbox)`
  border-radius: 50%;
`;

export { Label, Icon };
