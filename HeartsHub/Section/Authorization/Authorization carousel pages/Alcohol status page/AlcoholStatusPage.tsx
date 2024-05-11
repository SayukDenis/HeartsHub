import { View } from "react-native";
import { connect } from "react-redux";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import { alcoholStatus } from "../../../../SemiComponents/Constants/Data";
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultSelectButton from "../../../../SemiComponents/Buttons/Authorization buttons/DefaultSelectButton";
import {
  setAlcoholStatusForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAlcoholStatusForAuthorization,
  selectAuthorizationPage,
  selectId,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class AlcoholStatusPage extends RegistrationPage {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedAlcoholStatus: (this.props as any).alcoholStatus,
    };
    this.State = this.returnState();
  }
  checkingGoToNextPage(arrayOfBindings: any[]) {
    this.dispatch(setIsPressedNextButtonAuthorization(false));
    const invokerState: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setAlcoholStatusForAuthorization,
      variableField: arrayOfBindings[0],
      attribute: "alcoholStatus",
      id:arrayOfBindings[arrayOfBindings.length-1]
    });
    invokerState.request();
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(true)
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
    const { isPressedNextButtonAuthorization,id }: any = this.props;
    const { selectedAlcoholStatus }: any = this.state;
    this.State.defineState(
      [selectedAlcoholStatus,id],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Чи вживаєш ти алкоголь?" />
        {alcoholStatus.map((status: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.setState({ selectedAlcoholStatus: status });
              }}
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
            >
              <DefaultSelectButton
                item={status}
                isSelected={status == (this.state as any).selectedAlcoholStatus}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  id:selectId(state),
  alcoholStatus: selectAlcoholStatusForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(AlcoholStatusPage);
