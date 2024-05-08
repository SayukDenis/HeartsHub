import { Text, View } from "react-native";
import { height } from "../../Constants/SizeConstants";
import SelectForMulitplyAuthorizationButton from "./SelectForMulitplyAuthorizationButton";

interface DefaultSelectButtonProps {
    isSelected:boolean;
    item:string
}

const DefaultSelectButton: React.FC<DefaultSelectButtonProps> = ({isSelected,item}) => {
  return (
    <SelectForMulitplyAuthorizationButton
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: height * 0.018,
          fontWeight: "600",
          alignSelf: "center",
        }}
      >
        {item}
      </Text>
      <View
        style={{
          width: height * 0.025,
          aspectRatio: 1,
          borderWidth: 3,
          borderRadius: height * 0.03,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {!isSelected ? null : (
          <View
            style={{
              width: height * 0.015,
              aspectRatio: 1,
              alignSelf: "center",
              backgroundColor: "black",
              borderRadius: height * 0.03,
            }}
          />
        )}
      </View>
    </SelectForMulitplyAuthorizationButton>
  );
};

export default DefaultSelectButton;
