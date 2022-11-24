import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MaskedInput } from "@components/MaskedInput";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";

import {
  Container,
  Group,
  InputGroup,
  InsideDietButton,
  InsideDietButtonLabel,
  InsideDietButtonTag,
  Label,
} from "./styles";

type Props = {
  mealName?: string;
  mealDescription?: string;
  mealDate?: string;
  mealTime?: string;
  mealInsideDiet?: boolean;
  type?: "CREATE" | "EDIT";
};

export function Form({
  mealName,
  mealDescription,
  mealDate,
  mealTime,
  mealInsideDiet,
  type = "CREATE",
}: Props) {
  const [name, setName] = useState(mealName);
  const [description, setDescription] = useState(mealDescription);
  const [date, setDate] = useState(mealDate);
  const [time, setTime] = useState(mealTime);
  const [insideDiet, setInsideDiet] = useState<boolean>();

  const navigation = useNavigation();

  function handleSubmitMeal() {
    {
      type === "CREATE"
        ? navigation.navigate("feedback", { insideDiet })
        : navigation.navigate("home");
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
              onChangeText={(text: string) => console.log(text)}
              mask={"99/99/9999"}
              keyboardType="numeric"
              value={date}
            />
          </InputGroup>

          <InputGroup>
            <Label>Hora</Label>
            <MaskedInput
              onChangeText={(text: string) => console.log(text)}
              mask={"99:99"}
              keyboardType="numeric"
              value={time}
            />
          </InputGroup>
        </Group>

        <Label>Está dentro da dieta?</Label>
        <Group>
          <InsideDietButton
            insideDiet={true}
            isActive={insideDiet === true}
            onPress={() => setInsideDiet(true)}
          >
            <InsideDietButtonTag insideDiet={true} />
            <InsideDietButtonLabel>Sim</InsideDietButtonLabel>
          </InsideDietButton>

          <InsideDietButton
            insideDiet={false}
            isActive={insideDiet === false}
            onPress={() => setInsideDiet(false)}
          >
            <InsideDietButtonTag insideDiet={false} />
            <InsideDietButtonLabel>Não</InsideDietButtonLabel>
          </InsideDietButton>
        </Group>
      </View>
      <Button
        title={type === "CREATE" ? "Cadastrar refeição" : "Salvar alterações"}
        onPress={handleSubmitMeal}
      />
    </Container>
  );
}
