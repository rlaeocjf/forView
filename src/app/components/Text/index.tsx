import React, { memo } from "react";
import styled from "styled-components";

interface IText {
  children: import("react").ReactNode;
  size?: number;
  color?: string;
  weight?: string;
  marginTop?: number;
  marginRight?: number;
}

export const Text = memo(
  ({ children, size, color, weight, marginTop, marginRight }: IText) => {
    return (
      <StyledText
        size={size}
        weight={weight}
        color={color}
        marginTop={marginTop}
        marginRight={marginRight}
      >
        {children}
      </StyledText>
    );
  }
);
const StyledText = styled.div<{
  color?: string;
  weight?: string;
  size?: number;
  marginTop?: number;
  marginRight?: number;
}>`
  color: ${({ color }) => (color ? `${color}` : "#FFF")};
  font-weight: ${({ weight }) => (weight ? `${weight}` : "400")};
  font-size: ${({ size }) => (size ? `${size}px` : "17px")};
  ${({ marginTop }) =>
    marginTop &&
    `
    margin-top:${marginTop}px`}
  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right:${marginRight}px`}
`;
export default Text;
