import React from "react";
import SemiMainContainer from "../SemiComponents/SemiMainContainer";
import SemiMainFooterContainer from "../SemiComponents/SemiMainFooterContainer";
import SemiMainTopContainer from "../SemiComponents/SemiMainTopContainer";
import { CarouselPageComponent } from "../Recomendation page/RecomendationPage";
import { useSelector } from "react-redux";
import {
  selectDateForAuthorization,
  selectLinkToPhotoForAuthorization,
  selectNameForAuthorization,
  selectSurnameForAuthorization,
} from "../../../redux/Authorization/selectors";
import { Image, Text, View } from "react-native";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";
import { getAge } from "../Recomendation page/Functions";
import ButtonForProfile from "./ButtonForProfile";
import HeaderOfMainCarouselPage from "../Main carousel page/HeaderOfMainCarouselPage";
import { CommonActions, useNavigation } from "@react-navigation/native";

const UserProfilePage: CarouselPageComponent = ({}) => {
  const photos: string[] = useSelector(selectLinkToPhotoForAuthorization);
  const dateProps: string = useSelector(selectDateForAuthorization);
  const name: string = useSelector(selectNameForAuthorization);
  const surname: string = useSelector(selectSurnameForAuthorization);
  const dateArray: string[] = dateProps.split(",");
  const age: string = getAge(dateArray[0]).toString();
  const showZodiac: boolean = Number(dateArray[1]) == 1;
  const navigation = useNavigation();
  const widthOfPhoto = width * 0.4;
  const widthOfEditProfilePNG = width * 0.1;
  const getProfileText = (name: string, surname: string, age: string) => {
    let result = name;
    if (surname && surname != "") {
      result += " " + surname;
    }
    result += ", " + age;
    return result;
  };
  const pressOnMainButton = () => {
    navigation.dispatch(
      CommonActions.navigate({ name: "SettingsNavigation", params: { id: 0 } })
    );
  };
  const pressOnAllAboutButton = () => {
    navigation.dispatch(
      CommonActions.navigate({ name: "SettingsNavigation", params: { id: 1 } })
    );
  };
  const pressOnSearchButton = () => {
    navigation.dispatch(
      CommonActions.navigate({ name: "SettingsNavigation", params: { id: 2 } })
    );
  };
  const pressOnSecurityButton = () => {
    navigation.dispatch(
      CommonActions.navigate({ name: "SettingsNavigation", params: { id: 3 } })
    );
  };
  return (
    <SemiMainContainer>
      <HeaderOfMainCarouselPage
        leftText={"Профіль"}
        rightChildren={
          <Image
            style={{
              width: widthOfEditProfilePNG,
              height: (widthOfEditProfilePNG * 37) / 42,
              position: "absolute",
              right: 0,
              top: 0,
            }}
            source={require("../../../assets/PNG/Main page PNG/UserProfileEditPNG.png")}
          />
        }
      />
      <SemiMainTopContainer>
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <Image
            source={{ uri: photos[0] }}
            style={{
              width: widthOfPhoto,
              aspectRatio: 1,
              borderRadius: widthOfPhoto * 0.2,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontSize: height * 0.03,
              fontWeight: "800",
              marginTop: height * 0.02,
            }}
          >
            {getProfileText(name, surname, age)}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#862632",
            height: 6,
            width: "97%",
            alignSelf: "center",
            borderRadius: 15,
            marginTop: height * 0.03,
          }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: width * 0.04,
            }}
          >
            <ButtonForProfile text={"Основне"} onPress={pressOnMainButton} />
            <ButtonForProfile
              text={"Все про тебе"}
              onPress={pressOnAllAboutButton}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: width * 0.03,
            }}
          >
            <ButtonForProfile text={"Шукаю"} onPress={pressOnSearchButton} />
            <ButtonForProfile
              text={"Безпека"}
              onPress={pressOnSecurityButton}
            />
          </View>
        </View>
      </SemiMainTopContainer>
      <SemiMainFooterContainer></SemiMainFooterContainer>
    </SemiMainContainer>
  );
};

export default UserProfilePage;
