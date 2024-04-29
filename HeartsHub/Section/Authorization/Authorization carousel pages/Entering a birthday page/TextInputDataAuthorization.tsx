import React, { Ref } from "react";
import { TextInput, TextInputProps } from "react-native";
import { height, width } from "../../../../SemiComponents/Constants/SizeConstants";

interface TextInputDataAuthorizationProps extends TextInputProps {
  input: string;
  setInput: (text: string) => void;
  inputRef: any;
  borderColor?: string;
}

const TextInputDataAuthorization: React.FC<TextInputDataAuthorizationProps> = ({
  input,
  setInput,
  inputRef,
  borderColor = "white",
  ...props
}) => {
  return (
    <TextInput
      ref={inputRef}
      placeholder={props.placeholder}
      keyboardType="number-pad"
      value={input}
      onChangeText={setInput}
      style={{
        textAlign: "center",
        fontSize: height * 0.023,
        //backgroundColor: "green",
        width: width * 0.2,
        borderWidth: 1,
        height: height * 0.05,
        borderColor,
        borderRadius: 12,
        marginTop: 7,
        color: "white",
      }}
      placeholderTextColor={
        props.placeholderTextColor || "rgba(255, 255, 255, 0.5)"
      }
      {...props}
    />
  );
};

export default TextInputDataAuthorization;
