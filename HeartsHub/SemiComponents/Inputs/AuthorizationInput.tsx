import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { height, width } from "../Constants/SizeConstants";


interface AuthorizationInputProps {
  childrenLeft?: ReactNode;
  childrenRight?: ReactNode;
  borderTop?: boolean;
  widthOfFirstContainer?: number;
  color?:string;
}

const AuthorizationInput: React.FC<AuthorizationInputProps> = ({
  childrenLeft,
  childrenRight,
  borderTop = false,
  widthOfFirstContainer = width* 0.12,
  color="white"
}) => {
    const widthOfBorder=2.5;
  return (
    <View
      style={{
        flexDirection: "row",
        width: width * 0.8,
        height: height * 0.059,
        alignSelf: "center",
        borderTopWidth: borderTop ? widthOfBorder : 0,
        borderBottomWidth: widthOfBorder,
        borderColor: color,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          width: widthOfFirstContainer,
        }}
      >
        {childrenLeft}
      </View>
      <View
        style={{
          height: height* 0.034,
          width: widthOfBorder,
          backgroundColor: color,
          alignSelf: "center",
        }}
      />
      {childrenRight}
    </View>
  );
};
export default AuthorizationInput;
