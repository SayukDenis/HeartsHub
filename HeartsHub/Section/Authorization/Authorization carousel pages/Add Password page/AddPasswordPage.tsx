import React, { RefObject, createRef } from "react";

import { Text, TextInput, View } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationInput from "../../../../SemiComponents/Inputs/AuthorizationInput";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";

import { connect } from "react-redux";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setSecondPassword,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectId,
  selectIsPressedNextButtonAuthorization,
  selectSecondPassword,
} from "../../../../redux/Authorization/selectors";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import {
  hasDigit,
  hasSpecialCharacter,
  hasUpperCase,
  hasWhitespace,
} from "./Functions";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class AddPasswordPage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;
  constructor(props: any) {
    super(props);

    this.state = {
      password: "",
    };
    this.inputRef = createRef();
    this.State = this.returnState();
  }
  protected checkingForEnableButton = (arrayOfBindings: any[]) => {
    const password = arrayOfBindings[0];
    return (
      hasDigit(password) &&
      hasSpecialCharacter(password) &&
      !hasWhitespace(password) &&
      hasUpperCase(password) &&
      password.length >= 8
    );
  };
  protected checkingGoToNextPage = (arrayOfBindings: any[]) => {
    const { secondPassword }: any = this.props;

    const invokerState: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setSecondPassword,
      variableField: arrayOfBindings[0],
      attribute: "secondPassword",
      id:arrayOfBindings[arrayOfBindings.length-1]
    });
    invokerState.request();
    this.dispatch(setIsEnableNextButtonAuthorization(false));
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(true)
    );
  };
  componentDidMount() {
    const { page, index }: any = this.props;
    if (page == index + 1) {
      this.inputRef.current?.focus();
      this.defineState();
    }
  }
  componentDidUpdate(prevProps: any, props: any) {
    const { page, index }: any = this.props;

    const oldPage = prevProps.page;
    if (page == index + 1) {
      this.defineState();
    }
    if (page != oldPage && page == index + 1) {
      this.inputRef.current?.focus();
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization,id }: any = this.props;
    const { password }: any = this.state;
    this.State.defineState(
      [password,id],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { password }: any = this.state;
    const { secondPassword }: any = this.props;
    return (
      <View style={{ width }}>
        <AuthorizationTitle
          text={secondPassword == "" ? "Введи пароль" : "  Введи новий пароль"}
        />
        <AuthorizationInput
          widthOfFirstContainer={width * 0.17}
          color={"white"}
          borderTop={true}
          childrenLeft={
            <Text
              style={{
                color: "white",
                fontSize: height * 0.02,
                fontWeight: "700",
              }}
            >
              {"Пароль"}
            </Text>
          }
          childrenRight={
            <TextInput
              ref={this.inputRef}
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize={"none"}
              clearTextOnFocus={false}
              style={{
                //backgroundColor: "red",
                flex: 1,
                fontSize: height * 0.023,
                justifyContent: "center",
                marginLeft: 10,
                color: "white",
              }}
              onChangeText={(text: string) => {
                this.setState({ password: text });
              }}
              value={password}
              placeholder="Введіть пароль"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          }
        />
        <Text
          style={{
            width: width * 0.8,
            alignSelf: "center",
            marginTop: 10,
            fontSize: height * 0.0175,
            fontWeight: "700",
          }}
        >
          <Text
            style={
              password.length >= 8
                ? { color: "#60FF66", opacity: 0.6 }
                : { color: "white", opacity: 0.5 }
            }
          >
            {"Пароль має містити мінімум 8 символів, "}
          </Text>
          <Text
            style={
              hasSpecialCharacter(password)
                ? { color: "#60FF66", opacity: 0.6 }
                : { color: "white", opacity: 0.5 }
            }
          >
            {"хоча б 1 спеціальний символ, "}
          </Text>
          <Text
            style={
              hasUpperCase(password)
                ? { color: "#60FF66", opacity: 0.6 }
                : { color: "white", opacity: 0.5 }
            }
          >
            {" 1 велику літеру, "}
          </Text>
          <Text
            style={
              hasDigit(password)
                ? { color: "#60FF66", opacity: 0.6 }
                : { color: "white", opacity: 0.5 }
            }
          >
            {"1 цифру, "}
          </Text>
          <Text
            style={
              !hasWhitespace(password)
                ? { color: "#60FF66", opacity: 0.6 }
                : { color: "#FFEF60" }
            }
          >
            {"не має містити пробілів."}
          </Text>
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  id:selectId(state),
  secondPassword: selectSecondPassword(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(AddPasswordPage);
