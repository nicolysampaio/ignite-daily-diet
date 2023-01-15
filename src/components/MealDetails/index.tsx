import { TouchableOpacityProps } from "react-native";

import { Container, Tag, Time, Title } from "./styles";

type Props = TouchableOpacityProps & {
  meal: {
    id: string;
    hour: string;
    name: string;
    withinDiet: boolean;
  };
};

export function MealDetails({
  meal: { id, hour, name, withinDiet },
  ...rest
}: Props) {
  return (
    <Container {...rest} >
      <Time>{hour}</Time>
      <Title>{name}</Title>
      <Tag withinDiet={withinDiet} />
    </Container>
  );
}
