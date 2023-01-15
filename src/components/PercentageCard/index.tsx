import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Percent,
  Container,
  PercentCardStyleProps,
  Subtitle,
  IconContainer,
  Icon,
} from "./styles";

type Props = TouchableOpacityProps & {
  withinDiet: number;
  total: number;
  type?: PercentCardStyleProps;
  icon: keyof typeof Feather.glyphMap;
};

export function PercentageCard({
  withinDiet,
  total,
  type = "PRIMARY",
  icon,
  ...rest
}: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container type={type} {...rest}>
      <IconContainer onPress={handleGoBack}>
        <Icon type={type} />
      </IconContainer>

      <Percent>{((withinDiet / total) * 100).toFixed(2)}%</Percent>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
