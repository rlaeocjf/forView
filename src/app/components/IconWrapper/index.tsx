import React, { memo } from "react";
import styled from "styled-components";

interface IIconsWrapper {
  children: import("react").ReactNode;
  size: number;
  color: string;
}
export const IconWrapper = memo(({ children, size, color }: IIconsWrapper) => (
  <StypedIconWrapper width={size} height={size} color={color}>
    {children}
  </StypedIconWrapper>
));
const StypedIconWrapper = styled.div<{
  width: number;
  height: number;
  color: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ color }) => color};
`;
export default IconWrapper;
