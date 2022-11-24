import { SectionList } from "react-native";

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

import { PercentageCard } from "@components/PercentageCard";
import { Button } from "@components/Button";
import { MealDetails } from "@components/MealDetails";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    date: "12.10.22",
    data: [
      {
        id: "0",
        name: "X-tudo",
        description: "Descrição da refeição",
        date: "12.10.22",
        hour: "20:00",
        insideDiet: false,
      },
      {
        id: "1",
        name: "Salada",
        description: "Descrição da refeição",
        date: "12.10.22",
        hour: "08:00",
        insideDiet: true,
      },
      {
        id: "2",
        name: "Vitamina",
        description: "Descrição da refeição",
        date: "12.10.22",
        hour: "12:00",
        insideDiet: true,
      },
    ],
  },
  {
    date: "13.10.22",
    data: [
      {
        id: "3",
        name: "X-tudo",
        description: "Descrição da refeição",
        date: "13.10.22",
        hour: "20:00",
        insideDiet: false,
      },
      {
        id: "4",
        name: "Salada",
        description: "Descrição da refeição",
        date: "13.10.22",
        hour: "08:00",
        insideDiet: true,
      },
      {
        id: "5",
        name: "Vitamina",
        description: "Descrição da refeição",
        date: "13.10.22",
        hour: "12:00",
        insideDiet: true,
      },
    ],
  },
];

export function Home() {
  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate("statistics");
  }

  function handleCreateMeal() {
    navigation.navigate("createMeal");
  }

  function handleOpenMeal(id: string) {
    navigation.navigate("meal", { id });
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>

      <PercentageCard
        icon="arrow-up-right"
        insideDiet={5}
        total={6}
        onPress={handleOpenStatistics}
      />

      <Title>Refeições</Title>
      <Button title="Nova refeição" onPress={handleCreateMeal} />

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealDetails meal={item} onPress={() => handleOpenMeal(item.id)} />
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
