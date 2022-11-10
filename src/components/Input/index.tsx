import { TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = TextInputProps & {
  isTextArea?: boolean;
};

export function Input({ isTextArea = false, ...rest }: Props) {
  return <Container textArea={isTextArea} {...rest} />;
}
