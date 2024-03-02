import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";
import AuthorizationInput from "../../SemiComponents/Inputs/AuthorizationInput";
import { useDispatch, useSelector } from "react-redux";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setNameForAuthorization,
  setSurnameForAuthorization,
} from "../../redux/Authorization/Actions";
import {
  selectIsPressedNextButtonAuthorization,
  selectNameForAuthorization,
  selectSurnameForAuthorization,
} from "../../redux/Authorization/selectors";

interface EnterNameAndSurnamePageProps {
  index: number;
  isSelected: boolean;
}

const EnterNameAndSurnamePage: React.FC<EnterNameAndSurnamePageProps> = ({
  index,
  isSelected,
}) => {
  const dispatch = useDispatch();
  const isPressedNextButtonAuthorization = useSelector(
    selectIsPressedNextButtonAuthorization
  );
  const name = useSelector(selectNameForAuthorization);
  const surname = useSelector(selectSurnameForAuthorization);
  const inputRef = useRef<TextInput>(null);
  const [inputName, setInputName] = useState(name);
  const [isValidName, setIsValidName] = useState(true);
  const [inputSurName, setInputSurName] = useState(surname);
  const [isValidSurName, setIsValidSurName] = useState(true);
  function isValidNameCheck(name: string) {
    const regex = /^\p{L}+$/u;
    return regex.test(name);
  }
  useEffect(() => {
    if (isSelected) {
      inputRef.current?.focus();
    }
  }, [isSelected]);
  useEffect(() => {
    if (isSelected) {
      const validName = isValidNameCheck(inputName);
      const validSurName = isValidNameCheck(inputSurName) || inputSurName == "";
      const isValid = validName && validSurName;
      setIsValidName(validName);
      setIsValidSurName(validSurName);
      dispatch(setIsEnableNextButtonAuthorization(isValid));
    }
  }, [inputName, inputSurName, isSelected]);
  useEffect(() => {
    if (isSelected) {
      dispatch(setIsPressedNextButtonAuthorization(false));
      const validName = isValidNameCheck(inputName);
      const validSurName = isValidNameCheck(inputSurName) || inputSurName == "";
      const isValid = validName && validSurName;
      if (isValid) {
        dispatch(setNameForAuthorization(inputName));
        dispatch(setSurnameForAuthorization(inputSurName));
      }
      dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(isValid)
      );
    }
  }, [isPressedNextButtonAuthorization]);

  return (
    <View style={{ width }}>
      <AuthorizationTitle text="Як тебе звати?" />
      <AuthorizationInput
        color={
          (isValidName && isValidSurName) || inputName == ""
            ? "white"
            : "#FFEF60"
        }
        borderTop={true}
        childrenLeft={
          <Text
            style={{
              color: "white",
              fontSize: height * 0.02,
              fontWeight: "700",
            }}
          >
            {"Ім'я"}
          </Text>
        }
        childrenRight={
          <TextInput
            ref={inputRef}
            style={{
              flex: 1,
              fontSize: height * 0.023,
              justifyContent: "center",
              marginLeft: 10,
              color: "white",
            }}
            onChangeText={setInputName}
            value={inputName}
            placeholder="Введіть ім'я"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        }
      />
      <AuthorizationInput
        color={
          (isValidName && isValidSurName) || inputName == ""
            ? "white"
            : "#FFEF60"
        }
        borderTop={false}
        widthOfFirstContainer={width * 0.22}
        childrenLeft={
          <Text
            style={{
              color: "white",
              fontSize: height * 0.02,
              fontWeight: "700",
            }}
          >
            {"Прізвище"}
          </Text>
        }
        childrenRight={
          <TextInput
            style={{
              flex: 1,
              fontSize: height * 0.023,
              justifyContent: "center",
              marginLeft: 10,
              color: "white",
            }}
            onChangeText={setInputSurName}
            value={inputSurName}
            placeholder="Введіть прізвище"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        }
      />
      {(isValidName && isValidSurName) || inputName == "" ? null : (
        <Text
          style={{
            color: "#FFEF60",
            fontSize: height * 0.0165,
            marginLeft: width * 0.1,
            marginTop: 10,
            fontWeight: "800",
            width: width * 0.8,
          }}
        >
          {
            "Ім'я або прізвище не має містити пробілів або інших спеціальних символів"
          }
        </Text>
      )}
    </View>
  );
};

export default EnterNameAndSurnamePage;
