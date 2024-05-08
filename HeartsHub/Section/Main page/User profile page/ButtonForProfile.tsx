import { Text, TouchableOpacity, View } from "react-native";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";

interface ButtonForProfileProps {
  text: string;
  onPress?: () => void;
}

const ButtonForProfile: React.FC<ButtonForProfileProps> = ({
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        width: width * 0.47,
        backgroundColor: "#CBA5AB",
        height: height * 0.12,
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: height * 0.024,
          fontWeight: "800",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonForProfile;
