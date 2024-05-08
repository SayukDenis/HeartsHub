import { Image, Text, View } from "react-native";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";
import { User } from "../../../Models/User";
import { getAge } from "./Functions";

interface RecomendationUserContainerProps {
  user: User;
}
export const marginForUserRecomendationList = width * 0.05;
export const widthOfContainerForUserRecomendationList =
  (width - 4 * marginForUserRecomendationList) / 3;
const RecomendationUserContainer: React.FC<RecomendationUserContainerProps> = ({
  user,
}) => {
  
  return (
    <View
      style={{
        marginHorizontal: marginForUserRecomendationList / 2,
        marginBottom: marginForUserRecomendationList,
      }}
    >
      <Image
        source={{ uri: user.linkToPhoto[0] }}
        style={{
          width: widthOfContainerForUserRecomendationList,
          height: (widthOfContainerForUserRecomendationList * 4) / 3,
          borderRadius:30
        }}
      />
      <Text style={{ color: "white" }}>
        {user.name + ", " + getAge(user.date)}
      </Text>
    </View>
  );
};

export default RecomendationUserContainer;
