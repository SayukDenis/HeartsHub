import React from "react";
import { Text, View } from "react-native";
import {
  height,
  heightOfMainTitle,
  marginTopForTextAuthorization,
} from "../Constants/SizeConstants";

interface AuthorizationTitleProps {
  text: string;
}

const AuthorizationTitle: React.FC<AuthorizationTitleProps> = ({ text }) => {
  return (
    <View
      style={{
        marginTop: marginTopForTextAuthorization,
        height: height * 0.1,
        marginBottom: height * 0.05,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          color: "white",
          fontSize: heightOfMainTitle * 0.8,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
export default AuthorizationTitle;