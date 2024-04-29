import React, {
  Component,
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackAndNextButton from "../../../SemiComponents/Buttons/Authorization buttons/BackAndNextButton";
import AuthorizationProgresBar from "../../../SemiComponents/Other/AuthorizationProgresBar";
import BackGroundGradientView from "../../../SemiComponents/BackGround/BackGroundGradientView";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";
import {
  selectAuthorizationPage,
  selectFulfillmentOfConditionForNextButtonAuthorization,
  selectIsEnableNextButtonAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../redux/Authorization/selectors";
import { connect } from "react-redux";
import {
  setEmailForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setGenderForAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setNameForAuthorization,
  setSelectedAuthorizationPage,
  setSexualOrientationForAuthorization,
  setSurnameForAuthorization,
} from "../../../redux/Authorization/Actions";
import { initialStateForAuthorizationForm } from "../../../redux/Authorization/Reducer";

import { IStrategy } from "../Abstract classes and interfaces/Strategy/Strategy";
import Command from "../Abstract classes and interfaces/Command/Command";
import Facade from "../Abstract classes and interfaces/Facade/Facade";
import { AdaptedRegistrationPage } from "../Abstract classes and interfaces/Template method/AdaptedRegistrationPage";

class AuthorizationCarousel extends Component implements IStrategy {
  listOfPages: AdaptedRegistrationPage[];
  scrollViewRef: RefObject<ScrollView>;
  private command: Command;
  constructor(props: any) {
    super(props);
    const facade = new Facade();
    this.state = {
      progress: 0,
    };
    this.listOfPages = facade.getRegistrationPages();
    this.scrollViewRef = createRef();
    this.command = new Command({
      dispatch: props.dispatch,
    });
  }
  pressOnBackButton = () => {
    const { page }: any = this.props;
    if (page == 1) {
      this.command.update(
        setEmailForAuthorization,
        initialStateForAuthorizationForm.email
      );
      this.command.update(
        setNameForAuthorization,
        initialStateForAuthorizationForm.name
      );
      this.command.update(
        setSurnameForAuthorization,
        initialStateForAuthorizationForm.surname
      );
      this.command.update(
        setGenderForAuthorization,
        initialStateForAuthorizationForm.gender
      );
      this.command.update(
        setSexualOrientationForAuthorization,
        initialStateForAuthorizationForm.sexualOrientation
      );
      const { navigation }: any = this.props;
      navigation.goBack();
      return;
    }
    if (page == 3) {
      this.scrollViewRef.current?.scrollTo({
        x: (page - 3) * width,
        y: 0,
        animated: true,
      });
      this.command.update(setSelectedAuthorizationPage, page - 2);
      Keyboard.dismiss();
      return;
    }
    this.scrollViewRef.current?.scrollTo({
      x: (page - 2) * width,
      y: 0,
      animated: true,
    });
    this.command.update(setSelectedAuthorizationPage, page - 1);
    Keyboard.dismiss();
  };
  pressOnNextButton = () => {
    this.command.update(setIsPressedNextButtonAuthorization, true);
  };
  componentDidMount(): void {}
  componentDidUpdate(prevProps: any) {
    const { fulfillmentOfConditionForNextButtonAuthorization }: any =
      this.props;
    const old = prevProps.fulfillmentOfConditionForNextButtonAuthorization;

    if (
      fulfillmentOfConditionForNextButtonAuthorization &&
      old != fulfillmentOfConditionForNextButtonAuthorization
    ) {
      const { page }: any = this.props;
      if (page == this.listOfPages.length) {
        (this.props as any).navigation.reset({
          index: 0,
          routes: [{ name: "MainCarouselPageNavigation" as never }],
        });
      }
      this.scrollViewRef.current?.scrollTo({
        x: page * width,
        y: 0,
        animated: true,
      });
      this.command.update(setSelectedAuthorizationPage, page + 1);
      Keyboard.dismiss();

      this.command.update(setIsEnableNextButtonAuthorization, false);
    }
    this.command.update(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization,
      false
    );
  }
  render() {
    const { isEnableNextButtonAuthorization, page }: any = this.props;
    return (
      <BackGroundGradientView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ height }}>
            <AuthorizationProgresBar
              progress={(this.state as any).progress}
              pagesLength={this.listOfPages.length + 1}
            />
            <ScrollView
              ref={this.scrollViewRef}
              horizontal
              style={{ width }}
              scrollEnabled={false}
              pagingEnabled
              onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
                this.setState({ progress: event.nativeEvent.contentOffset.x });
              }}
              scrollEventThrottle={16}
            >
              {this.listOfPages.map(
                (component: AdaptedRegistrationPage, index: number) => {
                  if (Math.abs(page - (index + 1)) > 1) {
                    return <View key={index + 1} style={{ width }} />;
                  }

                  return <View key={index + 1}>{component.render()}</View>;
                }
              )}
            </ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "column-reverse",
              }}
            >
              <BackAndNextButton
                isNextButtonEnabled={isEnableNextButtonAuthorization}
                pressOnBackButton={this.pressOnBackButton}
                pressOnNextButton={this.pressOnNextButton}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </BackGroundGradientView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isEnableNextButtonAuthorization: selectIsEnableNextButtonAuthorization(state),
  fulfillmentOfConditionForNextButtonAuthorization:
    selectFulfillmentOfConditionForNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
});
export default connect(mapStateToProps)(AuthorizationCarousel);
