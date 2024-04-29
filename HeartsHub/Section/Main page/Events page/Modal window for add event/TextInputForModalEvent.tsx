import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { height } from "../../../../SemiComponents/Constants/SizeConstants";
import GraphemeSplitter from "grapheme-splitter";
import { Dispatch, SetStateAction, useRef, useState } from "react";

interface TextInputForModalEventProps {
  maxNumbersInInput: number;
  titleText: string;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  placeHolderText?: string;
}

const TextInputForModalEvent: React.FC<TextInputForModalEventProps> = ({
  titleText,
  maxNumbersInInput,
  input,
  setInput,
  placeHolderText = "",
}) => {
  const splitter = new GraphemeSplitter();
  const inputRef = useRef<TextInput>(null);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{ fontWeight: "700", fontSize: height * 0.019, marginBottom: 5 }}
      >
        {titleText}
      </Text>
      <TouchableOpacity
        onPress={() => {
          inputRef.current?.focus();
        }}
        activeOpacity={1}
        style={{
          borderTopWidth: 2,
          borderBottomWidth: 2,
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}
      >
        <TextInput
          ref={inputRef}
          style={{
            fontSize: height * 0.018,
            fontWeight: "700",
            //backgroundColor: "red",
            width: "83%",
          }}
          multiline
          onChangeText={(text) => {
            const grapheme = splitter.splitGraphemes(text);
            if (grapheme.length < maxNumbersInInput) {
              setInput(text);
            } else {
              setInput(grapheme.slice(0, maxNumbersInInput).join(""));
            }
          }}
          value={input}
          maxLength={
            splitter.splitGraphemes(input).length < maxNumbersInInput
              ? 10000000
              : input.length - 1
          }
          placeholder={
            "Напишіть " +
            (placeHolderText != "" ? placeHolderText : titleText.toLowerCase())
          }
          placeholderTextColor="rgba(35, 35, 35, 0.5)"
        />
        <View
          style={{
            flex: 1,
            alignSelf: "center",
            justifyContent: "flex-end",
            //backgroundColor: "green",
          }}
        >
          <Text
            style={{
              fontSize: height * 0.018,
              fontWeight: "700",
              alignSelf: "flex-end",
            }}
          >
            {splitter.splitGraphemes(input).length + "/" + maxNumbersInInput}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default TextInputForModalEvent;
