import {
  Animated,
  Keyboard,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  height,
  heightOfAuthorizationButton,
  width,
} from "../../../../../SemiComponents/Constants/SizeConstants";
import CheckBoxSVG from "../../../../../assets/SVG/Authorization SVG/CheckBoxSVG";
import BackButtonSVG from "../../../../../assets/SVG/Semi SVG/BackButtonSVG";
import { setIsPressedNextButtonAuthorization } from "../../../../../redux/Authorization/Actions";
import { useDispatch } from "react-redux";

interface ConfirmButtonProps {
  isConfirmButtonEnabled: boolean;
  showBackButton: boolean;
  pressOnConfirmButton: () => void;
  pressOnBackButton: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  isConfirmButtonEnabled,
  pressOnConfirmButton,
  showBackButton,
  pressOnBackButton,
}) => {
  const dispatch=useDispatch()
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
        justifyContent: "space-between",
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
          opacity: showBackButton ? 1 : 0,
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
          pressOnConfirmButton();
          dispatch(setIsPressedNextButtonAuthorization(true));
        }}
        disabled={!isConfirmButtonEnabled}
        style={{
          height: heightOfAuthorizationButton,
          width: width * 0.3,
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
      <View style={{ width: heightOfAuthorizationButton * 1.074074 }}></View>
    </Animated.View>
  );
};

export default ConfirmButton;
