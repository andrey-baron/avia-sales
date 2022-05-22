import styled, { css } from "styled-components";

export interface IButtonType {
  type?: "default" | "primary";
}
export const ButtonStyled = styled.div<IButtonType>`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  padding: 14px 20px;
  text-transform: uppercase;
  flex-grow: 1;
  cursor: pointer;
  ${props => {
    switch (props.type) {
      case "default":
        return css`
          background: #fff;
          color: #4a4a4a;
          border: 1px solid #dfe5ec;
        `;
      case "primary":
        return css`
          background: #2196f3;
          color: #fff;
          border: 1px solid #2196f3;
        `;
    }
  }};
  &:hover {
    background: #f1fcff;
    color: #4a4a4a;
    border: 1px solid #dfe5ec;
  }
  &:nth-child(2) {
    border-left: 0;
    border-right: 0;
  }
`;
