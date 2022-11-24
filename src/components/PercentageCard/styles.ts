import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ArrowUpRight } from 'phosphor-react-native';

export type PercentCardStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: PercentCardStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 102px;

  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};

  align-items: center;
  padding: 4px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-self: flex-end;
  justify-self: flex-start;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700,
}))``;

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;
