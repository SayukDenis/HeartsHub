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
  selectBufferEmail,
  selectEmailForAuthorization,
  selectFulfillmentOfConditionForNextButtonAuthorization,
  selectIsEnableNextButtonAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../redux/Authorization/selectors";
import { connect } from "react-redux";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setId,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSelectedAuthorizationPage,
} from "../../../redux/Authorization/Actions";
import { IStrategy } from "../Abstract classes and interfaces/Strategy/Strategy";
import Facade from "../Abstract classes and interfaces/Facade/Facade";
import { AdaptedRegistrationPage } from "../Abstract classes and interfaces/Template method/AdaptedRegistrationPage";
import { Dispatch, UnknownAction } from "redux";
import { v4 as uuidv4 } from "uuid";
import { updateAuthObjectInDao } from "../../../Local dao/Initialiazation";

class AuthorizationCarousel extends Component implements IStrategy {
  listOfPages: AdaptedRegistrationPage[];
  scrollViewRef: RefObject<ScrollView>;
  private dispatch: Dispatch<UnknownAction>;
  constructor(props: any) {
    super(props);
    const facade = new Facade();
    this.state = {
      progress: 0,
    };
    this.listOfPages = facade.getRegistrationPages();
    this.scrollViewRef = createRef();
    this.dispatch = props.dispatch;
  }
  pressOnBackButton = () => {
    const { page }: any = this.props;
    if (page == 1) {
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
      this.dispatch(setSelectedAuthorizationPage(page - 2));
      Keyboard.dismiss();
      return;
    }
    this.scrollViewRef.current?.scrollTo({
      x: (page - 2) * width,
      y: 0,
      animated: true,
    });
    this.dispatch(setSelectedAuthorizationPage(page - 1));
    Keyboard.dismiss();
  };
  pressOnNextButton = () => {
    this.dispatch(setIsPressedNextButtonAuthorization(true));
  };
  componentDidMount(): void {}
  componentDidUpdate(prevProps: any) {
    const {
      fulfillmentOfConditionForNextButtonAuthorization,
      email,
      bufferEmail,
    }: any = this.props;
    const old = prevProps.fulfillmentOfConditionForNextButtonAuthorization;

    if (
      fulfillmentOfConditionForNextButtonAuthorization &&
      old != fulfillmentOfConditionForNextButtonAuthorization
    ) {
      const { page }: any = this.props;
      if (page == this.listOfPages.length) {
        updateAuthObjectInDao("id",
          (Math.floor(Math.random() * 100000000000) + 1).toString()
        );
        (this.props as any).navigation.reset({
          index: 0,
          routes: [{ name: "MainCarouselPageNavigation" as never }],
        });
      }
      if (page == 1 && email != "" && bufferEmail == email) {
        this.scrollViewRef.current?.scrollTo({
          x: (page + 1) * width,
          y: 0,
          animated: true,
        });
        this.dispatch(setSelectedAuthorizationPage(page + 2));
        Keyboard.dismiss();

        this.dispatch(setIsEnableNextButtonAuthorization(false));
        this.dispatch(
          setFulfillmentOfTheConditionForTheNextButtonAuthorization(false)
        );
        return;
      }
      this.scrollViewRef.current?.scrollTo({
        x: page * width,
        y: 0,
        animated: true,
      });
      this.dispatch(setSelectedAuthorizationPage(page + 1));
      Keyboard.dismiss();

      this.dispatch(setIsEnableNextButtonAuthorization(false));
    }
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(false)
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
  bufferEmail: selectBufferEmail(state),
  email: selectEmailForAuthorization(state),
});
export default connect(mapStateToProps)(AuthorizationCarousel);
