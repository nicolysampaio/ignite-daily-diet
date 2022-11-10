import { Form } from "@components/Form";

import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  Title,
} from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header>
        <BackButton>
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
