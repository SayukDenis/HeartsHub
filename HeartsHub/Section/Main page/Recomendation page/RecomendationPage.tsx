import { FlatList } from "react-native";
import SemiMainContainer from "../SemiComponents/SemiMainContainer";
import SemiMainFooterContainer from "../SemiComponents/SemiMainFooterContainer";
import SemiMainTopContainer from "../SemiComponents/SemiMainTopContainer";
import { users } from "../../../Initialization.tsx/InitializationUsers";
import RecomendationUserContainer from "./RecomendationUserContainer";
import HeaderOfMainCarouselPage from "../Main carousel page/HeaderOfMainCarouselPage";

interface CarouselPageProps {
  navigation: any;
}

export type CarouselPageComponent = React.FC<CarouselPageProps>;

const RecomendationPage: CarouselPageComponent = ({}) => {
  return (
    <SemiMainContainer>
      <HeaderOfMainCarouselPage leftText={"Історія"} />
      <SemiMainTopContainer>
        <FlatList
          data={users}
          renderItem={({ item }) => <RecomendationUserContainer user={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          style={{ alignSelf: "center" }}
          showsVerticalScrollIndicator={false}
        />
      </SemiMainTopContainer>
      <SemiMainFooterContainer></SemiMainFooterContainer>
    </SemiMainContainer>
  );
};

export default RecomendationPage;
