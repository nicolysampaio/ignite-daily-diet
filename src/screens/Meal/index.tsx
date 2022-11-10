import { View } from "react-native";
import {
  MealStyleProps,
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

type Props = {
  insideDiet?: MealStyleProps;
  name?: string;
  description?: string;
  date?: string;
  time?: string;
};

export function Meal({
  insideDiet = true,
  name = "Sanduíche",
  description = "Sanduíche de pão integral com atum e salada de alface e tomate",
  date = "12/08/2022",
  time = "16:00",
}: Props) {
  return (
    <>
      <Container insideDiet={insideDiet}>
        <Header>
          <BackButton>
            <BackIcon />
          </BackButton>

          <Title>Refeição</Title>
        </Header>

        <Content>
          <View>
            <Name>{name}</Name>
            <Description>{description}</Description>

            <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
            <DateAndTime>
              {date} às {time}
            </DateAndTime>

            <Tag insideDiet={insideDiet}>
              <TagColor insideDiet={insideDiet} />
              <TagTile>
                {insideDiet === true ? "dentro da dieta" : "fora da dieta"}
              </TagTile>
            </Tag>

            <Modal />
          </View>

          <View>
            <ButtonIcon title="Editar refeição" icon="edit" />
            <ButtonIcon
              type="SECONDARY"
              title="Excluir refeição"
              icon="delete"
            />
          </View>
        </Content>
      </Container>
    </>
  );
}
