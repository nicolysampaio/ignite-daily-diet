import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;
  width: 100%;

  border-radius: 6px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_600
      : theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_700};
  `}

  align-items: center;
  justify-content: center;

  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `}
`;
