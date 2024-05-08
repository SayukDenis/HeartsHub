import React, { useRef, useState } from "react";
import SemiMainContainer from "../SemiComponents/SemiMainContainer";
import SemiMainFooterContainer from "../SemiComponents/SemiMainFooterContainer";
import SemiMainTopContainer from "../SemiComponents/SemiMainTopContainer";
import { users } from "../../../Initialization.tsx/InitializationUsers";
import { Animated, PanResponder, View } from "react-native";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";

import EventsFooterButtonContainer from "../Events page/EventsFooterButtonContainer";
import CancelSVG from "../../../assets/SVG/Main Page SVG/CancelSVG";
import SuperLikeSVG from "../../../assets/SVG/Main Page SVG/SuperLikeSVG";
import LikeSVG from "../../../assets/SVG/Main Page SVG/LikeSVG";
import SwipingCardMain from "./SwipingCardMain";
import SwipingCardTitle from "./SwipingCardTitle";
import FillLikeSVG from "../../../assets/SVG/Main Page SVG/FillLikeSVG";
import SuperLikeIconSVG from "../../../assets/SVG/Main Page SVG/SuperLikeIconSVG";
import HeaderOfMainCarouselPage from "../Main carousel page/HeaderOfMainCarouselPage";

const DatingPage = () => {
  const [currentUser, setCurrentUser] = useState(0);
  const [listOfUsers, setListOfUsers] = useState(users);
  const [isEnabledButtons, setIsEnabledButtons] = useState(true);
  const isXMove = useRef(true);
  const [isXMoveState, setIsXMoveState] = useState(true);
  const isFirstMove = useRef(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const durationForSwipeTouch = 300;
  const widthOfSwipe = width / 2;
  const heightOfSwipe = height / 3;
  const angleMax = 5;
  const kef = 6 / 5;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderGrant: (event, gestureState) => {
        pan.setOffset({
          x: (pan.x as any)._value,
          y: (pan.y as any)._value,
        });
        pan.setValue({ x: 0, y: 0 });
        isFirstMove.current = true;
      },
      onPanResponderStart: (event, gestureState) => {},
      onPanResponderMove: (event, gestureState) => {
        const initialDragX = Math.abs(gestureState.dx);
        const initialDragY = Math.abs(gestureState.dy);

        if (isFirstMove.current) {
          isFirstMove.current = false;

          if (initialDragX > initialDragY) {
            isXMove.current = true;
            setIsXMoveState(true);
            pan.x.setValue(gestureState.dx);
          } else if (initialDragY > initialDragX) {
            pan.y.setValue(gestureState.dy);
            isXMove.current = false;
            setIsXMoveState(false);
          }
          return;
        }
        if (isXMove.current) {
          pan.x.setValue(gestureState.dx);
        } else {
          pan.y.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        pan.flattenOffset();
        if (isXMove.current) {
          const distanceToLeft = Math.abs((pan.x as any)._value + widthOfSwipe);
          const distanceToRight = Math.abs(
            widthOfSwipe - (pan.x as any)._value
          );
          const distanceToCenter = Math.abs((pan.x as any)._value);
          let targetPosition: number;

          if (
            distanceToLeft < distanceToRight &&
            distanceToLeft < distanceToCenter
          ) {
            targetPosition = -widthOfSwipe;
          } else if (
            distanceToRight < distanceToLeft &&
            distanceToRight < distanceToCenter
          ) {
            targetPosition = widthOfSwipe;
          } else {
            targetPosition = 0;
          }
          if (targetPosition == 0) {
            Animated.spring(pan, {
              toValue: { x: targetPosition, y: 0 },
              useNativeDriver: false,
            }).start();
            return;
          }

          Animated.timing(pan, {
            toValue: { x: targetPosition, y: 0 },
            duration: 100,
            useNativeDriver: false,
          }).start(() => {
            nextUser();
            Animated.timing(pan, {
              toValue: { x: 0, y: 0 },
              duration: 0,
              useNativeDriver: false,
            }).start();
          });
        } else {
          const distanceToCenter = Math.abs((pan.y as any)._value);
          const distanceToHeight = Math.abs(
            (pan.y as any)._value + heightOfSwipe
          );
          let targetPosition: number;
          if (distanceToCenter > distanceToHeight) {
            targetPosition = height;
          } else {
            targetPosition = 0;
          }
          if (targetPosition == 0) {
            Animated.spring(pan, {
              toValue: { x: targetPosition, y: 0 },
              useNativeDriver: false,
            }).start();

            return;
          }
          Animated.timing(pan, {
            toValue: { x: 0, y: -targetPosition },
            duration: 100,
            useNativeDriver: false,
          }).start(() => {
            nextUser();
            Animated.timing(pan, {
              toValue: { x: 0, y: 0 },
              duration: 0,
              useNativeDriver: false,
            }).start();
          });
        }
      },
    })
  ).current;
  const nextUser = () => {
    setCurrentUser((value) => {
      return value + 1;
    });

    setListOfUsers((prevList) => {
      const newList = [...prevList];
      newList.push(prevList[newList.length - users.length]); // Замість users[0] вставте бажаного юзера зі списку
      return newList;
    });
  };

  const tiltAngle = pan.x.interpolate({
    inputRange: [-widthOfSwipe, widthOfSwipe],
    outputRange: [`-${angleMax}deg`, `${angleMax}deg`],
    extrapolate: "clamp",
  });
  const x = pan.x.interpolate({
    inputRange: [-widthOfSwipe, widthOfSwipe],
    outputRange: [-width * kef, width * kef],
    extrapolate: "clamp",
  });
  const y = pan.y.interpolate({
    inputRange: [-heightOfSwipe, 0, 0],
    outputRange: [-height * 0.8, 0, 0],
    extrapolate: "clamp",
  });
  const opacityOfTextY = pan.y.interpolate({
    inputRange: [-heightOfSwipe, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const opacityOfTextX = pan.x.interpolate({
    inputRange: [-widthOfSwipe, 0, widthOfSwipe],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const opacityForLike = pan.x.interpolate({
    inputRange: [0, widthOfSwipe / 3],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const opacityForSuperLike = pan.y.interpolate({
    inputRange: [-heightOfSwipe / 3, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const opacityForCancel = pan.x.interpolate({
    inputRange: [-widthOfSwipe / 3, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const scaleForX = pan.x.interpolate({
    inputRange: [-widthOfSwipe, 0, widthOfSwipe],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  const scaleForY = pan.y.interpolate({
    inputRange: [-heightOfSwipe, 0],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });
  const scaleForFirstButton = pan.x.interpolate({
    inputRange: [-widthOfSwipe, 0, widthOfSwipe],
    outputRange: [1.2, 1, 1],
    extrapolate: "clamp",
  });
  const scaleForSecondButton = pan.y.interpolate({
    inputRange: [-heightOfSwipe, 0, heightOfSwipe],
    outputRange: [1.2, 1, 1],
    extrapolate: "clamp",
  });
  const scaleForThirdButton = pan.x.interpolate({
    inputRange: [-widthOfSwipe, 0, widthOfSwipe],
    outputRange: [1, 1, 1.2],
    extrapolate: "clamp",
  });

  return (
    <SemiMainContainer>
      <HeaderOfMainCarouselPage leftText={"Знайомства"}  />
      <SemiMainTopContainer>
        {listOfUsers.map((user, index) => {
          if (index >= currentUser + 4 || index < currentUser) {
            return;
          }
          return (
            <Animated.View
              key={index}
              {...(index == currentUser ? panResponder.panHandlers : null)}
              style={
                index >= currentUser + 2
                  ? { zIndex: -10, opacity: 0 }
                  : index == currentUser
                  ? {
                      transform: [
                        { rotateZ: tiltAngle },
                        { translateX: x },
                        { translateY: y },
                      ],
                    }
                  : { zIndex: -10 }
              }
            >
              <View style={{ position: "absolute" }}>
                <Animated.View
                  style={
                    index == currentUser + 1
                      ? {
                          opacity: isXMoveState
                            ? opacityOfTextX
                            : opacityOfTextY,
                        }
                      : null
                  }
                >
                  <SwipingCardTitle user={user} />
                </Animated.View>
                <Animated.View
                  style={[
                    {
                      width: width,
                      height: width * 1.218,
                    },
                    index == currentUser + 1
                      ? {
                          transform: [
                            { scaleX: isXMoveState ? scaleForX : scaleForY },
                            { scaleY: isXMoveState ? scaleForX : scaleForY },
                          ],
                        }
                      : {},
                  ]}
                >
                  <SwipingCardMain user={user} />
                  {index == currentUser ? (
                    <>
                      <Animated.View
                        style={{
                          position: "absolute",
                          bottom: width * 0.05,
                          left: width * 0.05,
                          opacity: opacityForLike,
                        }}
                      >
                        <FillLikeSVG />
                      </Animated.View>
                      <Animated.View
                        style={{
                          position: "absolute",
                          bottom: (-width * 0.05 * 181) / 132,
                          alignSelf: "center",
                          opacity: opacityForSuperLike,
                        }}
                      >
                        <SuperLikeIconSVG />
                      </Animated.View>
                      <Animated.View
                        style={{
                          position: "absolute",
                          bottom: width * 0.05,
                          right: width * 0.05,
                          opacity: opacityForCancel,
                        }}
                      >
                        <CancelSVG color="#B00000" size={width * 0.1} />
                      </Animated.View>
                    </>
                  ) : null}
                </Animated.View>
              </View>
            </Animated.View>
          );
        })}
      </SemiMainTopContainer>
      <SemiMainFooterContainer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "center",
            width: "60%",
            height: "100%",
            // backgroundColor: "red",
          }}
        >
          <Animated.View
            style={{
              alignSelf: "center",
              transform: [
                { scaleX: scaleForFirstButton },
                { scaleY: scaleForFirstButton },
              ],
            }}
          >
            <EventsFooterButtonContainer
              disabled={isEnabledButtons}
              onPress={() => {
                if (
                  Math.round((pan.x as any)._value) != 0 ||
                  Math.round((pan.y as any)._value) != 0
                ) {
                  return;
                }
                setIsXMoveState(true);
                setIsEnabledButtons(false);
                Animated.timing(pan, {
                  toValue: { x: -widthOfSwipe, y: 0 },
                  duration: durationForSwipeTouch,
                  useNativeDriver: false,
                }).start(() => {
                  nextUser();

                  Animated.timing(pan, {
                    toValue: { x: 0, y: 0 },
                    duration: 0,
                    useNativeDriver: false,
                  }).start(() => {
                    setIsEnabledButtons(true);
                  });
                });
              }}
            >
              <CancelSVG />
            </EventsFooterButtonContainer>
          </Animated.View>
          <Animated.View
            style={{
              alignSelf: "center",
              transform: [
                { scaleX: scaleForSecondButton },
                { scaleY: scaleForSecondButton },
              ],
            }}
          >
            <EventsFooterButtonContainer
              disabled={isEnabledButtons}
              onPress={() => {
                if (
                  Math.round((pan.x as any)._value) != 0 ||
                  Math.round((pan.y as any)._value) != 0
                ) {
                  return;
                }
                setIsXMoveState(false);
                setIsEnabledButtons(false);
                Animated.timing(pan, {
                  toValue: { x: 0, y: -heightOfSwipe },
                  duration: durationForSwipeTouch,
                  useNativeDriver: false,
                }).start(() => {
                  nextUser();
                  Animated.timing(pan, {
                    toValue: { x: 0, y: 0 },
                    duration: 0,
                    useNativeDriver: false,
                  }).start(() => {
                    setIsEnabledButtons(true);
                  });
                });
              }}
            >
              <SuperLikeSVG />
            </EventsFooterButtonContainer>
          </Animated.View>
          <Animated.View
            style={{
              alignSelf: "center",
              transform: [
                { scaleX: scaleForThirdButton },
                { scaleY: scaleForThirdButton },
              ],
            }}
          >
            <EventsFooterButtonContainer
              disabled={isEnabledButtons}
              onPress={() => {
                if (
                  Math.round((pan.x as any)._value) != 0 ||
                  Math.round((pan.y as any)._value) != 0
                ) {
                  return;
                }
                setIsXMoveState(true);
                setIsEnabledButtons(false);
                Animated.timing(pan, {
                  toValue: { x: widthOfSwipe, y: 0 },
                  duration: durationForSwipeTouch,
                  useNativeDriver: false,
                }).start(() => {
                  nextUser();
                  Animated.timing(pan, {
                    toValue: { x: 0, y: 0 },
                    duration: 0,
                    useNativeDriver: false,
                  }).start(() => {
                    setIsEnabledButtons(true);
                  });
                });
              }}
            >
              <LikeSVG />
            </EventsFooterButtonContainer>
          </Animated.View>
        </View>
      </SemiMainFooterContainer>
    </SemiMainContainer>
  );
};

export default DatingPage;
