import {
  Animated,
  Keyboard,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  height,
  heightOfAuthorizationButton,
  width,
} from "../../../SemiComponents/Constants/SizeConstants";
import BackButtonSVG from "../../../assets/SVG/Semi SVG/BackButtonSVG";
import { useEffect, useRef, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import NextButtonSVG from "../../../assets/SVG/Semi SVG/NextButtonSVG";
import CheckBoxSVG from "../../../assets/SVG/Authorization SVG/CheckBoxSVG";

interface ControlPanelForSettingsCarouselProps {
  pressOnBackButton: () => void;
  isConfirmButtonEnabled: boolean;
  pressOnNextButton: () => void;
  pressOnConfirmButton: () => void;
}

const ControlPanelForSettingsCarousel: React.FC<
  ControlPanelForSettingsCarouselProps
> = ({
  pressOnBackButton,
  pressOnNextButton,
  isConfirmButtonEnabled,
  pressOnConfirmButton,
}) => {
  const widthOfModalContainer = width * 0.8;
  const keyboardOffset = useRef(new Animated.Value(-height * 0.06)).current;
  const isFocused = useIsFocused();
  const modalWindowOffset = useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue: any) =>
    Animated.timing(keyboardOffset, {
      toValue,
      duration: 210,
      useNativeDriver: true,
    }).start();
  const animateDown = Animated.timing(modalWindowOffset, {
    toValue: 0,
    duration: 200,
    useNativeDriver: true,
  });
  const animateWait = Animated.timing(modalWindowOffset, {
    toValue: 1,
    duration: 1300,
    useNativeDriver: true,
  });
  const animateUp = Animated.timing(modalWindowOffset, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  });
  const animateModal = Animated.sequence([animateUp, animateWait, animateDown]);

  const startConfirmAnimation = () => {
   
    animateWait.stop();
    animateModal.start();
  };
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
  const interpolatePositionForStartConfirmAnimation =
    modalWindowOffset.interpolate({
      inputRange: [0, 1],
      outputRange: [
        heightOfAuthorizationButton,
        -heightOfAuthorizationButton * 1 - height * 0.02,
      ],
    });

  return (
    <Animated.View
      style={{
        transform: [{ translateY: keyboardOffset }],
        //backgroundColor: "blue",
        width: width * 0.8,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            width: widthOfModalContainer,
            height: heightOfAuthorizationButton,
            backgroundColor: "white",
            alignSelf: "center",

            borderRadius: heightOfAuthorizationButton,
            marginLeft: (width - widthOfModalContainer) / 2 - width * 0.1,
            flexDirection: "row",
            justifyContent: "center",
            opacity: modalWindowOffset,
            transform: [
              { translateY: interpolatePositionForStartConfirmAnimation },
            ],
          },
          Platform.OS === "android"
            ? { elevation: 5 }
            : {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 10,
              },
        ]}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: height * 0.02,
            fontWeight: "600",
          }}
        >
          {"Данні збережено"}
        </Text>
        <View
          style={{
            height: height * 0.025,
            aspectRatio: 1,
            borderWidth: 2.2,
            alignSelf: "center",
            borderRadius: height * 0.02,
            marginLeft: 5,
            justifyContent: "center",
          }}
        >
          <View style={{ justifyContent: "center", alignSelf: "center" }}>
            <CheckBoxSVG widthOfCheckBox={height * 0.05} strokeWidth={6} />
          </View>
        </View>
      </Animated.View>
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
        onPress={() => {
          startConfirmAnimation();
          pressOnConfirmButton();
        }}
        disabled={!isConfirmButtonEnabled}
        style={{
          height: heightOfAuthorizationButton,
          width: width * 0.2,
          backgroundColor: isConfirmButtonEnabled ? "white" : "#B2848B",
          justifyContent: "center",
          zIndex: 10,
          borderRadius: heightOfAuthorizationButton,
          marginRight: 10,
        }}
      >
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <CheckBoxSVG widthOfCheckBox={height * 0.14} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={pressOnNextButton}
        style={{
          height: heightOfAuthorizationButton,
          width: heightOfAuthorizationButton * 1.074074,
          backgroundColor: "white",
          justifyContent: "center",
          zIndex: 10,
          borderRadius: heightOfAuthorizationButton,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            marginLeft: heightOfAuthorizationButton * 0.074074,
          }}
        >
          <NextButtonSVG />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ControlPanelForSettingsCarousel;
