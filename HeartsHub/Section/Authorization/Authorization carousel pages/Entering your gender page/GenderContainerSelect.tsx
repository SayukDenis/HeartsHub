import React from "react";
import { Text, View } from "react-native";
import { height, width } from "../../../../SemiComponents/Constants/SizeConstants";
import { genders } from "../../../../SemiComponents/Constants/Data";
import DefaultSelectButton from "../../../../SemiComponents/Buttons/Authorization buttons/DefaultSelectButton";

interface GenderContainerSelectProps {
  isSelected: boolean;
  index: number;
}

const GenderContainerSelect: React.FC<GenderContainerSelectProps> = ({
  isSelected,
  index,
}) => {
  const getFirstChar = () => {
    const char = "";
    if (index == 0) {
      return genders[index][0];
    }
    if (genders[index - 1][0] != genders[index][0]) {
      return genders[index][0];
    }
    return char;
  };
  return (
    <>
      <View
        style={{
          width,
          height: getFirstChar() != "" ? height * 0.03 : height * 0.015,
          marginLeft: width * 0.1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: height * 0.018,
            fontWeight: "800",
          }}
        >
          {getFirstChar()}
        </Text>
      </View>
      <DefaultSelectButton
        item={genders[index]}
        isSelected={isSelected}

      />
    </>
  );
};
export default GenderContainerSelect;
