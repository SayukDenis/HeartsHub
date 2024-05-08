import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  height,
  statusBarHeight,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";

import { SetStateAction, Dispatch, useState } from "react";
import BackButtonSVG from "../../../../assets/SVG/Semi SVG/BackButtonSVG";
import TextInputForModalEvent from "./TextInputForModalEvent";
import DateInput from "./DateInput";
import ContinueButtonForModalWindowForAddEvent from "./ContinueButtonForModalWindowForAddEvent";
import CategorySelect from "./CategorySelect";

interface ModalWindowForAddEventProps {
  addEvent: boolean;
  setAddEvent: Dispatch<SetStateAction<boolean>>;
}
const ModalWindowForAddEvent: React.FC<ModalWindowForAddEventProps> = ({
  addEvent,
  setAddEvent,
}) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBio, setInputBio] = useState("");
  const [inputAddress, setInputAddres] = useState("");
  const [selectCategory, setSelectCategory] = useState(0);
  const onContinueButtonPress = () => {};
  return (
    <Modal visible={addEvent} transparent={true}>
      <View style={{ alignSelf: "center", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#D9B1B5",
            width: width * 0.95,
            height: height * 0.87,
            borderRadius: 50,
            marginTop: statusBarHeight + 10,
            padding: 25,
            paddingTop: 30,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              width: "100%",
              marginBottom: height * 0.025,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{ width: width * 0.1 }}
              onPress={() => {
                setAddEvent(false);
              }}
              activeOpacity={0.8}
            >
              <BackButtonSVG height={height * 0.13} />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "800",
                fontSize: height * 0.023,
              }}
            >
              {"Заповнення події"}
            </Text>
            <View style={{ width: width * 0.1 }} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInputForModalEvent
              titleText="Заголовок"
              maxNumbersInInput={30}
              input={inputTitle}
              setInput={setInputTitle}
            />
            <TextInputForModalEvent
              titleText="Опис"
              maxNumbersInInput={60}
              input={inputBio}
              setInput={setInputBio}
            />
            <TextInputForModalEvent
              titleText="Адреса"
              maxNumbersInInput={50}
              input={inputAddress}
              setInput={setInputAddres}
              placeHolderText="адресy"
            />
            <DateInput />
            <CategorySelect
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
            />
            <View style={{height:height*0.3}}/>
          </ScrollView>
          <ContinueButtonForModalWindowForAddEvent
            onContinueButtonPress={onContinueButtonPress}
          />
        </View>
      </View>
      <View
        style={{
          height: height,
          position: "absolute",
          backgroundColor: "black",
          width: width,
          opacity: 0.6,
          zIndex: -1,
        }}
      />
    </Modal>
  );
};

export default ModalWindowForAddEvent;
