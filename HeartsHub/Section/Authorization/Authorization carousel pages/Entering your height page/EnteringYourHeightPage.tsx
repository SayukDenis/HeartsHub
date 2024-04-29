import React, {
  RefObject,
  createRef,

} from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import CheckBoxSVG from "../../../../assets/SVG/Authorization SVG/CheckBoxSVG";
import { connect} from "react-redux";
import {
  selectAuthorizationPage,
  selectHeightForAuthorization,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setHeigthForAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";

class EnteringYourHeightPage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;
  private sliderRadius = height * 0.055;
  private sliderLength = width * 0.7;
  constructor(props: any) {
    super(props);
    const {yourHeight}:any=this.props
    const [numberValue, booleanValue] = (this.props as any).yourHeight
      .split(",")
      .map((val: any, index: any) => {
        if (index === 0) {
          return val;
        } else {
          return val === "1";
        }
      });
    this.state = {
      inputHeight:
        numberValue && numberValue != "" ? numberValue.toString() : "120",
      toggleState: booleanValue,
    };
    this.inputRef = createRef();
    this.State=this.returnState()
  }

  checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.command.update(setIsPressedNextButtonAuthorization, false);
    this.command.update(setHeigthForAuthorization, this.validHeight());
    this.command.update(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization,
      true
    );
  };
  char = (value: number) => {
    if (value <= 120) {
      return "<";
    } else if (value >= 220) {
      return ">";
    }
    return "";
  };
  validHeight = (): string => {
    let stringBuilder = "";
    const value = Number((this.state as any).inputHeight);
    if (value <= 120) {
      stringBuilder += "120";
    } else if (value >= 220) {
      stringBuilder += "220";
    } else {
      stringBuilder += Number((this.state as any).inputHeight).toString();
    }
    if ((this.state as any).toggleState) {
      stringBuilder += ",1";
    } else {
      stringBuilder += ",0";
    }
    return stringBuilder;
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
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { inputHeight }: any = this.state;
    this.State.defineState(
      [inputHeight],
      isPressedNextButtonAuthorization as boolean
    );
  };

  render() {
    const { inputHeight }: any = this.state;
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Який у тебе зріст?" />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.inputRef?.current?.focus();
          }}
          style={{ flexDirection: "row", alignSelf: "center" }}
        >
          <Text style={style.text}>{this.char(Number(inputHeight))}</Text>
          <TextInput
            ref={this.inputRef}
            keyboardType="number-pad"
            value={inputHeight}
            style={style.text}
            onChangeText={(text) => {
              this.setState({ inputHeight: text });
            }}
            onBlur={() => {
              if (Number(inputHeight) >= 220) {
                this.setState({ inputHeight: "220" });
              } else if (Number(inputHeight) <= 120) {
                this.setState({ inputHeight: "120" });
              } else {
                this.setState({ inputHeight: Number(inputHeight).toString() });
              }
            }}
            selection={{ start: inputHeight.length, end: inputHeight.length }}
          />
          <Text style={style.text}>{"см"}</Text>
        </TouchableOpacity>
        <View style={{ alignSelf: "center", marginTop: height * 0.008 }}>
          <MultiSlider
            min={120}
            max={220}
            values={[Number(inputHeight)]}
            onValuesChange={(value: number[]) => {
              this.setState({ inputHeight: Math.round(value[0]).toString() });
            }}
            customMarker={(e) => {
              return (
                <View
                  style={{
                    height: this.sliderRadius,
                    aspectRatio: 1,
                    backgroundColor: "#680F1D",
                    borderRadius: this.sliderRadius,
                    marginTop: this.sliderRadius * 0.5,
                  }}
                />
              );
            }}
            sliderLength={this.sliderLength}
            selectedStyle={{
              backgroundColor: "#E1BEC1",
            }}
            unselectedStyle={{ backgroundColor: "#E1BEC1" }}
            trackStyle={{
              height: this.sliderRadius * 0.5,
              borderRadius: this.sliderRadius,
            }}
            containerStyle={{
              height: this.sliderRadius,
              // backgroundColor:"black",
            }}
            touchDimensions={{
              height: height,
              width: width,
              borderRadius: 0,
              slipDisplacement: 4000,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: height * 0.03 }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ toggleState: !(this.state as any).toggleState });
            }}
            activeOpacity={0.8}
            style={{
              height: this.sliderRadius * 0.8,
              aspectRatio: 1,
              backgroundColor: "#E1BEC1",
              marginLeft: (width - this.sliderLength - this.sliderRadius) / 2,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            {(this.state as any).toggleState ? (
              <View style={{ alignSelf: "center" }}>
                <CheckBoxSVG />
              </View>
            ) : null}
          </TouchableOpacity>
          <Text style={[{ alignSelf: "center", marginLeft: 10 }, style.text]}>
            {"Не вказувати"}
          </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: { fontSize: 20, color: "white", fontWeight: "800" },
});
const mapStateToProps = (state: any) => ({
  yourHeight: selectHeightForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});

export default connect(mapStateToProps)(EnteringYourHeightPage);
