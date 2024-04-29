import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { User } from "../../../Models/User";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";

import { useEffect, useRef, useState } from "react";

interface SwipingCardMainProps {
  user: User;
}

const SwipingCardMain: React.FC<SwipingCardMainProps> = ({ user }) => {
  const flatListRef = useRef<FlatList>(null);
  const [position, setPosition] = useState(0);
  const [positionForHeader, setPositionForHeader] = useState(0);
  useEffect(() => {
    setPosition(0);
    setPositionForHeader(0);
    flatListRef.current?.scrollToOffset({
      animated: false,
      offset: 0,
    });
  }, [user]);
  const margin = width * 0.01;
  const widthOfHeaderContainers =
    (width * 0.8) / user.linkToPhoto.length - margin;
  function isWithinRange(result: number, index: number) {
    const isValid =
      index <= Math.floor(0.5 + result) && index >= Math.floor(result - 0.5);
    return isValid;
  }
  function positionOfSwipe(result: number, index: number) {
    return (
      (result / width) * widthOfHeaderContainers -
      widthOfHeaderContainers * index
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          justifyContent: "space-between",
          width: width * 0.8,
          height: height * 0.05,
          zIndex: 10,
          alignSelf: "center",
        }}
      >
        {user.linkToPhoto.map((uri, index) => {
          return (
            <View
              key={index}
              style={{
                height: height * 0.012,
                width: widthOfHeaderContainers,
                alignSelf: "center",
                marginHorizontal: margin / 2,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.4,
                  height: height * 0.012,
                  width: widthOfHeaderContainers,

                  position: "absolute",
                  zIndex: -1,
                }}
              />
              {isWithinRange(positionForHeader / width, index) ? (
                <View
                  style={{
                    backgroundColor: "black",
                    height: height * 0.012,
                    width: widthOfHeaderContainers,
                    position: "absolute",
                    borderRadius: 10,
                    left: positionOfSwipe(positionForHeader, index),
                    zIndex: 10,
                  }}
                />
              ) : null}
            </View>
          );
        })}
      </View>
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        scrollEnabled={false}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          setPositionForHeader(event.nativeEvent.contentOffset.x);
        }}
        data={user.linkToPhoto}
        windowSize={6}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={1}
        renderItem={({ item }) => (
          <Image
            style={{
              width,
              height: width * 1.218,
              borderRadius: 30,
            }}
            source={{ uri: item }}
          />
        )}
      />
      <TouchableOpacity
        onPress={() => {
          if (position == 0) return;
          setPosition(position - width);
          flatListRef.current?.scrollToOffset({
            animated: true,
            offset: position - width,
          });
        }}
        style={{
          height: "100%",
          position: "absolute",
          // backgroundColor: "red",
          // opacity: 0.5,
          width: width * 0.2,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          if (position + width >= user.linkToPhoto.length * width) return;
          flatListRef.current?.scrollToOffset({
            animated: true,
            offset: position + width,
          });
          setPosition(position + width);
        }}
        style={{
          height: "100%",
          position: "absolute",
          //backgroundColor: "red",
          // opacity: 0.5,
          width: width * 0.2,
          right: 0,
        }}
      />
    </View>
  );
};

export default SwipingCardMain;
