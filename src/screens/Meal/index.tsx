import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";

import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  Content,
  Name,
  Description,
  DateAndTimeTitle,
  DateAndTime,
  Tag,
  TagColor,
  TagTile,
} from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Modal } from "@components/Modal";
import { useState } from "react";

type RouteParams = {
  id: string;
};

export function Meal() {
  const meal = {
    insideDiet: true,
    name: "Sanduíche",
    description:
      "Sanduíche de pão integral com atum e salada de alface e tomate",
    date: "12/08/2022",
    time: "16:00",
  };

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const route = useRoute();
  const { id } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleEditMeal(id: string) {
    navigation.navigate("editMeal", { id });
  }

  function handleCloseModal() {
    setModalIsVisible(false);
  }

  function handleDeleteMeal(id: string) {
    console.log(`refeição ${id} excluída`);
    navigation.navigate("home");
  }

  return (
    <>
      <Container insideDiet={meal.insideDiet}>
        <Header>
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>

          <Title>Refeição</Title>
        </Header>

        <Content>
          <View>
            <Name>
              {id} - {meal.name}
            </Name>
            <Description>{meal.description}</Description>

            <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
            <DateAndTime>
              {meal.date} às {meal.time}
            </DateAndTime>

            <Tag insideDiet={meal.insideDiet}>
              <TagColor insideDiet={meal.insideDiet} />
              <TagTile>
                {meal.insideDiet === true ? "dentro da dieta" : "fora da dieta"}
              </TagTile>
            </Tag>

            <Modal
              isVisible={modalIsVisible}
              handleCloseModal={handleCloseModal}
              handleDeleteMeal={() => handleDeleteMeal(id)}
            />
          </View>

          <View>
            <ButtonIcon
              title="Editar refeição"
              icon="edit"
              onPress={() => handleEditMeal(id)}
            />
            <ButtonIcon
              type="SECONDARY"
              title="Excluir refeição"
              icon="delete"
              onPress={() => setModalIsVisible(true)}
            />
          </View>
        </Content>
      </Container>
    </>
  );
}
