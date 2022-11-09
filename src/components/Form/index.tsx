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

export function Form() {
  const [insideDiet, setInsideDiet] = useState<"YES" | "NO" | "">("");

  return (
    <Container>
      <View>
        <Label>Nome</Label>
        <Input />

        <Label>Descrição</Label>
        <Input isTextArea={true} multiline={true} />

        <Group>
          <InputGroup>
            <Label>Data</Label>
            <MaskedInput
              onChangeText={(text: string) => console.log(text)}
              mask={"99/99/9999"}
              keyboardType="numeric"
            />
          </InputGroup>

          <InputGroup>
            <Label>Hora</Label>
            <MaskedInput
              onChangeText={(text: string) => console.log(text)}
              mask={"99:99"}
              keyboardType="numeric"
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
      <Button title="Cadastrar refeição" />
    </Container>
  );
}
