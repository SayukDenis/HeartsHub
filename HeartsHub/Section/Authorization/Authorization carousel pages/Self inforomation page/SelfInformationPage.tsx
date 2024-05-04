import { Text, TextInput, View } from "react-native";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { RefObject, createRef } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { connect } from "react-redux";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
  selectSelfInformationForAuthorization,
} from "../../../../redux/Authorization/selectors";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSelfInformationForAuthorization,
} from "../../../../redux/Authorization/Actions";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class SelfInformationPage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;
  private maxChars = 50;
  private splitter = new GraphemeSplitter();
  constructor(props: any) {
    super(props);
    this.state = {
      inputBio: (this.props as any).selfInfo,
    };
    this.inputRef = createRef();

    this.State =this.returnState();
  }
 
  checkingGoToNextPage= (arrayOfBindings: any[]) => {
    this.dispatch(setIsPressedNextButtonAuthorization(false));
    const invokerState: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setSelfInformationForAuthorization,
      variableField: arrayOfBindings[0].trim(),
      attribute: "selfInformation",
      isAuthorized: false,
    });
    invokerState.request();
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(true)
    );
    
  }
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
    const { inputBio }: any = this.state;
    this.State.defineState(
      [inputBio],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { inputBio }: any = this.state;
    return (
      <View style={{ width: width }}>
        <AuthorizationTitle text="Розкажи коротко про себе" />
        <View
          style={{
            flexDirection: "row",
            width: width * 0.8,
            alignSelf: "center",
            borderTopWidth: 2.5,
            borderBottomWidth: 2.5,
            borderColor: "white",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              width: width * 0.12,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: height * 0.02,
                fontWeight: "700",
              }}
            >
              {"Біо"}
            </Text>
          </View>
          <View style={{ height: "100%", width: 2.5 }}>
            <View
              style={{ flex: 1, backgroundColor: "white", marginVertical: 8 }}
            />
          </View>
          <TextInput
            ref={this.inputRef}
            style={{
              fontSize: height * 0.023,
              marginLeft: 10,
              color: "white",
              flex: 1,
              alignSelf: "center",
              marginVertical: 10,
              //backgroundColor: "red",
            }}
            multiline
            value={inputBio}
            onChangeText={(text) => {
              this.setState({ inputBio: text });
            }}
            placeholder="Напишіть про себе"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            maxLength={
              this.splitter.splitGraphemes(inputBio).length < this.maxChars
                ? 10000000
                : inputBio.length - 1
            }
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: height * 0.023,
                color: "white",
                //backgroundColor: "black",
              }}
            >
              {this.splitter.splitGraphemes(inputBio).length +
                "/" +
                this.maxChars}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  selfInfo: selectSelfInformationForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(SelfInformationPage);
