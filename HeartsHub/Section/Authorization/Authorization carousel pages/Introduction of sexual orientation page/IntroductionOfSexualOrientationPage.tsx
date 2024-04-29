import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import { connect} from "react-redux";

import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
  selectSexualOrientationForAuthorization,
} from "../../../../redux/Authorization/selectors";
import { sexualOrientations } from "../../../../SemiComponents/Constants/Data";
import SelectAuthorizationButton from "../../../../SemiComponents/Buttons/Authorization buttons/SelectAuthorizationButton";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSexualOrientationForAuthorization,
} from "../../../../redux/Authorization/Actions";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";

class IntroductionOfSexualOrientationPage extends RegistrationPage {
  constructor(props: any) {
    super(props);
    const index = sexualOrientations.indexOf(
      (this.props as any).sexualOrientation
    );

    this.state = {
      selectedSexualOrientation: index >= 0 ? index : null,
    };

    this.State = this.returnState();
  }
  checkingForEnableButton = (arrayOfBindings: any[]) => {
    return arrayOfBindings[0] != null;
  };
  checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.command.update(setIsPressedNextButtonAuthorization, false);
    this.command.update(
      setSexualOrientationForAuthorization,
      arrayOfBindings[0] != null ? sexualOrientations[arrayOfBindings[0]] : ""
    );
    this.command.update(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization,
      arrayOfBindings[0] != null
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
    if (page == index + 1) {
      this.defineState();
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { selectedSexualOrientation }: any = this.state;

    this.State.defineState(
      [selectedSexualOrientation],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { selectedSexualOrientation }: any = this.state;
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Вкажи сексуальну орієнтацію" />
        {sexualOrientations.map((orientation: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ selectedSexualOrientation: index });
              }}
            >
              <SelectAuthorizationButton
                text={orientation}
                isSelected={selectedSexualOrientation == index}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  sexualOrientation: selectSexualOrientationForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});

export default connect(mapStateToProps)(IntroductionOfSexualOrientationPage);
