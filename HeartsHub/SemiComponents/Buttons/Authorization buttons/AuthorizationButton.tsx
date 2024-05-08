import React from "react";
import { Text, View } from "react-native";
import { height,heightOfAuthorizationButton,width } from "../../Constants/SizeConstants";

interface AuthorizationButtonProps {
  color?: string;
  buttonWidth?: number;
  text?:string,
  marginTop?:number,
}

const AuthorizationButton: React.FC<AuthorizationButtonProps> = ({
  color = "white",
  buttonWidth=  width * 0.75,
  text,
  marginTop=height*0.025,
}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width:buttonWidth,
        alignSelf: "center",
        justifyContent: "center",
        height: heightOfAuthorizationButton,
        borderRadius: height,
        marginTop,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: height * 0.023,
          fontWeight: "600",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
export default AuthorizationButton