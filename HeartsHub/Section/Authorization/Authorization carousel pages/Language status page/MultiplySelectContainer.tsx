import { Text, View } from "react-native";
import SelectForMulitplyAuthorizationButton from "../../../../SemiComponents/Buttons/Authorization buttons/SelectForMulitplyAuthorizationButton";
import { height, width } from "../../../../SemiComponents/Constants/SizeConstants";
import CheckBoxSVG from "../../../../assets/SVG/Authorization SVG/CheckBoxSVG";

interface MultiplySelectContainerProps {
  isSelected: boolean;
  index: number;
  data: string[];
}

const MultiplySelectContainer: React.FC<MultiplySelectContainerProps> = ({
  isSelected,
  index,
  data,
}) => {
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
        {data[index]}
      </Text>
      <View
        style={{
          width: height * 0.025,
          aspectRatio: 1,
          borderWidth: 3,
          borderRadius: 8,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {!isSelected ? null : (
          <View style={{ alignSelf: "center" }}>
            <CheckBoxSVG widthOfCheckBox={width * 0.13} strokeWidth={4} />
          </View>
        )}
      </View>
    </SelectForMulitplyAuthorizationButton>
  );
};

export default MultiplySelectContainer;
