import { useRoute, useNavigation, Route } from "@react-navigation/native";

import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  Title,
} from "./styles";

import { Form } from "@components/Form";

type RouteParams = {
  id: string;
};

export function EditMeal() {
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>

        <Title>Editar refeição</Title>
      </Header>

      <Content>
        <Form type="EDIT" mealDescription={id} mealTime="08:00" />
      </Content>
    </Container>
  );
}
