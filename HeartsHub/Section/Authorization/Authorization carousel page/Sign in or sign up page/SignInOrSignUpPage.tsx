import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackGroundGradinetView from "../../../../SemiComponents/BackGround/BackGroundGradientView";
import {
  height,
  heightOfMainTitle,
  marginBetweenTitles,
  marginTopForTextAuthorization,
  statusBarHeight,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationButton from "../../../../SemiComponents/Buttons/Authorization buttons/AuthorizationButton";
import HeartsHubIconSVG from "../../../../assets/SVG/Semi SVG/HeartsHubIconSVG";
import { pages } from "../Pages";

interface SignInOrSignUpPageProps {
  navigation: any;
}

const SignInOrSignUpPage: React.FC<SignInOrSignUpPageProps> = ({
  navigation,
}) => {
  const pressOnCreateAccountButton = () => {
    navigation.navigate("AuthorizationCarousel");
  };
  const pressOnLogInToYourAccount = () => {};
  return (
    <BackGroundGradinetView>
      <View
        style={{
          marginTop: marginTopForTextAuthorization + height / 5,
          //backgroundColor: "black",
          height: height * 0.1,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <HeartsHubIconSVG widthOfSvg={width * 0.25} />
      </View>
      <View
        style={{
          flex: 1,
          //backgroundColor: "blue",
          flexDirection: "column-reverse",
          marginVertical: height * 0.06,
        }}
      >
        <Text
          style={{
            color: "white",
            opacity: 0.76,
            width: width * 0.8,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          {
            "Натискаючи “Увійти/Створити обліковий запис”, Ви погоджуєтесь з нашими Умовами користування.  Дізнайся, як ми використовуєм твої дані в Політиці конфіденційності."
          }
        </Text>

        <TouchableOpacity
          style={{ marginBottom: height * 0.03 }}
          activeOpacity={0.7}
          onPress={pressOnCreateAccountButton}
        >
          <AuthorizationButton text={"Створити обліковий запис"} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <AuthorizationButton text={"Увійти"} />
        </TouchableOpacity>
      </View>
    </BackGroundGradinetView>
  );
};
export default SignInOrSignUpPage;
