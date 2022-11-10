import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
`;

export const Content = styled.View`
  margin: 0 32px;
  padding: 24px;

  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_100};

  flex-wrap: wrap;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  width: 100%;
  margin: 4px 0;
  padding: 8px 4px 16px 4px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;
