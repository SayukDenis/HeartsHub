import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { Image } from "expo-image";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import PhotoContainer from "./PhotoContainer";
import AddMainPhotoSVG from "../../../../assets/SVG/Authorization SVG/AddMainPhotoSVG";
import { connect } from "react-redux";
import {
  selectAuthorizationPage,
  selectIsPressedNextButtonAuthorization,
  selectLinkToPhotoForAuthorization,
} from "../../../../redux/Authorization/selectors";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import AddPhotoContainer from "./AddPhotoContainer";
import GalleryModalWindow from "./GalleryModalWindow";
import CameraModalWindow from "./CameraModalWindow";
import { margin, widthOfPhotoContainer } from "./Exports";
import { RegistrationPage } from "../../Abstract classes and interfaces/Template method/RegistrationPage";
import SafeAreaContainer from "./SafeAreaContainer";

class ChoosePhotoPage extends RegistrationPage {
  private borderRadius = 20;
  constructor(props: any) {
    super(props);
    this.state = {
      pressedPage: null,
      modalWindos: false,
      gallery: false,
      camera: false,
    };
    this.State = this.returnState();
  }
  checkingForEnableButton = (arrayOfBindings: any[]) => {
    return arrayOfBindings[0].length == 6;
  };
  componentDidUpdate(prevProps: any, props: any) {
    const { page, index }: any = this.props;
    if (page == index + 1) {
      this.defineState();
    }
  }
  defineState = () => {
    const { isPressedNextButtonAuthorization }: any = this.props;
    const { photos }: any = this.props;
    this.State.defineState(
      [photos],
      isPressedNextButtonAuthorization as boolean
    );
  };
  render() {
    const { pressedPage, modalWindos, gallery, camera }: any = this.state;
    const { photos }: any = this.props;
    return (
      <View style={{ width: width }}>
        <AuthorizationTitle text="Обери фото" />
        <View style={{ marginHorizontal: margin / 2 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ opacity: pressedPage == 0 ? 0 : 1 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.setState({ pressedPage: 0 });
                  this.setState({ modalWindos: true });
                }}
              >
                <PhotoContainer
                  widthOfContainer={widthOfPhotoContainer * 2 + margin}
                >
                  {photos[0] === undefined ? (
                    <>
                      <View style={{ alignSelf: "center" }}>
                        <AddMainPhotoSVG />
                      </View>
                      <Text
                        style={{
                          fontSize: height * 0.02,
                          fontWeight: "800",
                          width: (widthOfPhotoContainer * 2 + margin) / 1.5,
                          textAlign: "center",
                          marginTop: margin / 2,
                        }}
                      >
                        {"Додати головне фото"}
                      </Text>
                    </>
                  ) : (
                    <Image
                      source={{ uri: photos[0] }}
                      style={{
                        zIndex: 10,
                        width: widthOfPhotoContainer * 2 + margin,
                        aspectRatio: 1,
                      }}
                    />
                  )}
                </PhotoContainer>
              </TouchableOpacity>
            </View>
            <View>
              <View style={{ opacity: pressedPage == 1 ? 0 : 1 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    this.setState({ pressedPage: 1 });
                    this.setState({ modalWindos: true });
                  }}
                  disabled={photos.length < 1}
                >
                  <AddPhotoContainer countOfSelectPhoto={1} />
                </TouchableOpacity>
              </View>
              <View style={{ opacity: pressedPage == 2 ? 0 : 1 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    this.setState({ pressedPage: 2 });
                    this.setState({ modalWindos: true });
                  }}
                  disabled={photos.length < 2}
                >
                  <AddPhotoContainer countOfSelectPhoto={2} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ opacity: pressedPage == 5 ? 0 : 1 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.setState({ pressedPage: 5 });
                  this.setState({ modalWindos: true });
                }}
                disabled={photos.length < 5}
              >
                <AddPhotoContainer countOfSelectPhoto={5} />
              </TouchableOpacity>
            </View>
            <View style={{ opacity: pressedPage == 4 ? 0 : 1 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.setState({ pressedPage: 4 });
                  this.setState({ modalWindos: true });
                }}
                disabled={photos.length < 4}
              >
                <AddPhotoContainer countOfSelectPhoto={4} />
              </TouchableOpacity>
            </View>
            <View style={{ opacity: pressedPage == 3 ? 0 : 1 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.setState({ pressedPage: 3 });
                  this.setState({ modalWindos: true });
                }}
                disabled={photos.length < 3}
              >
                <AddPhotoContainer countOfSelectPhoto={3} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Modal transparent={true} visible={modalWindos}>
          {Platform.OS === "android" ? (
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "black",
                opacity: 0.7,
              }}
            />
          ) : (
            <>
              <StatusBar hidden />
              <BlurView
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                intensity={20}
              />
            </>
          )}
          <View
            style={{ marginHorizontal: margin / 2, marginTop: height * 0.288 }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ opacity: pressedPage == 0 ? 1 : 0 }}>
                <PhotoContainer
                  widthOfContainer={widthOfPhotoContainer * 2 + margin}
                >
                  {photos[0] === undefined ? (
                    <>
                      <View style={{ alignSelf: "center" }}>
                        <AddMainPhotoSVG />
                      </View>
                      <Text
                        style={{
                          fontSize: height * 0.02,
                          fontWeight: "800",
                          width: (widthOfPhotoContainer * 2 + margin) / 1.5,
                          textAlign: "center",
                          marginTop: margin / 2,
                        }}
                      >
                        {"Додати головне фото"}
                      </Text>
                    </>
                  ) : (
                    <Image
                      source={{ uri: photos[0] }}
                      style={{
                        zIndex: 10,
                        width: widthOfPhotoContainer * 2 + margin,
                        aspectRatio: 1,
                      }}
                    />
                  )}
                </PhotoContainer>
              </View>
              <View>
                <View style={{ opacity: pressedPage == 1 ? 1 : 0 }}>
                  <AddPhotoContainer countOfSelectPhoto={1} />
                </View>
                <View style={{ opacity: pressedPage == 2 ? 1 : 0 }}>
                  <AddPhotoContainer countOfSelectPhoto={2} />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ opacity: pressedPage == 5 ? 1 : 0 }}>
                <AddPhotoContainer countOfSelectPhoto={5} />
              </View>
              <View style={{ opacity: pressedPage == 4 ? 1 : 0 }}>
                <AddPhotoContainer countOfSelectPhoto={4} />
              </View>
              <View style={{ opacity: pressedPage == 3 ? 1 : 0 }}>
                <AddPhotoContainer countOfSelectPhoto={3} />
              </View>
            </View>
          </View>
          <SafeAreaContainer>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ camera: true });
                this.setState({ modalWindos: false });
              }}
              style={[
                {
                  borderTopEndRadius: this.borderRadius,
                  borderTopStartRadius: this.borderRadius,
                },
                style.modalContainer,
              ]}
            >
              <Text style={[{ color: "white" }, style.modalText]}>
                {"Зробити фото"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ gallery: true });
                this.setState({ modalWindos: false });
              }}
              activeOpacity={0.8}
              style={[
                {
                  borderBottomEndRadius: this.borderRadius,
                  borderBottomStartRadius: this.borderRadius,
                  borderTopWidth: 0,
                },
                style.modalContainer,
              ]}
            >
              <Text style={[{ color: "white" }, style.modalText]}>
                {"Обрати з галереї"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ pressedPage: null });
                this.setState({ modalWindos: false });
              }}
              style={[
                {
                  borderRadius: this.borderRadius,
                  marginTop: height * 0.01,
                },
                style.modalContainer,
              ]}
            >
              <Text style={[{ color: "#FFB076" }, style.modalText]}>
                {"Скасувати"}
              </Text>
            </TouchableOpacity>
          </SafeAreaContainer>
        </Modal>

        <GalleryModalWindow
          index={(this.props as any).index}
          gallery={gallery}
          setGallery={(state: any) => {
            this.setState({ gallery: state });
          }}
          setModalWindow={(state: any) => {
            this.setState({ modalWindos: state });
          }}
          setPressedPage={(state: any) => {
            this.setState({ pressedPage: state });
          }}
        />
        <CameraModalWindow
          camera={camera}
          index={pressedPage}
          setCamera={(state: any) => {
            this.setState({ camera: state });
          }}
          setModalWindow={(state: any) => {
            this.setState({ modalWindos: state });
          }}
          setPressedPage={(state: any) => {
            this.setState({ pressedPage: state });
          }}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  modalText: {
    alignSelf: "center",
    fontSize: height * 0.019,
    fontWeight: "600",
  },
  modalContainer: {
    width: width * 0.9,
    backgroundColor: "#B8545A",
    alignSelf: "center",
    height: height * 0.06,
    borderColor: "#7C1D2A",
    borderWidth: 2,
    justifyContent: "center",
  },
});
const mapStateToProps = (state: any) => ({
  photos: selectLinkToPhotoForAuthorization(state),
  isPressedNextButtonAuthorization:
    selectIsPressedNextButtonAuthorization(state),
  page: selectAuthorizationPage(state),
});
export default connect(mapStateToProps)(ChoosePhotoPage);
