import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackGroundGradinetView from "../../SemiComponents/BackGround/BackGroundGradientView";
import {
  height,
  heightOfMainTitle,
  marginBetweenTitles,
  marginTopForTextAuthorization,
  statusBarHeight,
  width,
} from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationButton from "../../SemiComponents/Buttons/Authorization buttons/AuthorizationButton";

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
          marginTop: marginTopForTextAuthorization,
          //backgroundColor: "black",
          height:height*0.1
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontSize: heightOfMainTitle,
            fontWeight: "700",
            //fontFamily:"Rubik"
          }}
        >
          {"HeartsHub"}
        </Text>
        <Text
          style={{
            marginTop: marginBetweenTitles,
            alignSelf: "center",
            color: "white",
            fontSize: heightOfMainTitle / 2,
            fontWeight: "300",
          }}
        >
          {"Знаходь своє щастя"}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          //backgroundColor: "blue",
          flexDirection: "column-reverse",
          marginBottom: height * 0.06,
        }}
      >
        <TouchableOpacity activeOpacity={0.7}>
          <AuthorizationButton text={"Увійти"} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={pressOnCreateAccountButton}
        >
          <AuthorizationButton text={"Створити обліковий запис"} />
        </TouchableOpacity>
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
      </View>
    </BackGroundGradinetView>
  );
};
export default SignInOrSignUpPage;
