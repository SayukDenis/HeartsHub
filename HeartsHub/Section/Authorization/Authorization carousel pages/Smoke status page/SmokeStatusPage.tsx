import { View } from "react-native";
import { connect } from "react-redux";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import {
  smokeStatus,
} from "../../../../SemiComponents/Constants/Data";
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultSelectButton from "../../../../SemiComponents/Buttons/Authorization buttons/DefaultSelectButton";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSmokeStatusForAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
  selectSmokeStatusForAuthorization,
} from "../../../../redux/Authorization/selectors";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class SmokeStatusPage extends RegistrationPage {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedSmokeStatus: (this.props as any).smokeStatus,
    };
    this.State = this.returnState();
  }
  checkingForEnableButton = (arrayOfBindings: any[]) => {
    return arrayOfBindings[0] != "";
  };
  checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.dispatch(setIsPressedNextButtonAuthorization(false));
    const invokerState: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setSmokeStatusForAuthorization,
      variableField: arrayOfBindings[0],
      attribute: "smokeStatus",
      isAuthorized: false,
    });
    invokerState.request();
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(true)
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
    const { selectedSmokeStatus }: any = this.state;
    this.State.defineState(
      [selectedSmokeStatus],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Чи ти палиш?" />
        {smokeStatus.map((status: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.setState({ selectedSmokeStatus: status });
              }}
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
            >
              <DefaultSelectButton
                item={status}
                isSelected={status == (this.state as any).selectedSmokeStatus}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  smokeStatus: selectSmokeStatusForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(SmokeStatusPage);
