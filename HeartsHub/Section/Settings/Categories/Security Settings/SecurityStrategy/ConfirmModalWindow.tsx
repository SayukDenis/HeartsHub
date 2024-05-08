import { Animated, Keyboard, Platform, Text, View } from "react-native";
import {
  height,
  heightOfAuthorizationButton,
  width,
} from "../../../../../SemiComponents/Constants/SizeConstants";
import { useEffect, useRef } from "react";
import CheckBoxSVG from "../../../../../assets/SVG/Authorization SVG/CheckBoxSVG";
import { useNavigation } from "@react-navigation/native";

interface ConfirmModalWindowProps {}

const ConfirmModalWindow: React.FC<ConfirmModalWindowProps> = ({}) => {
  const modalWindowOffset = useRef(new Animated.Value(0)).current;
  const widthOfModalContainer = width * 0.8;
  const navigation = useNavigation();
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
  useEffect(() => {
    startConfirmAnimation();
  }, []);
  const startConfirmAnimation = () => {
    animateWait.stop();
    animateModal.start(() => {
      navigation.goBack();
    });
  };

  const interpolatePositionForStartConfirmAnimation =
    modalWindowOffset.interpolate({
      inputRange: [0, 1],
      outputRange: [height, height*0.8],
    });
  return (
    <View>
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
    </View>
  );
};

export default ConfirmModalWindow;
