import React, { RefObject, createRef } from "react";

import {
  ScrollView,
  StyleSheet,
  Switch,
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

import { connect } from "react-redux";
import {
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setGeoLocation,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectGeoLocation,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import { LocalityData, localityData } from "../../../../assets/Data/locality";
import { getLocationData, stringBuilder } from "./Functions";
import GeoLocationText from "./GeoLocationText";

class LocationPage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;

  constructor(props: any) {
    super(props);
    const { geoLocation }: any = this.props;

    this.state = {
      location: "",
      toggle: geoLocation == -1,
      results: [],
      selectLocation: geoLocation >= 0 ? localityData[geoLocation] : null,
    };
    this.inputRef = createRef();
    this.State = this.returnState();
  }
  protected checkingForEnableButton = (arrayOfBindings: any[]) => {
    const { selectLocation }: any = this.state;
    return selectLocation != null;
  };
  protected checkingGoToNextPage = (arrayOfBindings: any[]) => {
    const { toggle }: any = this.state;
    this.command.update(setIsPressedNextButtonAuthorization, false);
    this.command.update(setIsEnableNextButtonAuthorization, false);
    this.command.update(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization,
      true
    );
    const index = localityData.indexOf(toggle ? -2 : arrayOfBindings[0]);
    this.command.update(setGeoLocation, index);
  };
  componentDidMount() {
    const { page, index }: any = this.props;
    const { location }: any = this.state;
    if (page == index + 1) {
      this.inputRef.current?.focus();
      this.defineState();
      this.setState({ results: getLocationData(location) });
    }
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    const { page, index }: any = this.props;
    const oldLocation = prevState.location;
    const oldToggle = prevState.toggle;

    const { location, toggle, selectLocation }: any = this.state;
    const oldPage = prevProps.page;
    if (page == index + 1) {
      this.defineState();
    }

    if (page != oldPage && page == index + 1) {
      this.inputRef.current?.focus();
    }
    if (oldLocation != location) {
      this.setState({ results: getLocationData(location.toLowerCase()) });
    }
    if (oldToggle != toggle && !toggle) {
      this.inputRef.current?.focus();
      this.setState({ location: stringBuilder(selectLocation) });
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { selectLocation }: any = this.state;

    this.State.defineState(
      [selectLocation],
      isPressedNextButtonAuthorization as boolean
    );
  };

  render() {
    const { location, toggle, results, selectLocation }: any = this.state;
    const radius = 20;
    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Вкажіть ваше місцезнаходження" />
        <View
          style={{
            backgroundColor: "white",
            width: width * 0.8,
            height: height * 0.06,
            alignSelf: "center",
            borderTopRightRadius: radius,
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: results.length == 0 ? radius : 0,
            borderBottomRightRadius: results.length == 0 ? radius : 0,
            paddingHorizontal: width * 0.05,
            flexDirection: "row",
          }}
        >
          {toggle ? (
            <GeoLocationText
              selectLocation={selectLocation}
              setSelectLocation={(loc: LocalityData | null) => {
                this.setState({ selectLocation: loc });
              }}
            />
          ) : (
            <TextInput
              ref={this.inputRef}
              style={style.text}
              autoCorrect={false}
              contextMenuHidden={true}
              nativeID="hideDoneButton"
              autoComplete="off"
              keyboardType="web-search"
              enterKeyHint={"done"}
              placeholder="Де ви проживаєте"
              placeholderTextColor={"rgba(0,0,0,0.5)"}
              value={location}
              onChangeText={(text) => {
                if (location.includes(".") && location.includes(",")) {
                  if (text.length < location.length) {
                    this.setState({ location: "" });
                  } else {
                    this.setState({ location: text[text.length - 1] });
                  }
                  return;
                }
                this.setState({ location: text });
              }}
              onBlur={() => {
                setTimeout(() => {
                  if (location == "") {
                    this.setState({ location: stringBuilder(selectLocation) });
                  }
                }, 1);
              }}
            />
          )}
          <Switch
            style={{ alignSelf: "center" }}
            trackColor={{ false: "#868686", true: "#57C067" }}
            ios_backgroundColor={"#868686"}
            thumbColor={"white"}
            onValueChange={() => {
              this.setState({ toggle: !toggle, location: "" });
            }}
            value={toggle}
          />
        </View>
        {results.map((item: LocalityData, index: number) => {
          return (
            <View
              key={index}
              style={{
                height: height * 0.05,
                backgroundColor: "white",
                width: width * 0.8,
                alignSelf: "center",
                paddingHorizontal: width * 0.05,
                borderBottomLeftRadius:
                  results.length - 1 == index ? radius : 0,
                borderBottomRightRadius:
                  results.length - 1 == index ? radius : 0,
                borderTopWidth: 1,
                justifyContent: "center",
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  activeOpacity={1}
                  onPress={() => {
                    this.setState({
                      selectLocation: item,
                      location: stringBuilder(item),
                    });
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: height * 0.02,
                      fontWeight: "500",
                      alignSelf: "center",
                    }}
                  >
                    {stringBuilder(item)}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );
        })}
        {toggle || results.length > 0 ? null : (
          <Text
            style={{
              width: width * 0.8,
              alignSelf: "center",
              color: "white",
              opacity: 0.6,
              fontWeight: "700",
              fontSize: height * 0.02,
              marginTop: height * 0.01,
            }}
          >
            {
              "Для автоматичного знаходження геолокації, натисніть на перемикач."
            }
          </Text>
        )}
      </View>
    );
  }
}
const style = StyleSheet.create({
  text: {
    color: "black",
    fontSize: height * 0.02,
    fontWeight: "500",
    alignSelf: "center",
    //backgroundColor: "red",
    height: "100%",
    width: "85%",
  },
});
const mapStateToProps = (state: any) => ({
  geoLocation: selectGeoLocation(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(LocationPage);
