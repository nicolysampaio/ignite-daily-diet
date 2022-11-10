import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MaskedInput } from "@components/MaskedInput";
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
  type?: "CREATE" | "EDIT";
};

export function Form({
  mealName,
  mealDescription,
  mealDate,
  mealTime,
  type = "CREATE",
}: Props) {
  const [name, setName] = useState(mealName);
  const [description, setDescription] = useState(mealDescription);
  const [date, setDate] = useState(mealDate);
  const [time, setTime] = useState(mealTime);
  const [insideDiet, setInsideDiet] = useState<"YES" | "NO" | "">("");

  function handleSubmitMeal() {
    console.log(
      `Nome: ${name}, Descrição: ${description}, Data: ${date}, Hora: ${time}, Dentro da dieta: ${insideDiet}`
    );
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
            isActive={insideDiet === "YES"}
            onPress={() => setInsideDiet("YES")}
          >
            <InsideDietButtonTag insideDiet={true} />
            <InsideDietButtonLabel>Sim</InsideDietButtonLabel>
          </InsideDietButton>

          <InsideDietButton
            insideDiet={false}
            isActive={insideDiet === "NO"}
            onPress={() => setInsideDiet("NO")}
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
