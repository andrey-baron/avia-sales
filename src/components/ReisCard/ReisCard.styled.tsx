import styled from "styled-components";

const Text = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
`;
export const Price = styled(Text)`
  color: #2196f3;
  font-size: 24px;
`;
export const Logo = styled.img`
  /* background: black; */
  float: right;
  width: 120px;
  height: 40px;
`;

export const Label = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  color: #a0b0b9;
`;
export const Value = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  color: #4a4a4a;
`;
