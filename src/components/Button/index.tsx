import { TouchableOpacityProps } from "react-native";

import { ButtonStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonStyleProps;
  title: string;
};

export function Button({ type = "PRIMARY", title, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
