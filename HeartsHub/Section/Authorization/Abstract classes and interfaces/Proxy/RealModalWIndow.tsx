import { ISubject } from "./ISubject";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import {
  setEmailForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import Command from "../Command/Command";
import CheckBoxSVG from "../../../../assets/SVG/Authorization SVG/CheckBoxSVG";
import { selectBufferEmail } from "../../../../redux/Authorization/selectors";
import ButtonConnectToServer from "./ButtonConnectToServer";

class RealModalWindow implements ISubject {
  command: Command;
  constructor(command: Command) {
    this.command = command;
  }
  request(
    isCodeVerify: boolean | null,
    setModalWindow: (state: boolean | null) => void
  ) {
    const radius = 20;
    return (
      <Modal
        visible={true}
        transparent={true}
        style={{ justifyContent: "center", flex: 1 }}
      >
        <View
          style={{
            height: height,
            width: width,
            position: "absolute",
            zIndex: -1,
            backgroundColor: "black",
            opacity: 0.3,
          }}
        />
        <View
          style={{ justifyContent: "center", alignSelf: "center", flex: 1 }}
        >
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              width: width * 0.6,
              height: height * 0.11,
              backgroundColor: "white",
              borderTopEndRadius: radius,
              borderTopStartRadius: radius,
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ alignSelf: "center", fontSize: 17, marginTop: 1 }}>
              {"Правильний код!"}
            </Text>
            <View
              style={{
                borderWidth: 1.5,
                alignSelf: "center",
                borderRadius: 100,
                padding: 6,
                borderColor: "#26B03C",
                marginTop: 10,
              }}
            >
              <CheckBoxSVG
                color="#26B03C"
                widthOfCheckBox={width * 0.1}
                strokeWidth={5}
              />
            </View>
          </View>
          <ButtonConnectToServer setModalWindow={setModalWindow} />
        </View>
      </Modal>
    );
  }
}


export default RealModalWindow;
