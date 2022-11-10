import { MaskedTextInput, MaskedTextInputProps } from "react-native-mask-text";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface InputProps extends MaskedTextInputProps {}

export function MaskedInput({ ...props }: InputProps) {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  return (
    <Container>
      <MaskedTextInput
        {...props}
        style={{
          color: COLORS.GRAY_700,
          fontSize: FONT_SIZE.LG,
          fontFamily: FONT_FAMILY.REGULAR,
        }}
      />
    </Container>
  );
}
