import styled, { css } from "styled-components/native";

interface InsideDietButtonStylesProps {
  insideDiet: boolean;
  isActive?: boolean;
}

interface InsideDietButtonTagStyleProps {
  insideDiet: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;

  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}

  margin-bottom: 4px;
`;

export const Group = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const InputGroup = styled.View`
  width: 47%;
`;

export const InsideDietButton = styled.TouchableOpacity<InsideDietButtonStylesProps>`
  width: 49%;
  height: 50px;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border-width: 1px;

  ${({ theme, insideDiet, isActive }) => css`
    background-color: ${isActive === false
      ? theme.COLORS.GRAY_200
      : insideDiet === true
      ? theme.COLORS.GREEN_300
      : theme.COLORS.RED_300};

    border-color: ${isActive === false
      ? theme.COLORS.GRAY_200
      : insideDiet === true
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_700};
  `};
`;

export const InsideDietButtonTag = styled.TouchableOpacity<InsideDietButtonTagStyleProps>`
  width: 8px;
  height: 8px;

  margin-right: 8px;

  border-radius: 100px;

  ${({ theme, insideDiet }) => css`
    background-color: ${insideDiet === true
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_700};
  `};
`;

export const InsideDietButtonLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
