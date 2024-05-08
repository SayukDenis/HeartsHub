import { Text, View } from "react-native";
import { User } from "../../../Models/User";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";
import { getAge } from "../Recomendation page/Functions";

interface SwipingCardTitleProps {
  user: User;
}

const SwipingCardTitle: React.FC<SwipingCardTitleProps> = ({ user }) => {
  return (
    <Text
      style={{
        color: "white",
        fontSize: height * 0.033,
        fontWeight: "900",
        marginLeft: width * 0.03,
        marginBottom: 10,
      }}
    >
      {user.name + ", " + getAge(user.date)}
    </Text>
  );
};

export default SwipingCardTitle;
