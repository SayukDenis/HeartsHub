import React, { isValidElement, useEffect, useRef, useState } from "react";
import BackGroundGradientView from "../../SemiComponents/BackGround/BackGroundGradientView";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import { useIsFocused } from "@react-navigation/native";
import AuthorizationInput from "../../SemiComponents/Inputs/AuthorizationInput";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";

interface EnteringAnEmailAddressPageProps {}

const EnteringAnEmailAddressPage: React.FC<
  EnteringAnEmailAddressPageProps
> = ({}) => {
  const [inputEmail, setInputEmail] = useState("denisok.77711123@gmail.com");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const isFocused = useIsFocused();
  function isValidEmailCheck(email: string) {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
  }
  useEffect(() => {
    setIsValidEmail(isValidEmailCheck(inputEmail));
  }, [inputEmail]);
  return (
    <View style={{width}}>
      <AuthorizationTitle text="Вкажіть свою електронну адресу" />
      <AuthorizationInput
        color={inputEmail == "" || isValidEmail ? "white" : "#FFEF60"}
        borderTop={true}
        childrenLeft={
          <Text
            style={{
              color: "white",
              fontSize: height * 0.02,
              fontWeight: "700",
            }}
          >
            {"email"}
          </Text>
        }
        childrenRight={
          <TextInput
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            autoCapitalize={"none"}
            clearTextOnFocus={false}
            style={{
              //backgroundColor: "red",
              flex: 1,
              fontSize: height * 0.023,
              justifyContent: "center",
              marginLeft: 10,
              color: "white",
            }}
            onChangeText={setInputEmail}
            value={inputEmail}
            placeholder="Введіть email"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        }
      />
      {inputEmail == "" || isValidEmail ? null : (
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
      
    </View>
  );
};

export default EnteringAnEmailAddressPage;
