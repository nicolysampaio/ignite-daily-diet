import { TouchableOpacityProps } from "react-native";

import { Container, Tag, Time, Title } from "./styles";

type Props = TouchableOpacityProps & {
  meal: {
    id: string;
    hour: string;
    name: string;
    insideDiet: boolean;
  };
};

export function MealDetails({
  meal: { id, hour, name, insideDiet },
  ...rest
}: Props) {
  return (
    <Container>
      <Time>{hour}</Time>
      <Title>{name}</Title>
      <Tag insideDiet={insideDiet} />
    </Container>
  );
}
