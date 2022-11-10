import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  Title,
} from "./styles";

import { Form } from "@components/Form";

export function CreateMeal() {
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
