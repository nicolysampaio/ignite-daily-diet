import { TouchableOpacityProps } from "react-native";

import { Container, Tag, TagTypeStyleProps, Time, Title } from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  title: string;
  type: TagTypeStyleProps;
};

export function MealDetails({ time, title, type, ...rest }: Props) {
  return (
    <Container>
      <Time>{time}</Time>
      <Title>{title}</Title>
      <Tag type={type} />
    </Container>
  );
}
