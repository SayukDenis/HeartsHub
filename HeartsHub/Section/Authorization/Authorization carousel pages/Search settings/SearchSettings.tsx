import { ReactNode, RefObject, createRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {
  selectAuthorizationPage,
  selectId,
  selectIsPressedNextButtonAuthorization,
  selectSearchStatusAge,
  selectSearchStatusGender,
  selectSearchStatusRadius,
} from "../../../../redux/Authorization/selectors";
import { connect } from "react-redux";
import { searchGender } from "../../../../SemiComponents/Constants/Data";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
  setSearchStatusAge,
  setSearchStatusGender,
  setSearchStatusRadius,
} from "../../../../redux/Authorization/Actions";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";

class SearchSettingsPage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;
  private sliderRadius = height * 0.045;
  private sliderLength = width * 0.8;
  private sliderHeight = this.sliderRadius * 0.4;
  constructor(props: any) {
    super(props);
    const { searchGender, searchAge, searchRadius }: any = this.props;
    const ages = searchAge.split("-");
    this.inputRef = createRef();
    this.state = {
      inputSearchRadius: searchRadius,
      inputSearchMinAge: ages[0],
      inputSearchMaxAge: ages[1],
      inputSearchGender: searchGender,
      isPressed: false,
    };
    this.State = this.returnState();
  }
  protected checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.dispatch(setIsPressedNextButtonAuthorization(false));
    const invokerState3: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setSearchStatusRadius,
      variableField: arrayOfBindings[0],
      attribute: "searchRadius",
      id:arrayOfBindings[arrayOfBindings.length-1]
    });

    const invokerState2: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setSearchStatusGender,
      variableField: arrayOfBindings[3],
      attribute: "searchGender",
      id:arrayOfBindings[arrayOfBindings.length-1]
    });

    const invokerState1: InvokerState = new InvokerState({
      dispatch: this.dispatch,
      action: setSearchStatusAge,
      variableField: `${arrayOfBindings[2]}-${arrayOfBindings[1]}`,
      attribute: "searchAge",
      id:arrayOfBindings[arrayOfBindings.length-1]
    });

    invokerState1.request();
    setTimeout(() => {
      invokerState2.request();
      setTimeout(() => {
        invokerState3.request()
      }, 10);
    }, 10);
    this.dispatch(setIsEnableNextButtonAuthorization(false));
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
  char = (value: number) => {
    if (value <= 2) {
      return "<";
    } else if (value >= 200) {
      return ">";
    }
    return "";
  };

  defineState = () => {
    const { isPressedNextButtonAuthorization,id }: any = this.props;
    const {
      inputSearchRadius,
      inputSearchMaxAge,
      inputSearchMinAge,
      inputSearchGender,
    }: any = this.state;

    this.State.defineState(
      [
        inputSearchRadius,
        inputSearchMaxAge,
        inputSearchMinAge,
        inputSearchGender,
        id
      ],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render(): ReactNode {
    const {
      inputSearchRadius,
      inputSearchMaxAge,
      inputSearchMinAge,
      inputSearchGender,
      isPressed,
    }: any = this.state;
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Пошукові налаштування" />
        <ScrollView
          style={{ height: height * 0.5 }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity activeOpacity={1}>
            <Text style={style.topicText}>{"Відстань"}</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.inputRef?.current?.focus();
              }}
              style={{ flexDirection: "row", alignSelf: "center" }}
            >
              <Text style={style.text}>
                {this.char(Number(inputSearchRadius))}
              </Text>
              <TextInput
                ref={this.inputRef}
                keyboardType="number-pad"
                value={inputSearchRadius}
                style={style.text}
                onChangeText={(text) => {
                  this.setState({ inputSearchRadius: text });
                }}
                onBlur={() => {
                  if (Number(inputSearchRadius) >= 200) {
                    this.setState({ inputSearchRadius: "200" });
                  } else if (Number(inputSearchRadius) <= 2) {
                    this.setState({ inputSearchRadius: "2" });
                  } else {
                    this.setState({
                      inputSearchRadius: Number(inputSearchRadius).toString(),
                    });
                  }
                }}
                selection={{
                  start: inputSearchRadius.length,
                  end: inputSearchRadius.length,
                }}
              />
              <Text style={style.text}>{"км"}</Text>
            </TouchableOpacity>
            <View style={{ alignSelf: "center", marginTop: height * 0.008 }}>
              <MultiSlider
                min={2}
                max={200}
                values={[Number(inputSearchRadius)]}
                onValuesChange={(value: number[]) => {
                  this.setState({
                    inputSearchRadius: Math.round(value[0]).toString(),
                  });
                }}
                customMarker={(e: any) => {
                  return (
                    <View
                      style={{
                        height: this.sliderRadius,
                        aspectRatio: 1,
                        backgroundColor: "#680F1D",
                        borderRadius: this.sliderRadius,
                        marginTop: this.sliderHeight,
                        //position:'absolute'
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
                  height: this.sliderHeight,

                  borderRadius: this.sliderRadius,
                }}
                containerStyle={{
                  height: this.sliderRadius,
                  // backgroundColor:"black",
                  alignSelf: "center",
                }}
                touchDimensions={{
                  height: height,
                  width: width,
                  borderRadius: 0,
                  slipDisplacement: 4000,
                }}
              />
            </View>
            <Text style={[style.topicText, { marginTop: height * 0.02 }]}>
              {"Вік"}
            </Text>
            <View
              style={{
                marginLeft: width * 0.1,
                marginTop: height * 0.01,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  borderColor: "white",
                  borderWidth: 2,
                  flexDirection: "row",
                  padding: 10,
                  borderRadius: 15,
                }}
              >
                <TextInput
                  style={[style.ageText, style.inputAgeText]}
                  keyboardType="number-pad"
                  value={inputSearchMinAge}
                  onChangeText={(text) => {
                    this.setState({ inputSearchMinAge: text });
                  }}
                  onBlur={() => {
                    if (Number(inputSearchMinAge) < 18) {
                      this.setState({ inputSearchMinAge: "18" });
                    } else if (
                      Number(inputSearchMaxAge) < Number(inputSearchMinAge)
                    ) {
                      this.setState({ inputSearchMinAge: inputSearchMaxAge });
                    }
                  }}
                />
                <Text style={[style.ageText, { paddingVertical: 5 }]}>
                  {"-"}
                </Text>
                <TextInput
                  style={[style.ageText, style.inputAgeText]}
                  keyboardType="number-pad"
                  value={inputSearchMaxAge}
                  onChangeText={(text) => {
                    this.setState({ inputSearchMaxAge: text });
                  }}
                  maxLength={2}
                  onBlur={() => {
                    if (Number(inputSearchMaxAge) < Number(inputSearchMinAge)) {
                      this.setState({ inputSearchMaxAge: inputSearchMinAge });
                    }
                  }}
                />
              </View>
              <View style={{ flex: 1 }} />
            </View>
            <Text style={[style.topicText, { marginTop: height * 0.02 }]}>
              {"Стать"}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({ isPressed: !isPressed });
              }}
              activeOpacity={0.6}
              style={{
                padding: 10,
                borderWidth: 2,
                flexDirection: "row",
                borderRadius: 15,
                width: width * 0.3,
                marginBottom: 5,
                justifyContent: "center",
                borderColor: "white",
                marginLeft: width * 0.1,
                marginTop: height * 0.01,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: height * 0.018,
                  fontWeight: "800",
                  alignSelf: "center",
                  padding: 5,
                }}
              >
                {inputSearchGender}
              </Text>
            </TouchableOpacity>
            {isPressed ? (
              <View
                style={{
                  borderWidth: 2,
                  width: width * 0.3,
                  borderRadius: 15,
                  borderColor: "white",
                  marginLeft: width * 0.1,
                }}
              >
                {searchGender.map((item, index) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                          this.setState({ isPressed: false });
                          this.setState({ inputSearchGender: item });
                        }}
                        style={{
                          padding: 8,
                          justifyContent: "center",
                          alignSelf: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: height * 0.018,
                            fontWeight: "800",
                            padding: 5,
                          }}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>

                      {index == searchGender.length - 1 ? null : (
                        <View
                          style={{
                            backgroundColor: "white",
                            width: "90%",
                            height: 1,
                            alignSelf: "center",
                          }}
                        />
                      )}
                    </View>
                  );
                })}
              </View>
            ) : null}
            <View style={{ height: height * 0.3 }} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  text: { fontSize: 20, color: "white", fontWeight: "800" },
  topicText: {
    fontSize: 22,
    color: "white",
    fontWeight: "700",
    marginLeft: width * 0.1,
  },
  ageText: { fontSize: 20, color: "white", fontWeight: "800" },
  inputAgeText: { padding: 5 },
});

const mapStateToProps = (state: any) => ({
  id:selectId(state),
  searchGender: selectSearchStatusGender(state),
  searchAge: selectSearchStatusAge(state),
  searchRadius: selectSearchStatusRadius(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});

export default connect(mapStateToProps)(SearchSettingsPage);
