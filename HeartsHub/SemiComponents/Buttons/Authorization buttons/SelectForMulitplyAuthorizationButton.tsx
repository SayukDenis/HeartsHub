import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { height, width } from "../../Constants/SizeConstants";
interface SelectForMulitplyAuthorizationButtonProps {
  children?: ReactNode;
  style?: ViewStyle;
}
const SelectForMulitplyAuthorizationButton: React.FC<SelectForMulitplyAuthorizationButtonProps> = ({
  children,style
}) => {
  return (
    <View
      style={[{
        alignSelf: "center",
        width: width * 0.8,
        height: height * 0.06,
        backgroundColor: "white",
        borderRadius: 15,
        justifyContent: "center",
        padding: 10,
      },style]}
    >
      {children}
    </View>
  );
};

export default SelectForMulitplyAuthorizationButton;
