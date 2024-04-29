import { Image, ScrollView, TouchableOpacity } from "react-native";
import BackGroundGradinetView from "../../../SemiComponents/BackGround/BackGroundGradientView";
import RecomendationPage from "../Recomendation page/RecomendationPage";
import HeaderOfMainCarouselPage from "./HeaderOfMainCarouselPage";
import RecomendationSVG from "../../../assets/SVG/Main Page SVG/RecomendationSVG";
import FooterChoiceContainer from "./FooterChoiceContainer";
import DatingSVG from "../../../assets/SVG/Main Page SVG/DatingSVG";
import CalendarMonthSVG from "../../../assets/SVG/Main Page SVG/CalendarMonthSVG";
import UserProfileSVG from "../../../assets/SVG/Main Page SVG/UserProfileSVG";
import { ChoosePageInterface } from "./Interfaces and data/ChoosePageInterface";
import { useEffect, useRef, useState } from "react";
import DatingPage from "../Dating page/DatingPage";
import EventsPage from "../Events page/EventsPage";
import UserProfilePage from "../User profile page/UserProfilePage";
import FooterContainer from "./FooterContainer";
import WrapperForCarouselPages from "./WrapperForCarouselPages";
import { width } from "../../../SemiComponents/Constants/SizeConstants";
interface MainCarouselPageProps {}
const pages: ChoosePageInterface[] = [
  {
    titleOfPage: "Історія",
    svg: RecomendationSVG,
    mainPage: RecomendationPage,
  },
  { titleOfPage: "Знайомства", svg: DatingSVG, mainPage: DatingPage },
  { titleOfPage: "Події", svg: CalendarMonthSVG, mainPage: EventsPage },
  { svg: UserProfileSVG, titleOfPage: "Профіль", mainPage: UserProfilePage },
];
const MainCarouselPage: React.FC<MainCarouselPageProps> = ({}) => {
  const [selectPage, setSelectPage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  
  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      x: selectPage * width,
      animated: false,
    });
  }, [selectPage]);
  return (
    <BackGroundGradinetView>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        {pages.map((page, index) => {
          return (
            <WrapperForCarouselPages Component={page.mainPage} key={index} />
          );
        })}
      </ScrollView>
      <FooterContainer>
        {pages.map((page, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.8}
              onPress={() => {
                setSelectPage(index);
              }}
            >
              <FooterChoiceContainer
                isSelected={index == selectPage}
                SVG={page.svg}
                text={page.titleOfPage}
              />
            </TouchableOpacity>
          );
        })}
      </FooterContainer>
    </BackGroundGradinetView>
  );
};

export default MainCarouselPage;
