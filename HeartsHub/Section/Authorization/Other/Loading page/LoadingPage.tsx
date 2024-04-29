import { Animated, Easing, Image, Modal, Text, View } from "react-native";
import BackGroundGradinetView from "../../../../SemiComponents/BackGround/BackGroundGradientView";
import { useEffect, useRef, useState } from "react";
import {
  heightOfMainTitle,
  marginBetweenTitles,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import HeartsHubIconSVG from "../../../../assets/SVG/Semi SVG/HeartsHubIconSVG";

const LoadingPage = () => {
  const [isModalWindowVisible, setIsModalWindowVisible] = useState(true);
  const widthOfSvg = width * 0.1;
  const radiusOfLoading = width * 0.15;
  const rotationValue = useRef(new Animated.Value(0)).current;
  const duration =800;
  const startAnimation = () => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startAnimation();
   setTimeout(() => {
      setIsModalWindowVisible(false);
    }, duration * 2);
  }, []);
  return (
    <Modal visible={isModalWindowVisible} transparent>
      <BackGroundGradinetView>
        <View
          style={{
            //marginTop: statusBarHeight,
            //backgroundColor: "green",
            alignSelf: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{ justifyContent: "space-around", flexDirection: "row" }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: heightOfMainTitle,
                fontWeight: "700",
                //fontFamily:"Rubik"
              }}
            >
              {"HeartsHub"}
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                position: "absolute",
                right: -widthOfSvg - 10,
                paddingTop: 10,
              }}
            >
              <HeartsHubIconSVG widthOfSvg={widthOfSvg} />
            </View>
          </View>
          <Text
            style={{
              marginTop: marginBetweenTitles,
              alignSelf: "center",
              color: "white",
              fontSize: heightOfMainTitle / 2,
              fontWeight: "300",
            }}
          >
            {"Знаходь своє щастя"}
          </Text>
          <Animated.View
            style={{
              alignSelf: "center",
              //justifyContent: "center",
              marginTop: marginBetweenTitles,
              transform: [
                {
                  rotate: rotationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            }}
          >
            {/*<View
              style={{
                position: "absolute",
                width: radiusOfLoading*0.8,
                aspectRatio: 1,
                backgroundColor: "red",
                alignSelf: "center",
                borderRadius:1000
              }}
            ></View>*/}

            <View
              style={{
                justifyContent: "center",
                height: (65 * radiusOfLoading) / 47,
                aspectRatio: 1,

                borderRadius: radiusOfLoading,
              }}
            >
             
              <Image
                source={require("../../../../assets/PNG/Semi PNG/LoadingPNG.png")}
                style={{
                  width: radiusOfLoading,
                  height: (65 * radiusOfLoading) / 47,
                }}
              />
            </View>
          </Animated.View>
        </View>
      </BackGroundGradinetView>
    </Modal>
  );
};

export default LoadingPage;
