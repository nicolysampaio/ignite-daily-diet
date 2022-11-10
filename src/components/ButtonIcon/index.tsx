import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonIconStyleProps;
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ type = "PRIMARY", title, icon, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} name={icon} />
      <Title type={type}>{title}</Title>
    </Container>
  );
}
