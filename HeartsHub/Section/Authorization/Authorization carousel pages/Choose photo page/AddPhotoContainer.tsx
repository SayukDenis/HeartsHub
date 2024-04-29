import { Image, TouchableOpacity } from "react-native";
import PhotoContainer from "./PhotoContainer";
import AddSVG from "../../../../assets/SVG/Authorization SVG/AddSVG";
import { useSelector } from "react-redux";
import { selectLinkToPhotoForAuthorization } from "../../../../redux/Authorization/selectors";
import { widthOfPhotoContainer } from "./Exports";
;

interface AddPhotoContainerProps {
  countOfSelectPhoto: number;

}

const AddPhotoContainer: React.FC<AddPhotoContainerProps> = ({
  countOfSelectPhoto,

}) => {
  const photos: string[] = useSelector(selectLinkToPhotoForAuthorization);
  return (

      <PhotoContainer isClicable={photos.length >= countOfSelectPhoto}>
        {photos[countOfSelectPhoto] == undefined ? (
          <AddSVG />
        ) : (
          <Image
            source={{ uri: photos[countOfSelectPhoto] }}
            style={{ flex: 1, width: widthOfPhotoContainer }}
          />
        )}
      </PhotoContainer>

  );
};

export default AddPhotoContainer;
