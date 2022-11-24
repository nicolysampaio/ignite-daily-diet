import {
  Container,
  Title,
  Subtitle,
  SubtitleStrong,
  FeedbackImage,
  ButtonContainer,
} from "./styles";

import insideDietImg from "@assets/insideDiet.png";
import outsideDietImg from "@assets/outsideDiet.png";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  insideDiet?: boolean;
};

export function Feedback() {
  const route = useRoute();
  const { insideDiet } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home")
  }

  return (
    <Container>
      {insideDiet ? (
        <>
          <Title insideDiet={insideDiet}>Continue assim!</Title>
          <Subtitle>
            Você continua <SubtitleStrong>dentro da dieta</SubtitleStrong>.
            Muito bem!
          </Subtitle>
          <FeedbackImage source={insideDietImg} />
        </>
      ) : (
        <>
          <Title insideDiet={insideDiet}>Que pena!</Title>
          <Subtitle>
            Você <SubtitleStrong>saiu da dieta</SubtitleStrong>. dessa vez, mas
            continue se esforçando e não desista!
          </Subtitle>
          <FeedbackImage source={outsideDietImg} />
        </>
      )}
      <ButtonContainer>
        <Button title={"Ir para a página inicial"} onPress={handleGoHome} />
      </ButtonContainer>
    </Container>
  );
}
