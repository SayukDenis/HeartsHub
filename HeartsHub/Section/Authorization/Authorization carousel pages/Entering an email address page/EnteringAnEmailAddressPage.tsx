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
  setBufferEmail,
  setEmailForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectBufferEmail,
  selectEmailForAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import { isValidEmailCheck } from "./isValidEmailCheck";
import { bufferEmailReducer } from "../../../../redux/Authorization/Reducer";

class EnteringAnEmailAddressPage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;
  constructor(props: any) {
    super(props);
    this.state = {
      inputEmail: props.email,
    };
    this.inputRef = createRef();
    this.State = this.returnState();
  }
  protected checkingForEnableButton = (arrayOfBindings: any[]) => {
    return isValidEmailCheck(arrayOfBindings[0]);
  };
  protected checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.command.update(setBufferEmail, arrayOfBindings[0]);
    this.command.update(setIsPressedNextButtonAuthorization, false);
    this.command.update(setIsEnableNextButtonAuthorization, false);
    this.command.update(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization,
      true
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
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { inputEmail }: any = this.state;
    this.State.defineState(
      [inputEmail],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { inputEmail }: any = this.state;
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Вкажіть свою електронну адресу" />
        <AuthorizationInput
          color={
            inputEmail == "" ||
            isValidEmailCheck((this.state as any)?.inputEmail)
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
              {"email"}
            </Text>
          }
          childrenRight={
            <TextInput
              ref={this.inputRef}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
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
                this.setState({ inputEmail: text });
              }}
              value={inputEmail}
              placeholder="Введіть email"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          }
        />
        {inputEmail == "" ||
        isValidEmailCheck((this.state as any)?.inputEmail) ? null : (
          <Text
            style={{
              color: "#FFEF60",
              fontSize: height * 0.018,
              marginLeft: width * 0.1,
              marginTop: 10,
              fontWeight: "800",
            }}
          >
            {"Вкажіть коректний email"}
          </Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  bufferEmail: selectBufferEmail(state),
  email: selectEmailForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(EnteringAnEmailAddressPage);
