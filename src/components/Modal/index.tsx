import { Modal as RNModal } from "react-native";
import { Container, Content, Title } from "./styles";

import { Button } from "@components/Button";

interface Props {
  isVisible?: boolean;
}

export function Modal({ isVisible = true }: Props) {
  return (
    <Container>
      <RNModal animationType="none" visible={isVisible} transparent={true}>
        <Container>
          <Content>
            <Title>Deseja realmente excluir o registro da refeição?</Title>

            <Button
              type="SECONDARY"
              title="Cancelar"
              style={{ width: "48%", marginRight: 8 }}
            />
            <Button title="Sim, excluir" style={{ width: "48%" }} />
          </Content>
        </Container>
      </RNModal>
    </Container>
  );
}
