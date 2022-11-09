import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  margin-top: 8px;
  margin-bottom: 32px;

  min-height: 50px;
  max-height: 50px;
  width: 100%;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  align-items: center;
  justify-content: center;

  flex-direction: row;
  gap: 8px;
`;

export const Icon = styled(AntDesign).attrs(({ theme }) => ({
  size: 14,
  color: theme.COLORS.WHITE,
}))`
  padding-right: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
