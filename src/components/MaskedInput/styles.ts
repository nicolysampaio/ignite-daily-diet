import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 6px;
  height: 42px;
  padding: 4px 14px;
  border-radius: 6px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
  justify-content: center;
`;