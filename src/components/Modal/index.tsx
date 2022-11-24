import { Modal as RNModal } from "react-native";
import { Container, Content, Title } from "./styles";

import { Button } from "@components/Button";
import { useState } from "react";

interface Props {
  isVisible: boolean;
  handleCloseModal: () => void;
  handleDeleteMeal: () => void;
}

export function Modal({
  isVisible,
  handleCloseModal,
  handleDeleteMeal,
}: Props) {

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
              onPress={handleCloseModal}
            />
            <Button
              title="Sim, excluir"
              style={{ width: "48%" }}
              onPress={handleDeleteMeal}
            />
          </Content>
        </Container>
      </RNModal>
    </Container>
  );
}
