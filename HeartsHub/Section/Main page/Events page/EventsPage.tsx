import React, { useState } from "react";
import SemiMainContainer from "../SemiComponents/SemiMainContainer";
import SemiMainFooterContainer from "../SemiComponents/SemiMainFooterContainer";
import SemiMainTopContainer from "../SemiComponents/SemiMainTopContainer";
import { CarouselPageComponent } from "../Recomendation page/RecomendationPage";
import { FlatList, Modal, Text, View } from "react-native";
import EventItem from "./EventItem";
import { events } from "../../../Initialization.tsx/InitializationEvents";
import {
  height,
  statusBarHeight,
  width,
} from "../../../SemiComponents/Constants/SizeConstants";
import EventsFooterButtonContainer from "./EventsFooterButtonContainer";
import AddMainPhotoSVG from "../../../assets/SVG/Authorization SVG/AddMainPhotoSVG";
import CategorySelectSVG from "../../../assets/SVG/Main Page SVG/CategorySelectSVG";
import AddSVG from "../../../assets/SVG/Authorization SVG/AddSVG";
import ModalWindowForAddEvent from "./Modal window for add event/ModalWindowForAddEvent";
import HeaderOfMainCarouselPage from "../Main carousel page/HeaderOfMainCarouselPage";

const EventsPage: CarouselPageComponent = () => {
  const [addEvent, setAddEvent] = useState(false);
  return (
    <SemiMainContainer>
      <HeaderOfMainCarouselPage
        leftText={"Події"}
        rightChildren={
          <Text
            style={{
              color: "white",
              fontSize: height * 0.015,
              fontWeight: "700",
              alignSelf: "center",
            }}
          >
            {}
          </Text>
        }
      />
      <SemiMainTopContainer>
        <FlatList
          data={events}
          key={"_"}
          keyExtractor={(item, index) => {
            return "_" + item.id.toString();
          }}
          renderItem={({ item, index }) => (
            <EventItem key={item.id} event={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </SemiMainTopContainer>
      <SemiMainFooterContainer>
        <View
          style={{
            //backgroundColor: "black",
            alignSelf: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            padding: width * 0.05,
          }}
        >
          <EventsFooterButtonContainer>
            <CategorySelectSVG />
          </EventsFooterButtonContainer>
          <EventsFooterButtonContainer
            onPress={() => {
              setAddEvent(true);
            }}
          >
            <AddSVG widthOfPlus={width * 0.06} />
          </EventsFooterButtonContainer>
        </View>
      </SemiMainFooterContainer>
      <ModalWindowForAddEvent addEvent={addEvent} setAddEvent={setAddEvent} />
    </SemiMainContainer>
  );
};

export default EventsPage;
