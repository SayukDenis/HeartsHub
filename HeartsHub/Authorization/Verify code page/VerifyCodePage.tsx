import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  height,
  width,
} from "../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../SemiComponents/Other/AuthorizationTitle";
import AuthorizationInput from "../../SemiComponents/Inputs/AuthorizationInput";
import { useDispatch, useSelector } from "react-redux";
import { selectIsPressedNextButtonAuthorization } from "../../redux/Authorization/selectors";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../redux/Authorization/Actions";

interface VerifyCodePageProps {
  index: number;
  isSelected:boolean;
}

const VerifyCodePage: React.FC<VerifyCodePageProps> = ({
  index,
  isSelected
}) => {
  const dispatch = useDispatch();
  const isPressedNextButtonAuthorization = useSelector(
    selectIsPressedNextButtonAuthorization
  );
  const verifyCode = "0228";
  const inputRef = useRef<TextInput>(null);
  const [inputCode, setInputCode] = useState("0228");
  const [isValidCode, setIsValidCode] = useState(true);

  useEffect(() => {
    if (isSelected) {
      inputRef.current?.focus();
    }
  }, [isSelected]);
  useEffect(() => {
    if (isSelected) {
      dispatch(
        setIsEnableNextButtonAuthorization(
          inputCode.length == verifyCode.length
        )
      );
    }
  }, [inputCode, isSelected]);

  useEffect(() => {
    if (isSelected) {
      dispatch(setIsPressedNextButtonAuthorization(false));
      dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(
          verifyCode == inputCode
        )
      );

      if (verifyCode != inputCode) {
        setInputCode("");
        setIsValidCode(false);
        inputRef?.current?.blur();
      }
    }
  }, [isPressedNextButtonAuthorization]);
  return (
    <View style={{ width }}>
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
          {"Вкажіть коректний код"}
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
