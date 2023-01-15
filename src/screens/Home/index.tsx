import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
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
import { datesGetAll } from "@storage/date/datesGetAll";
import { DateStorageDTO } from "@storage/date/DateStorageDTO";

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
        withinDiet: false,
      },
      {
        id: "1",
        name: "Salada",
        description: "Descrição da refeição",
        date: "12.10.22",
        hour: "08:00",
        withinDiet: true,
      },
      {
        id: "2",
        name: "Vitamina",
        description: "Descrição da refeição",
        date: "12.10.22",
        hour: "12:00",
        withinDiet: true,
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
        withinDiet: false,
      },
      {
        id: "4",
        name: "Salada",
        description: "Descrição da refeição",
        date: "13.10.22",
        hour: "08:00",
        withinDiet: true,
      },
      {
        id: "5",
        name: "Vitamina",
        description: "Descrição da refeição",
        date: "13.10.22",
        hour: "12:00",
        withinDiet: true,
      },
    ],
  },
];

export function Home() {
  const [meals, setMeals] = useState<DateStorageDTO[]>([]);

  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate("statistics");
  }

  function handleCreateMeal() {
    navigation.navigate("createOrEditMeal", {type: "add"});
  }

  function handleOpenMeal(id: string) {
    navigation.navigate("meal", { id });
  }

  async function fetchMeals() {
    try {
      const data = await datesGetAll();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>

      <PercentageCard
        icon="arrow-up-right"
        withinDiet={5}
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
