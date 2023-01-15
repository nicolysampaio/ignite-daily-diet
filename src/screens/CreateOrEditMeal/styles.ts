import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  padding-right: 130px;
  padding-left: 24px;
  padding-bottom: 14px;

  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 24px;
  margin-bottom: -32px;

  align-items: center;
`;
