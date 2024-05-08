import { Text, TouchableOpacity, View } from "react-native";
import {
  height,
  heightOfAuthorizationButton,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";

interface ContinueButtonForModalWindowForAddEventProps {
  onContinueButtonPress: () => void;
}
const ContinueButtonForModalWindowForAddEvent: React.FC<
  ContinueButtonForModalWindowForAddEventProps
> = ({ onContinueButtonPress }) => {
  return (
    <TouchableOpacity
      onPress={onContinueButtonPress}
      style={{
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: height * 0.02,
      }}
    >
      <View
        style={{
          width: width * 0.75,
          alignSelf: "center",
          justifyContent: "center",
          height: heightOfAuthorizationButton,
          borderRadius: height,
          marginTop: height * 0.025,
          borderWidth: 2,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: height * 0.023,
            fontWeight: "600",
          }}
        >
          {"Далі"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContinueButtonForModalWindowForAddEvent;
