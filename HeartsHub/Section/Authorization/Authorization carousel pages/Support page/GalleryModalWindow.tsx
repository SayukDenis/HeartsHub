import { Alert, FlatList,  Modal, View } from "react-native";
import BackGroundGradinetView from "../../../../SemiComponents/BackGround/BackGroundGradientView";
import { Image } from "expo-image";
import AuthorizationTitle from "../../../../SemiComponents/Other/AuthorizationTitle";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { TouchableOpacity } from "react-native-gesture-handler";
import {  useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";

interface GalleryModalWindowProps {
  gallery: boolean;
  setGallery: () => void;
  setPhoto: (photo: string) => void;
}


const GalleryModalWindow: React.FC<GalleryModalWindowProps> = ({
  gallery,
  setGallery,
  setPhoto,
}) => {
  const [galleryPhotos, setPhotos] = useState<string[]>();
  const marginForGalleryPhoto = 1;
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

    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
      
    });
    const assetsPromises = fetchedAlbums.map(async (album) => {
      
      const { assets } = await MediaLibrary.getAssetsAsync({
        album,
        first:Number.MAX_SAFE_INTEGER
        
      });
      return assets;
    });
    let assets: MediaLibrary.Asset[] = await Promise.all(assetsPromises).then(
      (arraysOfAssets) => {
        return arraysOfAssets.flat();
      }
      
    );
    let photo=assets.map((asset)=>{
      return asset.uri
    })
    
    setPhotos(photo);
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
                  setPhoto(item);
                }}
              >
                <Image
                  source={{ uri: item}}
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
