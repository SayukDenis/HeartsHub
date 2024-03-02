import React from "react";
import GenderAuthorizationButton from "./GenderAuthorizationButton";
import { Text, Platform } from "react-native";
import { height } from "../../Constants/SizeConstants";
interface SelectAuthorizationButtonProps {
  isSelected?: boolean;
  text: string;
}
const SelectAuthorizationButton: React.FC<SelectAuthorizationButtonProps> = ({
  isSelected = false,
  text,
}) => {
  return (
    <GenderAuthorizationButton
      style={
        isSelected
          ? {
              ...Platform.select({
                ios: {
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.5,
                  shadowRadius: 3.84,
                },
                android: {
                  elevation: 5,
                },
              }),
            }
          : {}
      }
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: height * 0.02,
          fontWeight: "600",
        }}
      >
        {text}
      </Text>
    </GenderAuthorizationButton>
  );
};
export default SelectAuthorizationButton;
