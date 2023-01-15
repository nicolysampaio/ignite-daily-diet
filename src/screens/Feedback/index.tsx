import {
  Container,
  Title,
  Subtitle,
  SubtitleStrong,
  FeedbackImage,
  ButtonContainer,
} from "./styles";

import withinDietImg from "@assets/withinDiet.png";
import offDietImg from "@assets/offDiet.png";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  withinDiet?: boolean;
};

export function Feedback() {
  const route = useRoute();
  const { withinDiet } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home")
  }

  return (
    <Container>
      {withinDiet ? (
        <>
          <Title withinDiet={withinDiet}>Continue assim!</Title>
          <Subtitle>
            Você continua <SubtitleStrong>dentro da dieta</SubtitleStrong>.
            Muito bem!
          </Subtitle>
          <FeedbackImage source={withinDietImg} />
        </>
      ) : (
        <>
          <Title withinDiet={withinDiet}>Que pena!</Title>
          <Subtitle>
            Você <SubtitleStrong>saiu da dieta</SubtitleStrong>. dessa vez, mas
            continue se esforçando e não desista!
          </Subtitle>
          <FeedbackImage source={offDietImg} />
        </>
      )}
      <ButtonContainer>
        <Button title={"Ir para a página inicial"} onPress={handleGoHome} />
      </ButtonContainer>
    </Container>
  );
}
