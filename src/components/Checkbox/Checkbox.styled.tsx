import styled from "styled-components";

interface IStyledCheckboxProps {
  checked: boolean;
}

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  &:hover {
    transition: background 350ms;
    background: #f1fcff;
  }
`;

export const Icon = styled.svg`
  fill: #2196f3;
  stroke: #2196f3;
  /* stroke-width: 2px; */
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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

export const Label = styled.label`
  font-family: "Open Sans";
  margin-left: 10px;
  color: #4a4a4a;
  font-size: 13px;
`;

export const StyledCheckbox = styled.div<IStyledCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  /* background: ${props => (props.checked ? "salmon" : "papayawhip")}; */
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  border: 1px solid ${props => (props.checked ? "#2196F3" : "#9ABBCE")};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;
