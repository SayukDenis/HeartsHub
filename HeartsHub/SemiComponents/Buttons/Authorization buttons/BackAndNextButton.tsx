import React, { useEffect, useRef } from "react";
import BackButtonSVG from "../../../assets/SVG/Semi SVG/BackButtonSVG";
import {
  height,
  heightOfAuthorizationButton,
  width,
  widthOfButtonNext,
} from "../../Constants/SizeConstants";
import { Animated, Keyboard, TouchableOpacity, View } from "react-native";
import AuthorizationButton from "./AuthorizationButton";
import { useIsFocused } from "@react-navigation/native";
interface BackAndNextButtonProps {
  pressOnBackButton:()=>void
  isNextButtonEnabled: boolean;
  pressOnNextButton: () => void;
}

const BackAndNextButton: React.FC<BackAndNextButtonProps> = ({
  pressOnBackButton,
  isNextButtonEnabled,
  pressOnNextButton,
}) => {
  const keyboardOffset = useRef(new Animated.Value(-height * 0.06)).current;
  const isFocused = useIsFocused();
  const startAnimation = (toValue: any) =>
    Animated.timing(keyboardOffset, {
      toValue,
      duration: 210,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    if (isFocused) {
      Keyboard.addListener("keyboardWillShow", (e) => {
        startAnimation(-e.endCoordinates?.height - height * 0.02);
      });
      Keyboard.addListener("keyboardWillHide", () => {
        startAnimation(-height * 0.06);
      });
      return () => {
        Keyboard.removeAllListeners("keyboardWillShow");
        Keyboard.removeAllListeners("keyboardWillHide");
      };
    }
  }, [isFocused]);
  return (
    <Animated.View
      style={{
        transform: [{ translateY: keyboardOffset }],
        //backgroundColor: "blue",
        width: width * 0.8,
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={pressOnBackButton}
        style={{
          height: heightOfAuthorizationButton,
          width: heightOfAuthorizationButton * 1.074074,
          backgroundColor: "white",
          justifyContent: "center",
          zIndex: 10,
          borderRadius: heightOfAuthorizationButton,
          marginRight: 10,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            marginRight: heightOfAuthorizationButton * 0.074074,
          }}
        >
          <BackButtonSVG height={heightOfAuthorizationButton * 2} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          height: heightOfAuthorizationButton,
        }}
        disabled={!isNextButtonEnabled}
        onPress={pressOnNextButton}
      >
        <AuthorizationButton
          text={"Далі"}
          buttonWidth={widthOfButtonNext}
          marginTop={0}
          color={isNextButtonEnabled ? "white" : "#B2848B"}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};
export default BackAndNextButton;
