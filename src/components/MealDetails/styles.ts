import styled, { css } from "styled-components/native";
import { View } from "react-native";

export type TagTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: TagTypeStyleProps;
};

export const Container = styled.TouchableOpacity`
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 12px;
  margin-bottom: 8px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Title = styled.Text`
  width: 70%;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Tag = styled(View)<Props>`
  width: 14px;
  height: 14px;

  border-radius: 100px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
`;
