import React, { RefObject, createRef } from "react";
import { Image } from "expo-image";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import AuthorizationInput from "../../../../SemiComponents/Inputs/AuthorizationInput";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";

import { connect } from "react-redux";
import {
  setEmailForAuthorization,
  setFulfillmentOfTheConditionForTheNextButtonAuthorization,
  setIsEnableNextButtonAuthorization,
  setIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/Actions";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
} from "../../../../redux/Authorization/selectors";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import GraphemeSplitter from "grapheme-splitter";
import PhotoContainer from "../Choose photo page/PhotoContainer";
import AddSVG from "../../../../assets/SVG/Authorization SVG/AddSVG";
import { margin, widthOfPhotoContainer } from "../Choose photo page/Exports";
import GalleryModalWindow from "./GalleryModalWindow";

class SupportPage extends RegistrationPage {
  private inputRef: RefObject<TextInput>;
  private splitter = new GraphemeSplitter();
  private maxChars = 500;
  constructor(props: any) {
    super(props);
    this.state = {
      input: "",
      photo: "",
      gallery: false,
    };
    this.inputRef = createRef();
    this.State = this.returnState();
  }
  protected checkingForEnableButton = (arrayOfBindings: any[]) => {
    const { input, photo }: any = this.state;
    return photo != "" && input.trim().length > 0;
  };
  protected checkingGoToNextPage = (arrayOfBindings: any[]) => {
    this.dispatch(setIsPressedNextButtonAuthorization(false));

    this.dispatch(setIsEnableNextButtonAuthorization(false));
    this.dispatch(
      setFulfillmentOfTheConditionForTheNextButtonAuthorization(true)
    );
  };
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
    const { inputEmail }: any = this.state;
    this.State.defineState(
      [inputEmail],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { input, photo, gallery }: any = this.state;

    return (
      <View style={{ width }}>
        <AuthorizationTitle text="Підтримка" />
        <ScrollView
          style={{ height: height * 0.589 }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity activeOpacity={1}>
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
                value={input}
                onChangeText={(text) => {
                  this.setState({ input: text });
                }}
                placeholder="Введіть свою проблему*"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
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
                  {this.splitter.splitGraphemes(input).length +
                    "/" +
                    this.maxChars}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginLeft: -margin / 2 + width * 0.1,
                width: width * 0.8 + margin / 2,
                flexDirection: "row",
                marginTop: height * 0.02,
                justifyContent: "space-between",
                //backgroundColor:"red"
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.setState({ gallery: true });
                }}
              >
                <PhotoContainer>
                  {photo == "" ? (
                    <AddSVG />
                  ) : (
                    <Image
                      source={{ uri: photo }}
                      style={{ flex: 1, width: widthOfPhotoContainer }}
                    />
                  )}
                </PhotoContainer>
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: height * 0.02,
                  fontWeight: "500",
                }}
              >
                {"Додати фото доказ*"}
              </Text>
            </View>
            <Text
              style={{
                marginLeft: width * 0.1,
                width: width * 0.8,
                fontSize: height * 0.02,
                color: "white",
                opacity: 0.6,
                fontWeight: "700",
              }}
            >
              {
                "Протягом 24 годин вам буде надіслана відповідь на вашу поточну пошту."
              }
            </Text>
            <View style={{ height: height * 0.4 }}></View>
          </TouchableOpacity>
        </ScrollView>
        <GalleryModalWindow
          gallery={gallery}
          setGallery={() => {
            this.setState({ gallery: false });
          }}
          setPhoto={(photo: string) => {
            this.setState({ photo: photo });
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(SupportPage);
