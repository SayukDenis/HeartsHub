import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";
import { height, width } from "../../../../SemiComponents/Constants/SizeConstants";
import { useEffect, useRef, useState } from "react";
import {
  isValidDateAndNotExpired,
  isValidDateWithTimeAndNotExpired,
  isValidTime,
} from "./Functions";

interface DateInputProps {}

const DateInput: React.FC<DateInputProps> = () => {
  const [dayInput, setDayInput] = useState("20");
  const [monthInput, setMonthInput] = useState("05");
  const [yearInput, setYearInput] = useState("2024");
  const [hourInput, setHourInput] = useState("23");
  const [minuteInput, setMinuteInput] = useState("23");
  const dayInputRef = useRef<TextInput>(null);
  const monthInputRef = useRef<TextInput>(null);
  const yearInputRef = useRef<TextInput>(null);
  const hourInputRef = useRef<TextInput>(null);
  const minuteInputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (
      isValidDateWithTimeAndNotExpired(
        yearInput,
        monthInput,
        dayInput,
        hourInput,
        minuteInput
      )
    ) {
    } else {
    }
  }, [
    isValidDateWithTimeAndNotExpired(
      yearInput,
      monthInput,
      dayInput,
      hourInput,
      minuteInput
    ),
  ]);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{ fontWeight: "700", fontSize: height * 0.019, marginBottom: 5 }}
      >
        {"Дата і час"}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            padding: 10,
            borderWidth: 2,
            flexDirection: "row",
            borderRadius: 15,
            width: width * 0.3,
            borderColor:
              isValidDateAndNotExpired(yearInput, monthInput, dayInput) == false
                ? "#FFEF60"
                : "black",
          }}
        >
          <View style={{ flexDirection: "row", width: "80%" }}>
            <TextInput
              keyboardType="number-pad"
              style={[style.text, { width: "28%" }]}
              placeholder="00"
              placeholderTextColor="rgba(35, 35, 35, 0.5)"
              maxLength={2}
              value={dayInput}
              onChangeText={(text) => {
                setDayInput(text);
                if (text.length == 2) {
                  monthInputRef.current?.focus();
                }
              }}
              returnKeyType="done"
              ref={dayInputRef}
              onSubmitEditing={(
                event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
              ) => {
                monthInputRef.current?.focus();
              }}
            />
            <Text style={[style.text]}>{"."}</Text>
            <TextInput
              keyboardType="number-pad"
              style={[style.text, { width: "28%" }]}
              placeholder="00"
              placeholderTextColor="rgba(35, 35, 35, 0.5)"
              maxLength={2}
              value={monthInput}
              onChangeText={(text) => {
                setMonthInput(text);
                if (text.length == 2) {
                  yearInputRef.current?.focus();
                }
              }}
              ref={monthInputRef}
              returnKeyType="done"
              onKeyPress={(
                nativeEvent: NativeSyntheticEvent<TextInputKeyPressEventData>
              ) => {
                if (
                  nativeEvent.nativeEvent.key == "Backspace" &&
                  monthInput == ""
                ) {
                  dayInputRef.current?.focus();
                }
              }}
            />
            <Text style={[style.text]}>{"."}</Text>
            <TextInput
              keyboardType="number-pad"
              style={[style.text, { width: "56%" }]}
              placeholder="0000"
              placeholderTextColor="rgba(35, 35, 35, 0.5)"
              maxLength={4}
              value={yearInput}
              onChangeText={(text) => {
                setYearInput(text);
                if (text.length == 4) {
                  hourInputRef.current?.focus();
                }
              }}
              onKeyPress={(
                nativeEvent: NativeSyntheticEvent<TextInputKeyPressEventData>
              ) => {
                if (
                  nativeEvent.nativeEvent.key == "Backspace" &&
                  yearInput == ""
                ) {
                  monthInputRef.current?.focus();
                }
              }}
              ref={yearInputRef}
              returnKeyType="done"
            />
          </View>
        </View>
        <View
          style={{
            padding: 10,
            borderWidth: 2,
            flexDirection: "row",
            borderRadius: 15,
            width: "22%",
            marginLeft: 20,
            borderColor:
              (isValidDateAndNotExpired(yearInput, monthInput, dayInput) ==
                true &&
                isValidDateWithTimeAndNotExpired(
                  yearInput,
                  monthInput,
                  dayInput,
                  hourInput,
                  minuteInput
                ) == false) ||
              isValidTime(hourInput, minuteInput) == false
                ? "#FFEF60"
                : "black",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              //backgroundColor: "red",
            }}
          >
            <TextInput
              keyboardType="number-pad"
              style={[
                style.text,
                {
                  width: "48%",
                  //  backgroundColor: "green",
                },
              ]}
              placeholder="00"
              placeholderTextColor="rgba(35, 35, 35, 0.5)"
              maxLength={2}
              value={hourInput}
              onChangeText={(text) => {
                setHourInput(text);
                if (text.length == 2) {
                  minuteInputRef.current?.focus();
                }
              }}
              ref={hourInputRef}
              returnKeyType="done"
              onKeyPress={(
                nativeEvent: NativeSyntheticEvent<TextInputKeyPressEventData>
              ) => {
                if (
                  nativeEvent.nativeEvent.key == "Backspace" &&
                  hourInput == ""
                ) {
                  yearInputRef.current?.focus();
                }
              }}
            />
            <Text style={[style.text]}>{":"}</Text>
            <TextInput
              keyboardType="number-pad"
              style={[
                style.text,
                {
                  width: "48%",
                  //  backgroundColor: "green",
                },
              ]}
              placeholder="00"
              placeholderTextColor="rgba(35, 35, 35, 0.5)"
              maxLength={2}
              value={minuteInput}
              onChangeText={(text) => {
                setMinuteInput(text);
                if (text.length == 2) {
                  minuteInputRef.current?.blur();
                }
              }}
              onKeyPress={(
                nativeEvent: NativeSyntheticEvent<TextInputKeyPressEventData>
              ) => {
                if (
                  nativeEvent.nativeEvent.key == "Backspace" &&
                  minuteInput == ""
                ) {
                  hourInputRef.current?.focus();
                }
              }}
              ref={minuteInputRef}
              returnKeyType="done"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  text: { color: "black", fontSize: height * 0.018, fontWeight: "800" },
});
export default DateInput;
