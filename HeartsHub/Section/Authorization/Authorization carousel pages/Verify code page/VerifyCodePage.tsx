import React, {
  RefObject,
  createRef,
} from "react";
import {

  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import AuthorizationInput from "../../../../SemiComponents/Inputs/AuthorizationInput";
import { connect} from "react-redux";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";

import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import Command from "../../Abstract classes and interfaces/Command/Command";
import { ProxyModalWindow } from "../../Abstract classes and interfaces/Proxy/ProxyModalWindow";

class VerifyCodePage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;

  constructor(props: any) {
    super(props);
    this.state = {
      inputCode: "",
      verifyCode: "0228",
      isValid: null,
    };
    this.inputRef = createRef();
    this.command = new Command({
      dispatch: props.dispatch,
    });
    this.State = this.returnState();
  }
  checkingForEnableButton= (arrayOfBindings: any[]) => {
    const isValid = arrayOfBindings[0].length == arrayOfBindings[1].length;
    return isValid;
  }
  checkingGoToNextPage= (arrayOfBindings: any[]) => {
    const isValid = arrayOfBindings[0] === arrayOfBindings[1];
    this.setState({ isValid });
    this.setState({ inputCode: "" });
    if (!isValid) {
      this.inputRef.current?.focus();
      return;
    }
  }
  componentDidUpdate(prevProps: any, props: any) {
    const { page, index }: any = this.props;
    const prevPage = prevProps.page;
    if (page == index + 1) {
      this.defineState();
      if (prevPage != page) {
        this.inputRef.current?.focus();
      }
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { inputCode, verifyCode }: any = this.state;
    if(isPressedNextButtonAuthorization){
      this.inputRef.current?.blur();
    }
    this.State.defineState(
      [inputCode, verifyCode],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { isValid }: any = this.state;
    return (
      <View style={{ width }}>
        {new ProxyModalWindow(
          new Command({
            dispatch: (this.props as any).dispatch,
          })
        ).request(isValid, (state) => {
          this.setState({ isValid: state });
        })}

        <AuthorizationTitle text="Введіть код" />
        <AuthorizationInput
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
              {"Код"}
            </Text>
          }
          childrenRight={
            <TextInput
              ref={this.inputRef}
              keyboardType="number-pad"
              clearTextOnFocus={false}
              style={{
                //backgroundColor: "red",
                flex: 1,
                fontSize: height * 0.023,
                justifyContent: "center",
                marginLeft: 10,
                color: "white",
              }}
              onChangeText={(text) => {
                this.setState({ inputCode: text });
              }}
              value={(this.state as any).inputCode}
              maxLength={4}
              placeholder="0000"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          }
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              color: "#FFB076",
              fontSize: height * 0.018,
              marginLeft: width * 0.1,
              marginTop: 10,
              fontWeight: "800",
            }}
          >
            {"Надіслати код ще раз"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(VerifyCodePage);
