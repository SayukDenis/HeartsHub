import { connect } from "react-redux";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
  selectSearchStatusForAuthorization,
} from "../../../../redux/Authorization/selectors";
import { TouchableOpacity, View } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import { searchStatus } from "../../../../SemiComponents/Constants/Data";
import SelectAuthorizationButton from "../../../../SemiComponents/Buttons/Authorization buttons/SelectAuthorizationButton";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSearchStatusForAuthorization,
} from "../../../../redux/Authorization/Actions";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";

class SearchStatusPage extends RegistrationPage {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedSearchStatus:
        searchStatus.indexOf((this.props as any).status) >= 0
          ? searchStatus.indexOf((this.props as any).status)
          : null,
    };

    this.State = this.returnState();
  }
  checkingForEnableButton = (arrayOfBindings: any[]) => {
    return arrayOfBindings[0] != null;
  };
  checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.command.update(setIsPressedNextButtonAuthorization, false);
    this.command.update(
      setSearchStatusForAuthorization,
      searchStatus[arrayOfBindings[0]]
    );
    this.command.update(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization,
      true
    );
  };
  componentDidUpdate(prevProps: any, props: any) {
    const { page, index }: any = this.props;
    if (page == index + 1) {
      this.defineState();
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { selectedSearchStatus }: any = this.state;
    this.State.defineState(
      [selectedSearchStatus],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { selectedSearchStatus }: any = this.state;
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Що шукаєш?" />
        {searchStatus.map((status: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ marginBottom: height * 0.03 }}
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ selectedSearchStatus: index });
              }}
            >
              <SelectAuthorizationButton
                text={status}
                isSelected={selectedSearchStatus == index}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  status: selectSearchStatusForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(SearchStatusPage);
