import { Component, RefObject, createRef } from "react";
import { AdaptedRegistrationPage } from "../../../../Authorization/Abstract classes and interfaces/Template method/AdaptedRegistrationPage";
import { IStrategy } from "../../../../Authorization/Abstract classes and interfaces/Strategy/Strategy";
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Command from "../../../../Authorization/Abstract classes and interfaces/Command/Command";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSelectedAuthorizationPage,
} from "../../../../../redux/Authorization/Actions";
import React from "react";
import Header from "../../../Settings Category Carousel/Header";
import BackGroundGradinetView from "../../../../../SemiComponents/BackGround/BackGroundGradientView";
import {
  height,
  width,
} from "../../../../../SemiComponents/Constants/SizeConstants";
import {
  selectAuthorizationPage,
  selectFulfillmentOfConditionForNextButtonAuthorization,
  selectIsEnableNextButtonAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../../../redux/Authorization/selectors";
import { connect } from "react-redux";
import ConfirmButton from "./ConfirmButton";
import ConfirmModalWindow from "./ConfirmModalWindow";
import { Dispatch, UnknownAction } from "redux";
import { isFulfilled } from "@reduxjs/toolkit";

interface SecurityStrategyProps {
  listOfPages: AdaptedRegistrationPage[];
}

class SecurityStrategy
  extends Component<SecurityStrategyProps>
  implements IStrategy
{
  listOfPages: AdaptedRegistrationPage[];
  scrollViewRef: RefObject<ScrollView> = createRef<ScrollView>();
  dispatch: Dispatch<UnknownAction>;
  constructor(props: any) {
    super(props);
    this.listOfPages = props.listOfPages;
    this.dispatch = props.dispatch;
    
    this.state = { modalWindow: false, dispatch: this.dispatch };
    this.dispatch(setSelectedAuthorizationPage(1));
  }

  pressOnBackButton = () => {
    const { page }: any = this.props;

    this.dispatch(setSelectedAuthorizationPage(page - 1));
    this.scrollViewRef.current?.scrollTo({ x: page - 2, y: 0, animated: true });
  };
  pressOnNextButton() {
  
  }


  componentDidUpdate(prevProps: any) {
    const { fulfillmentOfConditionForNextButtonAuthorization, page,isPressedNextButtonAuthorization }: any =
      this.props;

    if (
      fulfillmentOfConditionForNextButtonAuthorization 
    ) {
      if (this.listOfPages.length == page) {
        this.setState({ modalWindow: true });
      } else {
        this.dispatch(setSelectedAuthorizationPage(page + 1));
        this.scrollViewRef.current?.scrollTo({
          x: page * width,
          y: 0,
          animated: true,
        });
      }
      this.dispatch(
        setFulfillmentOfTheConditionForTheNextButtonAuthorization(false)
      );
    }
  }

  render() {
    const { isEnableNextButtonAuthorization, page }: any = this.props;
    const { modalWindow }: any = this.state;
    return modalWindow ? (
      <ConfirmModalWindow />
    ) : (
      <BackGroundGradinetView>
        <Header />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ height }}>
            <ScrollView
              ref={this.scrollViewRef}
              horizontal
              style={{ width }}
              scrollEnabled={false}
              pagingEnabled
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
            >
              {this.listOfPages.map(
                (component: AdaptedRegistrationPage, index: number) => {
                  return (
                    <View style={{ width }} key={index + 1}>
                      {component.render()}
                    </View>
                  );
                }
              )}
            </ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "column-reverse",
              }}
            >
              <ConfirmButton
                showBackButton={page >= 2}
                isConfirmButtonEnabled={isEnableNextButtonAuthorization}
                pressOnConfirmButton={this.pressOnNextButton}
                pressOnBackButton={this.pressOnBackButton}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </BackGroundGradinetView>
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
export default connect(mapStateToProps)(SecurityStrategy);
