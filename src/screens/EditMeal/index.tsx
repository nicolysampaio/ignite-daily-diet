import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  Title,
} from "./styles";

import { Form } from "@components/Form";

export function EditMeal() {
  return (
    <Container>
      <Header>
        <BackButton>
          <BackIcon />
        </BackButton>

        <Title>Editar refeição</Title>
      </Header>

      <Content>
        <Form type="EDIT" mealDescription="08:00" mealTime="08:00" />
      </Content>
    </Container>
  );
}
