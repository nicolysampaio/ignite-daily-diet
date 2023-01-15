import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export type StatisticsStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StatisticsStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`;

export const Header = styled.View`
  width: 100%;
  height: 134px;

  padding-bottom: 34px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  margin-left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700,
}))``;

export const Details = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
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

export const Content = styled.View`
  flex: 1;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 24px;
  margin-bottom: -100px;

  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Card = styled.View`
  margin-bottom: 12px;
  padding: 16px;

  height: 90px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const DietCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WithinDietCard = styled(Card)`
  height: 110px;
  width: 50%;

  margin-right: 6px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_300};
`;

export const OffDietCard = styled(Card)`
  width: 50%;
  height: 110px;

  margin-left: 6px;

  background-color: ${({ theme }) => theme.COLORS.RED_300};
`;
