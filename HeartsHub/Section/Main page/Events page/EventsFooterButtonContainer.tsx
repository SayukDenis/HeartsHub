import React, { ReactNode } from "react";
import { View, Platform, TouchableOpacity } from "react-native";
import { width } from "../../../SemiComponents/Constants/SizeConstants";

interface EventsFooterButtonContainerProps {
  children?: ReactNode;
  onPress?: () => void;
  disabled?:boolean
}

const EventsFooterButtonContainer: React.FC<
  EventsFooterButtonContainerProps
> = ({ children, onPress,disabled=true }) => {
  return (
    <TouchableOpacity
      disabled={!disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          width: width*0.13,
          aspectRatio: 1,
          alignSelf: "center",
          borderRadius: 1000,
          justifyContent: "center",
          backgroundColor: "#CBA5AB",
          ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
            },
            android: {
              elevation: 4,
              backgroundColor: 'transparent',
              borderWidth: 0.5,
              borderColor: '#000000',
              borderRadius: 10,
            },
          }),
        },
      ]}
    >
      <View style={{ alignSelf: "center" }}>{children}</View>
    </TouchableOpacity>
  );
};

export default EventsFooterButtonContainer;
