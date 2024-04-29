import { ISubject } from "./ISubject";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { height, width } from "../../../../SemiComponents/Constants/SizeConstants";
import CancelSVG from "../../../../assets/SVG/Main Page SVG/CancelSVG";
import Command from "../Command/Command";
import RealModalWindow from "./RealModalWIndow";

export class ProxyModalWindow implements ISubject {
    command: Command;
    constructor(command:Command){
        this.command=command;
    }
  request(
    isCodeVerify: boolean | null,
    setModalWindow: (state: boolean|null) => void
  ) { 
    
    if (isCodeVerify == null) {
      return null;
    } else if (isCodeVerify == false) {
        const radius=20
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
              <Text style={{ alignSelf: "center",fontSize:17,marginTop:1 }}>{"Неправильний код!"}</Text>
              <View
                style={{
                  borderWidth: 1.5,
                  alignSelf: "center",
                  borderRadius: 100,
                  padding: 6,
                  borderColor: "#CE2500",
                  marginTop: 10,
                }}
              >
                <CancelSVG color="#CE2500" size={width * 0.025} />
              </View>
            </View>
            <TouchableOpacity
            onPress={()=>{setModalWindow(null)}}
              activeOpacity={0.8}
              style={{
                backgroundColor: "white",
                width: width * 0.6,
                height: height * 0.05,
                borderBottomEndRadius: radius,
                borderBottomStartRadius: radius,
                justifyContent:"center"
              }}
            >
              <Text style={{justifyContent:"center",alignSelf:"center",fontSize:17}}>
                {"Ok"}
              </Text>   
            </TouchableOpacity>
          </View>
      </Modal>
      );
    }
    return new RealModalWindow(this.command).request(isCodeVerify, setModalWindow);
  }
}
