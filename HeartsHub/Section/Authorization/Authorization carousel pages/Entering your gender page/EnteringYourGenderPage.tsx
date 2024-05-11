import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import { connect } from "react-redux";
import {
  selectAuthorizationPage,
  selectGenderForAuthorization,
  selectId,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";
import GenderAuthorizationButton from "../../../../SemiComponents/Buttons/Authorization buttons/SelectForMulitplyAuthorizationButton";
import { genders } from "../../../../SemiComponents/Constants/Data";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setGenderForAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import SelectAuthorizationButton from "../../../../SemiComponents/Buttons/Authorization buttons/SelectAuthorizationButton";
import GenderContainerSelect from "./GenderContainerSelect";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";
class EnteringYourGenderPage extends RegistrationPage {
  constructor(props: any) {
    super(props);
    const index = genders.indexOf((this.props as any).gender);
    this.state = {
      selectedGender: index >= 0 ? index : null,
      showGenderList: false,
    };

    this.State = this.returnState();
  }
  checkingForEnableButton = (arrayOfBindings: any[]) => {
    return arrayOfBindings[0] != null;
  };
  checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.dispatch(setIsPressedNextButtonAuthorization(false));
    const invokerState: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setGenderForAuthorization,
      variableField: genders[arrayOfBindings[0]],
      attribute: "gender",
      id:arrayOfBindings[arrayOfBindings.length-1]
    });
    invokerState.request()
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(
        arrayOfBindings[0] != null
      )
    );
  };
  componentDidMount() {
    const { page, index }: any = this.props;
    if (page == index + 1) {
      this.defineState();
    }
  }
  componentDidUpdate(prevProps: any, props: any) {
    const { page, index }: any = this.props;
    const oldPage = prevProps.page;

    if (page == index + 1) {
      this.defineState();
    } else if (page != oldPage) {
      this.setState({ showGenderList: false });
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization,id}: any = this.props;
    const { selectedGender }: any = this.state;
    this.State.defineState(
      [selectedGender,id],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { showGenderList, selectedGender }: any = this.state;
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Який у тебе гендер?" />
        {showGenderList ? (
          <ScrollView
            style={{ height: height * 0.4 }}
            showsVerticalScrollIndicator={false}
          >
            {genders.map((gender: string, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    this.setState({ selectedGender: index });
                  }}
                  activeOpacity={0.8}
                >
                  <GenderContainerSelect
                    isSelected={index == selectedGender}
                    index={index}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <>
            <TouchableOpacity
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ selectedGender: 19 });
              }}
            >
              <SelectAuthorizationButton
                text={genders[19]}
                isSelected={selectedGender == 19}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ selectedGender: 29 });
              }}
            >
              <SelectAuthorizationButton
                text={genders[29]}
                isSelected={selectedGender == 29}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ showGenderList: true });
              }}
            >
              <GenderAuthorizationButton>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: height * 0.02,
                    fontWeight: "600",
                  }}
                >
                  {"Інше"}
                </Text>
              </GenderAuthorizationButton>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  id:selectId(state),
  gender: selectGenderForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(EnteringYourGenderPage);
