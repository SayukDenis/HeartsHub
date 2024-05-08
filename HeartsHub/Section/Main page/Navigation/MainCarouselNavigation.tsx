import { Stack } from "../../../Navigation/Stack";
import MainCarouselPage from "../Main carousel page/MainCarouselPage";
import SettingsNavigation from "../../Settings/Navigation/SettingsNavigation";
const MainCarouselPageNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainCarouselPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainCarouselPage" component={MainCarouselPage} />
      <Stack.Screen
        name="SettingsNavigation"
        component={SettingsNavigation}
      />
    </Stack.Navigator>
  );
};

export default MainCarouselPageNavigation;
