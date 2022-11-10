import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type ButtonIconStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  margin-top: 8px;

  min-height: 50px;
  max-height: 50px;
  width: 100%;

  border-radius: 6px;

  align-items: center;
  justify-content: center;

  flex-direction: row;
  gap: 8px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_600
      : theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_700};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 16,
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))`
  padding-right: 8px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `}
`;
