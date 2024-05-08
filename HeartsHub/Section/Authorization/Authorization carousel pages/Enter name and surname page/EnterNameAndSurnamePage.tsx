import React, {
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Text, TextInput, View } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import AuthorizationInput from "../../../../SemiComponents/Inputs/AuthorizationInput";
import { connect } from "react-redux";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setNameForAuthorization,
  setSurnameForAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
  selectNameForAuthorization,
  selectSurnameForAuthorization,
} from "../../../../redux/Authorization/selectors";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import { isValidNameCheck } from "./isValidNameCheck";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class EnterNameAndSurnamePage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;
  constructor(props: any) {
    super(props);

    this.state = {
      inputName: props.name,
      inputSurName: props.surname,
    };
    this.inputRef = createRef();
    this.State = this.returnState();
  }

  checkingForEnableButton = (arrayOfBindings: any[]) => {
    const validName = isValidNameCheck(arrayOfBindings[0]);
    const validSurName =
      isValidNameCheck(arrayOfBindings[1]) || arrayOfBindings[1] == "";
    const isValid = validName && validSurName;
    return isValid;
  };
  checkingGoToNextPage = (arrayOfBindings: any[]) => {
    const validName = isValidNameCheck(arrayOfBindings[0]);
    const validSurName =
      isValidNameCheck(arrayOfBindings[1]) || arrayOfBindings[1] == "";
    const isValid = validName && validSurName;
    if (isValid) {
      const invokerState1: InvokerState = new InvokerState({
        dispatch: this.dispatch,
        action: setNameForAuthorization,
        variableField: arrayOfBindings[0],
        attribute: "name",
        isAuthorized: false,
      });
      invokerState1.request();
      const invokerState2: InvokerState = new InvokerState({
        dispatch: this.dispatch,
        action: setSurnameForAuthorization,
        variableField: arrayOfBindings[1],
        attribute: "surname",
        isAuthorized: false,
      });
      setTimeout(() => {
        invokerState2.request();
      }, 10);
    }
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(isValid)
    );
  };
  componentDidMount(): void {
    const { page, index }: any = this.props;
    if (page == index + 1) {
      this.defineState();
      this.inputRef.current?.focus();
    }
  }
  componentDidUpdate(prevProps: any, props: any) {
    const { page, index }: any = this.props;
    const oldPage = prevProps.page;
    if (page == index + 1) {
      this.defineState();
    }
    if (page != oldPage && page == index + 1) {
      setTimeout(() => {
        this.inputRef.current?.focus();
      }, 50);
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { inputName, inputSurName }: any = this.state;
    this.State.defineState(
      [inputName, inputSurName],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Як тебе звати?" />
        <AuthorizationInput
          color={
            (isValidNameCheck((this.state as any).inputName) &&
              (isValidNameCheck((this.state as any).inputSurName) ||
                (this.state as any).inputSurName == "")) ||
            (this.state as any).inputName == ""
              ? "white"
              : "#FFEF60"
          }
          borderTop={true}
          childrenLeft={
            <Text
              style={{
                color: "white",
                fontSize: height * 0.02,
                fontWeight: "700",
              }}
            >
              {"Ім'я"}
            </Text>
          }
          childrenRight={
            <TextInput
              ref={this.inputRef}
              style={{
                flex: 1,
                fontSize: height * 0.023,
                justifyContent: "center",
                marginLeft: 10,
                color: "white",
              }}
              onChangeText={(text) => {
                this.setState({ inputName: text });
              }}
              value={(this.state as any).inputName}
              placeholder="Введіть ім'я"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          }
        />
        <AuthorizationInput
          color={
            (isValidNameCheck((this.state as any).inputName) &&
              (isValidNameCheck((this.state as any).inputSurName) ||
                (this.state as any).inputSurName == "")) ||
            (this.state as any).inputName == ""
              ? "white"
              : "#FFEF60"
          }
          borderTop={false}
          widthOfFirstContainer={width * 0.22}
          childrenLeft={
            <Text
              style={{
                color: "white",
                fontSize: height * 0.02,
                fontWeight: "700",
              }}
            >
              {"Прізвище"}
            </Text>
          }
          childrenRight={
            <TextInput
              style={{
                flex: 1,
                fontSize: height * 0.023,
                justifyContent: "center",
                marginLeft: 10,
                color: "white",
              }}
              onChangeText={(text) => {
                this.setState({ inputSurName: text });
              }}
              value={(this.state as any).inputSurName}
              placeholder="Введіть прізвище"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          }
        />
        {(isValidNameCheck((this.state as any).inputName) &&
          (isValidNameCheck((this.state as any).inputSurName) ||
            (this.state as any).inputSurName == "")) ||
        (this.state as any).inputName == "" ? null : (
          <Text
            style={{
              color: "#FFEF60",
              fontSize: height * 0.0165,
              marginLeft: width * 0.1,
              marginTop: 10,
              fontWeight: "800",
              width: width * 0.8,
            }}
          >
            {
              "Ім'я або прізвище не має містити пробілів або інших спеціальних символів"
            }
          </Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  name: selectNameForAuthorization(state),
  surname: selectSurnameForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});

export default connect(mapStateToProps)(EnterNameAndSurnamePage);
