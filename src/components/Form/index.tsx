import { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MaskedInput } from "@components/MaskedInput";

import { dateCreate } from "@storage/date/dateCreate";

import {
  Container,
  Group,
  InputGroup,
  WithinDietButton,
  WithinDietButtonLabel,
  WithinDietButtonTag,
  Label,
} from "./styles";

export function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [withinDiet, setWithinDiet] = useState<boolean>();

  const navigation = useNavigation();

  async function handleNewMeal() {
    try {
      //await dateCreate(name);
      navigation.navigate("feedback", { withinDiet });
    } catch (error) {
      throw error;
    }
  }

  return (
    <Container>
      <View>
        <Label>Nome</Label>
        <Input value={name} onChangeText={setName} />

        <Label>Descrição</Label>
        <Input
          isTextArea={true}
          multiline={true}
          value={description}
          onChangeText={setDescription}
        />

        <Group>
          <InputGroup>
            <Label>Data</Label>
            <MaskedInput
              mask={"99/99/9999"}
              keyboardType="numeric"
              value={date}
              onChangeText={(text: string) => setDate(text)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Hora</Label>
            <MaskedInput
              mask={"99:99"}
              keyboardType="numeric"
              value={time}
              onChangeText={(text: string) => setTime(text)}
            />
          </InputGroup>
        </Group>

        <Label>Está dentro da dieta?</Label>
        <Group>
          <WithinDietButton
            withinDiet={true}
            isActive={withinDiet === true}
            onPress={() => setWithinDiet(true)}
          >
            <WithinDietButtonTag withinDiet={true} />
            <WithinDietButtonLabel>Sim</WithinDietButtonLabel>
          </WithinDietButton>

          <WithinDietButton
            withinDiet={false}
            isActive={withinDiet === false}
            onPress={() => setWithinDiet(false)}
          >
            <WithinDietButtonTag withinDiet={false} />
            <WithinDietButtonLabel>Não</WithinDietButtonLabel>
          </WithinDietButton>
        </Group>
      </View>
      <Button title="Cadastrar refeição" onPress={handleNewMeal} />
    </Container>
  );
}
