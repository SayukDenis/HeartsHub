import React, { Component, RefObject, createRef } from "react";
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackGroundGradientView from "../../../SemiComponents/BackGround/BackGroundGradientView";
import {
  height,
  statusBarHeight,
  width,
} from "../../../SemiComponents/Constants/SizeConstants";
import {
  selectAuthorizationPage,
  selectFulfillmentOfConditionForNextButtonAuthorization,
  selectIsEnableNextButtonAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../redux/Authorization/selectors";
import { connect } from "react-redux";
import {
  setIsPressedNextButtonAuthorization,
  setSelectedAuthorizationPage,
} from "../../../redux/Authorization/Actions";
import { AdaptedRegistrationPage } from "../../Authorization/Abstract classes and interfaces/Template method/AdaptedRegistrationPage";
import Command from "../../Authorization/Abstract classes and interfaces/Command/Command";
import { IStrategy } from "../../Authorization/Abstract classes and interfaces/Strategy/Strategy";
import ControlPanelForSettingsCarousel from "./ControlPanelForSettingsCarousel";
import Header from "./Header";

interface SettingsCategoryCarouselProps {
  listOfPages: AdaptedRegistrationPage[];
  id: number;
}

class SettingsCategoryCarousel
  extends Component<SettingsCategoryCarouselProps>
  implements IStrategy
{
  listOfPages: AdaptedRegistrationPage[];
  scrollViewRef: RefObject<ScrollView> = createRef<ScrollView>();
  private command: Command;
  constructor(props: any) {
    super(props);
    this.listOfPages = props.listOfPages;
    this.command = new Command({
      dispatch: props.dispatch,
    });
    this.command.update(setSelectedAuthorizationPage, this.props.id + 1);
  }
  pressOnBackButton = () => {
    this.getNewArray(1, this.props.listOfPages);
    Keyboard.dismiss();
  };
  pressOnNextButton = () => {
    this.getNewArray(3, this.props.listOfPages);
    Keyboard.dismiss();
  };
  getNewArray = (index: number, startArray: AdaptedRegistrationPage[]) => {
    const { page }: any = this.props;
    if (index == 1) {
      const newPage = ((page - 2 + startArray.length) % startArray.length) + 1;
      const newElement = (newPage + startArray.length - 3) % startArray.length;

      this.listOfPages.pop();
      this.listOfPages.unshift(startArray[newElement]);
      this.command.update(setSelectedAuthorizationPage, newPage);

      this.scrollViewRef.current?.scrollTo({ x: 3 * width, animated: false });
      this.scrollViewRef.current?.scrollTo({ x: 2 * width, animated: true });
    }
    if (index == 3) {
      this.listOfPages.shift();
      const newElement: number = (page + 2) % startArray.length;
      this.listOfPages.push(startArray[newElement]);
      this.command.update(
        setSelectedAuthorizationPage,
        (page % startArray.length) + 1
      );

      this.scrollViewRef.current?.scrollTo({ x: 1 * width, animated: false });
      this.scrollViewRef.current?.scrollTo({ x: 2 * width, animated: true });
    }
  };
  getNewStartArray = (index: number, startArray: AdaptedRegistrationPage[]) => {
    const distance = 2;
    const originalArray = [...startArray];

    const startIdx = Math.max(0, index - distance);
    const endIdx = Math.min(originalArray.length - 1, index + distance);

    this.listOfPages = originalArray.slice(startIdx, endIdx + 1);

    if (index == 0) {
      const lastTwoElements = startArray.slice(-2);
      this.listOfPages.unshift(...lastTwoElements);
    } else if (index == 1) {
      const lastElement = startArray.slice(-1);
      this.listOfPages.unshift(...lastElement);
    }
    if (index == startArray.length - 2) {
      const firstElement = startArray.slice(0, 1);
      this.listOfPages.push(...firstElement);
    } else if (index == startArray.length - 1) {
      const firstTwoElements = startArray.slice(0, 2);
      this.listOfPages.push(...firstTwoElements);
    }
  };
  pressOnConfirmButton = () => {
    this.command.update(setIsPressedNextButtonAuthorization, true);
  };
  componentDidUpdate(prevProps: any) {
    const { fulfillmentOfConditionForNextButtonAuthorization }: any =
      this.props;
    const old = prevProps.fulfillmentOfConditionForNextButtonAuthorization;
    if (
      fulfillmentOfConditionForNextButtonAuthorization &&
      old != fulfillmentOfConditionForNextButtonAuthorization
    ) {
    }
  }
  componentDidMount(): void {
    this.getNewStartArray(this.props.id, this.props.listOfPages);
    setTimeout(() => {
      this.scrollViewRef.current?.scrollTo({
        x: 2 * width,
        y: 0,
        animated: false,
      });
      this.setState({});
    }, 10);
  }

  render() {
    const { isEnableNextButtonAuthorization }: any = this.props;
    return (
      <BackGroundGradientView>
        <Header/>
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
              <ControlPanelForSettingsCarousel
                pressOnBackButton={this.pressOnBackButton}
                pressOnNextButton={this.pressOnNextButton}
                isConfirmButtonEnabled={isEnableNextButtonAuthorization}
                pressOnConfirmButton={this.pressOnConfirmButton}
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
export default connect(mapStateToProps)(SettingsCategoryCarousel);
