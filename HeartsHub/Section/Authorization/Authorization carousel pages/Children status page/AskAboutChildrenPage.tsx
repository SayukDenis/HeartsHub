import { View } from "react-native";
import { connect } from "react-redux";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import { childrenStatus } from "../../../../SemiComponents/Constants/Data";
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultSelectButton from "../../../../SemiComponents/Buttons/Authorization buttons/DefaultSelectButton";
import {
  setChildrenStatusForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectChildrenStatusForAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";

import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";

class AskAboutChildrenPage extends RegistrationPage {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedChildrenStatus: (this.props as any).childrenStatus,
    };
    this.State = this.returnState();
  }
  checkingGoToNextPage(arrayOfBindings: any[]) {
    this.command.update(setIsPressedNextButtonAuthorization, false);
    this.command.update(setChildrenStatusForAuthorization, arrayOfBindings[0]);
    this.command.update(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization,
      true
    );
  }
  checkingForEnableButton(arrayOfBindings: any[]) {
    return arrayOfBindings[0] != "";
  }
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
    const { selectedChildrenStatus }: any = this.state;
    this.State.defineState(
      [selectedChildrenStatus],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Діти?" />
        {childrenStatus.map((status: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.setState({ selectedChildrenStatus: status });
              }}
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
            >
              <DefaultSelectButton
                item={status}
                isSelected={
                  status == (this.state as any).selectedChildrenStatus
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  childrenStatus: selectChildrenStatusForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(AskAboutChildrenPage);
