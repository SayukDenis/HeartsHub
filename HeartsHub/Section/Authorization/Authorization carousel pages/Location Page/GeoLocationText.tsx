import { Platform, ScrollView, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getCitiesByLocation, getLocationData, stringBuilder } from "./Functions";
import { LocalityData } from "../../../../assets/Data/locality";

interface GeoLocationTextProps {
  selectLocation: LocalityData;
  setSelectLocation: (loc: LocalityData|null) => void;
}

const GeoLocationText: React.FC<GeoLocationTextProps> = ({selectLocation,setSelectLocation}) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        const isAndroid = Platform.OS == "android";
        const location = await Location.getCurrentPositionAsync({
          accuracy: isAndroid
            ? Location.Accuracy.Low
            : Location.Accuracy.Lowest,
        });

        setLocation(location);
      } catch (error) {
        setErrorMsg(`Error: ${(error as any).message}`);
      }
    };
    getLocation();
  }, []);
  useEffect(() => {
    const loc=getCitiesByLocation(location?.coords.latitude, location?.coords.longitude);
    setSelectLocation(loc)
  }, [location]);
  return (
    <ScrollView
      horizontal
      style={{
        width: "85%",
        alignSelf: "center",
        height: "100%",
        marginRight: width * 0.02,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        style={{
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "100%",
        }}
        activeOpacity={1}
      >
        <Text
          style={{
            color: "black",
            fontSize: height * 0.02,
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          {location!=null?stringBuilder(selectLocation):""}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GeoLocationText;
