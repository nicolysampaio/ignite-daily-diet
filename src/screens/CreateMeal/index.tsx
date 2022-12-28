import { useNavigation } from '@react-navigation/native';

import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  Title,
} from "./styles";

import { FormCreate } from "@components/FormCreate";

export function CreateMeal() {
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
        <FormCreate />
      </Content>
    </Container>
  );
}
