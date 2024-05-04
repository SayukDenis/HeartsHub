import { Alert, FlatList, Image, Modal, Text, View } from "react-native";
import BackGroundGradinetView from "../../../../SemiComponents/BackGround/BackGroundGradientView";
import AuthorizationProgresBar from "../../../../SemiComponents/Other/AuthorizationProgresBar";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import {
  height,
  heightOfAuthorizationButton,
  width,
  widthOfButtonNext,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import BackButtonSVG from "../../../../assets/SVG/Semi SVG/BackButtonSVG";
import AuthorizationButton from "../../../../SemiComponents/Buttons/Authorization buttons/AuthorizationButton";
import { useDispatch, useSelector } from "react-redux";
import { selectLinkToPhotoForAuthorization } from "../../../../redux/Authorization/selectors";
import { setLinkToPhotoForAuthorization } from "../../../../redux/Authorization/Actions";
import InvokerState from "../../Abstract classes and interfaces/Command/InvokerState";
interface GalleryModalWindowProps {
  index: number;
  gallery: boolean;
  setGallery: Dispatch<SetStateAction<boolean>>;
  setModalWindow: Dispatch<SetStateAction<boolean>>;
  setPressedPage: Dispatch<SetStateAction<number | null>>;
}
interface PhotoLibrary {
  [uri: string]: number;
}

const GalleryModalWindow: React.FC<GalleryModalWindowProps> = ({
  index,
  gallery,
  setGallery,
  setModalWindow,
  setPressedPage,
}) => {
  const dispatch = useDispatch();
  const photos: string[] = useSelector(selectLinkToPhotoForAuthorization);
  const [galleryPhotos, setPhotos] = useState<MediaLibrary.Asset[]>();
  const [photoLibrary, setPhotoLibrary] = useState<PhotoLibrary>({});
  const marginForGalleryPhoto = 1;
  const radiusOfSelectContainer = width * 0.05;
  const [isValdiToContinue, setIsValidToContinue] = useState(false);
  useEffect(() => {
    gallery ? getPhotos() : null;
  }, [gallery]);
  const getPhotos = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Доступ до медіабібліотеки відмовлено",
        "Для використання функції вибору фотографій необхідно надати доступ до медіабібліотеки",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
      return;
    }

    let { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: "photo",
      first: Number.MAX_VALUE,
    });

    photos.forEach(async (uri, index) => {
      setPhotoLibrary((prevLibrary) => {
        const newLibrary = { ...prevLibrary };
        newLibrary[uri] = index + 1;
        return newLibrary;
      });
    });

    setPhotos(assets);
    assets = [];
  };
  const getNextGapNumber = () => {
    const numbers = Object.values(photoLibrary).sort((a, b) => a - b);
    let nextGapNumber = 1;
    for (const number of numbers) {
      if (number === nextGapNumber) {
        nextGapNumber++;
      } else {
        break;
      }
    }
    return nextGapNumber;
  };
  const isValidUriAndNumber = (
    library: Record<string, any>,
    uri: string
  ): boolean => {
    return library[uri];
  };

  useEffect(() => {
    setIsValidToContinue(Object.keys(photoLibrary).length > 0);
  }, [photoLibrary]);
  const onCountinueButtonPress = () => {
    const values: string[] = [];
    Object.keys(photoLibrary).map((key: string) => {
      values[photoLibrary[key] - 1] = key;
    });
    dispatch(
      setLinkToPhotoForAuthorization(
        values.filter((value) => value !== undefined)
      )
    );
    const invokerState: InvokerState = new InvokerState({
      dispatch,
      action: setLinkToPhotoForAuthorization,
      variableField: values.filter((value) => value !== undefined),
      attribute: "linkToPhoto",
      isAuthorized: false,
    });
    invokerState.request();
    setGallery(false);
    setPressedPage(null);
    setPhotoLibrary({});
  };
  return (
    <Modal transparent={true} visible={gallery}>
      <BackGroundGradinetView>
        <AuthorizationTitle text="Галерея" />
        <View style={{ height: height * 0.56 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={galleryPhotos}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  marginBottom: marginForGalleryPhoto,
                  marginRight: (index + 1) % 3 == 0 ? 0 : marginForGalleryPhoto,
                }}
                onPress={() => {
                  setPhotoLibrary((prevLibrary) => {
                    const newLibrary = { ...prevLibrary };
                    if (newLibrary.hasOwnProperty(item.uri)) {
                      delete newLibrary[item.uri];
                    } else {
                      if (Object.keys(prevLibrary).length === 6) {
                        return prevLibrary;
                      }
                      const nextEmptyKey = getNextGapNumber();
                      newLibrary[item.uri] = nextEmptyKey;
                    }
                    return newLibrary;
                  });
                }}
              >
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    width: (width - 2 * marginForGalleryPhoto) / 3,
                    aspectRatio: 1,
                    //backgroundColor: "red",
                  }}
                />
                {isValidUriAndNumber(photoLibrary, item.uri) ? (
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 10,
                      bottom: 0,
                      right: 0,
                      justifyContent: "center",
                      width: radiusOfSelectContainer,
                      aspectRatio: 1,
                      backgroundColor: "#0EB7FF",
                      borderRadius: radiusOfSelectContainer,
                      borderWidth: 1,
                      borderColor: "white",
                      margin: width * 0.01,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        alignSelf: "center",
                        fontSize: radiusOfSelectContainer * 0.7,
                        fontWeight: "800",
                      }}
                    >
                      {photoLibrary[item.uri]}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
          />
        </View>
        <View
          style={{
            flexDirection: "column-reverse",
          }}
        >
          <View
            style={{
              //backgroundColor: "blue",
              width: width * 0.8,
              alignSelf: "center",
              flexDirection: "row",
              marginTop: height * 0.028,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setGallery(false);
                setModalWindow(true);
                setPhotoLibrary({});
              }}
              style={{
                height: heightOfAuthorizationButton,
                width: heightOfAuthorizationButton * 1.074074,
                backgroundColor: "white",
                justifyContent: "center",
                zIndex: 10,
                borderRadius: heightOfAuthorizationButton,
                marginRight: 10,
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  marginRight: heightOfAuthorizationButton * 0.074074,
                }}
              >
                <BackButtonSVG height={heightOfAuthorizationButton * 2} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isValdiToContinue}
              onPress={onCountinueButtonPress}
              activeOpacity={0.7}
              style={{
                height: heightOfAuthorizationButton,
              }}
            >
              <AuthorizationButton
                text={"Далі"}
                buttonWidth={widthOfButtonNext}
                marginTop={0}
                color={isValdiToContinue ? "white" : "#B2848B"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </BackGroundGradinetView>
    </Modal>
  );
};

export default GalleryModalWindow;
