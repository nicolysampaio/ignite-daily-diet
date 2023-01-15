import { useNavigation } from '@react-navigation/native';

import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  Title,
} from "./styles";

import { Form } from "@components/Form";

export function CreateOrEditMeal() {
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

        <Title>Nova refeição</Title>
      </Header>

      <Content>
        <Form />
      </Content>
    </Container>
  );
}
