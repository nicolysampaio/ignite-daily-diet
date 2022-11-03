import { SectionList, Text } from "react-native";

import {
  Container,
  Header,
  Logo,
  Profile,
  SectionHeader,
  Title,
} from "./styles";

import logoImg from "@assets/logo.png";
import profileImg from "@assets/profile.png";

import PercentageCard from "@components/PercentageCard";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";

const DATA = [
  {
    date: "12.10.22",
    data: [
      {
        time: "20:00",
        title: "X-tudo",
        type: "SECONDARY",
      },
      {
        time: "12:00",
        title: "Vitamina",
        type: "PRIMARY",
      },
      {
        time: "04:00",
        title: "Salada",
        type: "PRIMARY",
      },
    ],
  },
  {
    date: "13.10.22",
    data: [
      {
        time: "19:00",
        title: "X-tudo",
        type: "SECONDARY",
      },
      {
        time: "11:00",
        title: "Vitamina",
        type: "PRIMARY",
      },
      {
        time: "00:00",
        title: "Salada",
        type: "PRIMARY",
      },
    ],
  },
  {
    date: "14.10.22",
    data: [
      {
        time: "20:00",
        title: "X-tudo",
        type: "SECONDARY",
      },
      {
        time: "12:00",
        title: "Vitamina",
        type: "PRIMARY",
      },
      {
        time: "20:00",
        title: "Salada",
        type: "PRIMARY",
      },
    ],
  },
];

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>

      <PercentageCard icon="arrow-up-right" inDiet={5} total={6} />

      <Title>Refeições</Title>
      <Button title="Nova refeição" />

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <Meal time={item.time} title={item.title} type={item.type} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectionHeader>{date}</SectionHeader>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
