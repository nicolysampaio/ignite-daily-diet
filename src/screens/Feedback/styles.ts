import styled, { css } from "styled-components/native";

interface InsideDietTitleStyleProps {
  insideDiet: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  justify-content: center;
  align-items: center;

  padding: 32px;
`;

export const Title = styled.Text<InsideDietTitleStyleProps>`
  margin-bottom: 8px;

  ${({ theme, insideDiet }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${insideDiet === true
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_700};
  `};
`;

export const Subtitle = styled.Text`
  text-align: center;

  margin-bottom: 40px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const SubtitleStrong = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;
`;

export const ButtonContainer = styled.View`
  padding-top: 32px;

  width: 190px;
`;
