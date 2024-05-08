import { ScrollView, TouchableOpacity, View } from "react-native";
import BackGroundGradinetView from "../../../SemiComponents/BackGround/BackGroundGradientView";
import { useState } from "react";
import Header from "./Settings Carousel Components/Header";
import FooterContainer from "../../Main page/Main carousel page/FooterContainer";
import FooterChoiceContainer from "../../Main page/Main carousel page/FooterChoiceContainer";
import { FooterContainerSVGComponent } from "../../../assets/SVG/Main Page SVG/RecomendationSVG";
import BasicIconSVG from "../../../assets/SVG/Settings SVG/BasicIconSVG";
import AllAboutYouSVG from "../../../assets/SVG/Settings SVG/AllAboutYouSVG";
import SearchSVG from "../../../assets/SVG/Settings SVG/SearchSVG";
import SecuritySVG from "../../../assets/SVG/Settings SVG/SecuritySVG";
import SettingsCategoryPage from "./Settings Category Page/SettingsCategoryPage";
import { useSelector } from "react-redux";
import { selectSecondPassword } from "../../../redux/Authorization/selectors";

interface SettingsCarouselProps {
  navigation: any;
  route: any;
}
interface SettingsPageForCarousel {
  topic: string;
  svg: FooterContainerSVGComponent;
  settingCategory: SettingsCategory;
}
export interface SettingsCategory {
  navigateTo: string;
  changeSettingsTopics: string[];
}

const SettingsCarousel: React.FC<SettingsCarouselProps> = ({ route }) => {
  const [selectPage, setSelectPage] = useState(route.params.id);
  const secondPassword = useSelector(selectSecondPassword);
  const settingPages: SettingsPageForCarousel[] = [
    {
      topic: "Основне",
      svg: BasicIconSVG,
      settingCategory: {
        changeSettingsTopics: [
          "Ім'я та прізвище",
          "Дата народження",
          "Гендер",
          "Біо",
        ],
        navigateTo: "BasicSettings",
      },
    },
    {
      topic: "Все про тебе",
      svg: AllAboutYouSVG,
      settingCategory: {
        changeSettingsTopics: [
          "Сексуальна орієнтація",
          "Зріст",
          "Діти",
          "Алкоголь?",
          "Палиш?",
        ],
        navigateTo: "AllAboutYouSettings",
      },
    },
    {
      topic: "Шукаю",
      svg: SearchSVG,
      settingCategory: {
        changeSettingsTopics: [
          "Я шукаю",
          "Пошукові налаштування",
          "Моє місцезнаходження",
        ],
        navigateTo: "SearchSettings",
      },
    },
    {
      topic: "Безпека",
      svg: SecuritySVG,
      settingCategory: {
        changeSettingsTopics: [
          "Змінити електронну пошту",
          secondPassword==""?"Додати пароль":"Змінити пароль",
          "Підтримка",
        ],
        navigateTo: "SecuritySettings",
      },
    },
  ];
  return (
    <BackGroundGradinetView>
      <Header topic={settingPages[selectPage].topic} />
      <ScrollView scrollEnabled={false}>
        <SettingsCategoryPage
          settingsCategory={settingPages[selectPage].settingCategory}
        />
      </ScrollView>
      <FooterContainer>
        {settingPages.map((page, index) => {
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
                text={page.topic}
              />
            </TouchableOpacity>
          );
        })}
      </FooterContainer>
    </BackGroundGradinetView>
  );
};

export default SettingsCarousel;
