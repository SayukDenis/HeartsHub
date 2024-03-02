import React, { useEffect, useRef, useState } from "react";

import { Text, TextInput, View } from "react-native";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationInput from "../../SemiComponents/Inputs/AuthorizationInput";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";

import { useDispatch, useSelector } from "react-redux";
import {
  setEmailForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../redux/Authorization/Actions";
import {
  selectEmailForAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../redux/Authorization/selectors";

interface EnteringAnEmailAddressPageProps {
  index: number;
  isSelected: boolean;
}

const EnteringAnEmailAddressPage: React.FC<EnteringAnEmailAddressPageProps> = ({
  index,
  isSelected,
}) => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmailForAuthorization);
  const [inputEmail, setInputEmail] = useState(email);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const isPressedNextButtonAuthorization = useSelector(
    selectIsPressedNextButtonAuthorization
  );
  const inputRef = useRef<TextInput>(null);
  function isValidEmailCheck(email: string) {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
  }
  useEffect(() => {
    if (isSelected) {
      inputRef.current?.focus();
    }
  }, [isSelected]);
  useEffect(() => {
    setIsValidEmail(isValidEmailCheck(inputEmail));
    if (isSelected) {
      dispatch(
        setIsEnableNextButtonAuthorization(isValidEmailCheck(inputEmail))
      );
    }
  }, [inputEmail, isSelected]);
  useEffect(() => {
    if (isSelected) {
      dispatch(setIsPressedNextButtonAuthorization(false));
      if (isValidEmail) {
        dispatch(setEmailForAuthorization(inputEmail));
      }
      dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(isValidEmail)
      );
    }
  }, [isPressedNextButtonAuthorization]);
  return (
    <View style={{ width }}>
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
            ref={inputRef}
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
