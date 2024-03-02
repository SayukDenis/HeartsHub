import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackAndNextButton from "../../SemiComponents/Buttons/Authorization buttons/BackAndNextButton";
import AuthorizationProgresBar from "../../SemiComponents/Other/AuthorizationProgresBar";
import BackGroundGradientView from "../../SemiComponents/BackGround/BackGroundGradientView";
import { height, width } from "../../SemiComponents/Constants/SizeConstants";
import EnteringAnEmailAddressPage from "../Entering an email address page/EnteringAnEmailAddressPage";
import VerifyCodePage from "../Verify code page/VerifyCodePage";
import {
  selectFulfillmentOfConditionForNextButtonAuthorization,
  selectIsEnableNextButtonAuthorization,
} from "../../redux/Authorization/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmailForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setGenderForAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setNameForAuthorization,
  setSexualOrientationForAuthorization,
  setSurnameForAuthorization,
} from "../../redux/Authorization/Actions";
import EnterNameAndSurnamePage from "../Enter name and surname page/EnterNameAndSurnamePage";
import EnteringBirthdayPage from "../Entering a birthday page/EnteringBirthdayPage";
import EnteringYourGenderPage from "../Entering your gender page/EnteringYourGenderPage";
import IntroductionOfSexualOrientationPage from "../Introduction of sexual orientation page/IntroductionOfSexualOrientationPage";
import { initialStateForAuthorizationForm } from "../../redux/Authorization/Reducer";
interface AuthorizationCarouselProps {
  navigation: any;
}

const AuthorizationCarousel: React.FC<AuthorizationCarouselProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const isEnableNextButtonAuthorization = useSelector(
    selectIsEnableNextButtonAuthorization
  );
  const fulfillmentOfConditionForNextButtonAuthorization = useSelector(
    selectFulfillmentOfConditionForNextButtonAuthorization
  );

  const pages = [
    EnteringAnEmailAddressPage,
    VerifyCodePage,
    EnterNameAndSurnamePage,
    EnteringBirthdayPage,
    EnteringYourGenderPage,
    IntroductionOfSexualOrientationPage,
  ];
  const scrollViewRef = useRef<ScrollView>(null);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const pressOnBackButton = () => {
    if (page == 1) {
      dispatch(
        setEmailForAuthorization(initialStateForAuthorizationForm.email)
      );
      dispatch(setNameForAuthorization(initialStateForAuthorizationForm.name));
      dispatch(
        setSurnameForAuthorization(initialStateForAuthorizationForm.surname)
      );
      dispatch(
        setGenderForAuthorization(initialStateForAuthorizationForm.gender)
      );
      dispatch(
        setSexualOrientationForAuthorization(
          initialStateForAuthorizationForm.sexualOrientation
        )
      );
      navigation.goBack();
    }
    if (page == 3) {
      scrollViewRef.current?.scrollTo({
        x: (page - 3) * width,
        y: 0,
        animated: true,
      });
      setPage(page - 2);
      Keyboard.dismiss();
      return;
    }
    scrollViewRef.current?.scrollTo({
      x: (page - 2) * width,
      y: 0,
      animated: true,
    });
    setPage(page - 1);
    Keyboard.dismiss();
  };
  const pressOnNextButton = () => {
    dispatch(setIsPressedNextButtonAuthorization(true));
  };
  useEffect(() => {
    if (fulfillmentOfConditionForNextButtonAuthorization) {
      scrollViewRef.current?.scrollTo({
        x: page * width,
        y: 0,
        animated: true,
      });
      setPage(page + 1);
      Keyboard.dismiss();
      dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(false)
      );
      dispatch(setIsEnableNextButtonAuthorization(false));
    }
  }, [fulfillmentOfConditionForNextButtonAuthorization]);
  const onCarouselScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setProgress(event.nativeEvent.contentOffset.x);
  };

  return (
    <BackGroundGradientView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ height }}>
          <AuthorizationProgresBar progress={progress} />
          <ScrollView
            ref={scrollViewRef}
            horizontal
            style={{ width }}
            scrollEnabled={false}
            pagingEnabled
            onScroll={onCarouselScroll}
            scrollEventThrottle={16}
          >
            {pages.map((PageComponent: any, index: number) => {
              if (Math.abs(page - (index + 1)) > 1) {
                return <View key={index + 1} style={{ width }} />;
              }
              return (
                <PageComponent
                  index={index + 1}
                  isSelected={index + 1 == page}
                  key={index + 1}
                />
              );
            })}
          </ScrollView>
          <View
            style={{
              flex: 1,
              //backgroundColor: "blue",
              flexDirection: "column-reverse",
            }}
          >
            <BackAndNextButton
              isNextButtonEnabled={isEnableNextButtonAuthorization}
              pressOnBackButton={pressOnBackButton}
              pressOnNextButton={pressOnNextButton}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </BackGroundGradientView>
  );
};
export default AuthorizationCarousel;
