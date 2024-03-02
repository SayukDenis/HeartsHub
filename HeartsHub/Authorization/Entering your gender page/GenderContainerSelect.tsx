import React from "react";
import GenderAuthorizationButton from "../../SemiComponents/Buttons/Authorization buttons/GenderAuthorizationButton";
import { Text, View } from "react-native";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import { genders } from "../../SemiComponents/Constants/Data";

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
      <GenderAuthorizationButton
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
          {genders[index]}
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
      </GenderAuthorizationButton>
    </>
  );
};
export default GenderContainerSelect;
