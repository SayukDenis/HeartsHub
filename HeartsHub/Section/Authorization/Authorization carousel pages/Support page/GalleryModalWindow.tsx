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
interface GalleryModalWindowProps {
  gallery: boolean;
  setGallery: () => void;
  setPhoto: (photo: string) => void;
}
interface PhotoLibrary {
  [uri: string]: number;
}

const GalleryModalWindow: React.FC<GalleryModalWindowProps> = ({
  gallery,
  setGallery,
  setPhoto,
}) => {
  const [galleryPhotos, setPhotos] = useState<MediaLibrary.Asset[]>();
  const marginForGalleryPhoto = 1;
  const radiusOfSelectContainer = width * 0.05;
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

    setPhotos(assets);
    assets = [];
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
                  setGallery();
                  setPhoto(item.uri);
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
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
          />
        </View>
      </BackGroundGradinetView>
    </Modal>
  );
};

export default GalleryModalWindow;
