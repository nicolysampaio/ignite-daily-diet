import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type MealStyleProps = boolean;

type Props = {
  insideDiet: MealStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;

  background-color: ${({ theme, insideDiet }) =>
    insideDiet === true ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`;

export const Header = styled.View`
  width: 64%;
  height: 104px;

  flex-direction: row;
  justify-content: center;
  align-items: space-between;

  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 24px;

  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 20px;

  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Description = styled.Text`
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DateAndTimeTitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DateAndTime = styled.Text`
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Tag = styled.View<Props>`
  height: 34px;

  border-radius: 100px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  ${({ theme, insideDiet }) => css`
    width: ${insideDiet === true ? "144px" : "128px"};
    background-color: ${theme.COLORS.GRAY_200};
  `}
`;

export const TagColor = styled.View<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;

  border-radius: 100px;

  background-color: ${({ theme, insideDiet }) =>
    insideDiet === true ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`;

export const TagTile = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
