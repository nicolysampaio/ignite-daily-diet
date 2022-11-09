import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

interface InputProps {
  textArea: boolean;
}

export const Container = styled(TextInput)<InputProps>`
  width: 100%;

  border-radius: 6px;

  margin-bottom: 24px;

  ${({ theme, textArea }) => css`
    height: ${textArea ? "122px" : "42px"};
    padding: ${textArea ? "16px 14px" : "4px 14px"};
    border: 1px solid ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
