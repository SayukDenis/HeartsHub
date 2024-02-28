import React, { useRef, useState } from "react";
import BackGroundGradinetView from "../../SemiComponents/BackGround/BackGroundGradientView";
import AuthorizationProgresBar from "../../SemiComponents/Other/AuthorizationProgresBar";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  height,
  heightOfMainTitle,
  marginTopForTextAuthorization,
  width,
} from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";
import AuthorizationInput from "../../SemiComponents/Inputs/AuthorizationInput";
import BackAndNextButton from "../../SemiComponents/Buttons/Authorization buttons/BackAndNextButton";

interface VerifyCodePageProps {}

const VerifyCodePage: React.FC<VerifyCodePageProps> = ({}) => {
  const verifyCode = "0228";
  const inputRef = useRef<TextInput>(null);
  const [inputCode, setInputCode] = useState("0227");
  const [isValidCode, setIsValidCode] = useState(true);
  const pressOnBackButton = () => {};
  const pressOnNextButton = () => {
    if (verifyCode == inputCode) {
      console.log("ABOBA");
      return;
    }
    setInputCode("");
    setIsValidCode(false);
    inputRef?.current?.blur();
  };
  return (
    <View style={{width}}>
      <AuthorizationTitle text="Введіть код" />
      <AuthorizationInput
        color={isValidCode ? "white" : "#FFEF60"}
        borderTop={true}
        childrenLeft={
          <Text
            style={{
              color: "white",
              fontSize: height * 0.02,
              fontWeight: "700",
            }}
          >
            {"Код"}
          </Text>
        }
        childrenRight={
          <TextInput
            ref={inputRef}
            keyboardType="number-pad"
            clearTextOnFocus={false}
            style={{
              //backgroundColor: "red",
              flex: 1,
              fontSize: height * 0.023,
              justifyContent: "center",
              marginLeft: 10,
              color: "white",
            }}
            onChangeText={setInputCode}
            onFocus={() => {
              setIsValidCode(true);
            }}
            value={inputCode}
            maxLength={4}
            placeholder="0000"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        }
      />
      {isValidCode ? null : (
        <Text
          style={{
            color: "#FFEF60",
            fontSize: height * 0.018,
            marginLeft: width * 0.1,
            marginTop: 10,
            fontWeight: "800",
          }}
        >
          {"Вкажіть коректний email"}
        </Text>
      )}
      <TouchableOpacity activeOpacity={0.7}>
        <Text
          style={{
            color: "#FFB076",
            fontSize: height * 0.018,
            marginLeft: width * 0.1,
            marginTop: 10,
            fontWeight: "800",
          }}
        >
          {"Надіслати код ще раз"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyCodePage;
