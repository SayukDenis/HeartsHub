import React from "react";
import { View } from "react-native";
import {
  countOfAuthorizationPages,
  heightOfProgressAuthorization,
  marginTopForTextAuthorization,
  statusBarHeight,
  width,
} from "../Constants/SizeConstants";
interface AuthorizationProgresBarProps {
  progress: number;
}
const AuthorizationProgresBar: React.FC<AuthorizationProgresBarProps> = ({
  progress,
}) => {
  return (
    <View
      style={{
        position: "absolute",
        top:
          (marginTopForTextAuthorization - statusBarHeight) / 2 +
          statusBarHeight -
          heightOfProgressAuthorization / 2,
        height: heightOfProgressAuthorization,
        borderRadius: 10,
        overflow: "hidden",
        width,
      }}
    >
      <View
        style={{
          height: heightOfProgressAuthorization,
          width: ((progress/width+1) / countOfAuthorizationPages) * width,
          backgroundColor: "#5B0010",
          borderRadius: 10,
        }}
      />
      <View
        style={{
          position: "absolute",
          height: heightOfProgressAuthorization,
          width,
          opacity: 0.3,
          backgroundColor: "white",
          zIndex: -1,
        }}
      />
    </View>
  );
};
export default AuthorizationProgresBar;