import React, { ReactNode } from "react";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../../../../SemiComponents/Constants/SizeConstants";

interface SafeAreaContainerProps{
    children?:ReactNode;
}
const  SafeAreaContainer:React.FC<SafeAreaContainerProps>=({children})=>{
    return <View
    style={{
      position: "absolute",
      width,
      bottom: Platform.OS === "ios" ? useSafeAreaInsets().bottom : 0,
    }}
  >
        {children}
    </View>
}

export default SafeAreaContainer;