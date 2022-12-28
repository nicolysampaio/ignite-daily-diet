import { useRoute, useNavigation, Route } from "@react-navigation/native";

import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  Title,
} from "./styles";

import { FormEdit } from "@components/FormEdit";

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
        <FormEdit meal={id} />
      </Content>
    </Container>
  );
}
