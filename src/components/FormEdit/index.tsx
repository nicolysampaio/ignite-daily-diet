import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MaskedInput } from "@components/MaskedInput";
import { useNavigation } from "@react-navigation/native";
import { dateCreate } from "@storage/date/dateCreate";
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
  meal: string;
};

export function FormEdit({ meal }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [insideDiet, setInsideDiet] = useState<boolean>();

  const navigation = useNavigation();

  async function handleEditMeal() {
    try {
      await dateCreate(date);
      navigation.navigate("feedback", { insideDiet });
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
      <Button title="Cadastrar refeição" onPress={handleEditMeal} />
    </Container>
  );
}
