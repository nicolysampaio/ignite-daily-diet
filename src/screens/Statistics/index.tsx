import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";

import {
  BackButton,
  BackIcon,
  Card,
  Container,
  Content,
  Details,
  DietCard,
  Header,
  Number,
  WithinDietCard,
  OffDietCard,
  StatisticsStyleProps,
  Subtitle,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  type?: StatisticsStyleProps;
};

export function Statistics({ type = "PRIMARY" }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container type={type}>
      <Header>
        <BackButton onPress={handleGoBack}>
          <BackIcon type={type} />
        </BackButton>
        <Details>
          <Number>90,86%</Number>
          <Subtitle>das refeições dentro da dieta</Subtitle>
        </Details>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>
        <Card>
          <Number>22</Number>
          <Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
        </Card>
        <Card>
          <Number>109</Number>
          <Subtitle>refeições regitradas</Subtitle>
        </Card>

        <DietCard>
          <WithinDietCard>
            <Number>99</Number>
            <Subtitle>refeições dentro da dieta</Subtitle>
          </WithinDietCard>
          <OffDietCard>
            <Number>10</Number>
            <Subtitle>refeições fora da dieta</Subtitle>
          </OffDietCard>
        </DietCard>
      </Content>
    </Container>
  );
}
