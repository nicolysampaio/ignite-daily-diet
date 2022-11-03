import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Icon,
  Percent,
  PercentCard,
  PercentCardStyleProps,
  Subtitle,
} from "./styles";

type Props = TouchableOpacityProps & {
  inDiet: number;
  total: number;
  type?: PercentCardStyleProps;
  icon: keyof typeof Feather.glyphMap;
};

export default function PercentageCard({
  inDiet,
  total,
  type = "PRIMARY",
  icon,
  ...rest
}: Props) {
  return (
    <PercentCard type={type}>
      <Icon name={icon} type={type} />
      <Percent>{((inDiet / total) * 100).toFixed(2)}%</Percent>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </PercentCard>
  );
}
