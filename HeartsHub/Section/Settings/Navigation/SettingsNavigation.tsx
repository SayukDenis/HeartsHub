import { Stack } from "../../../Navigation/Stack";
import AllAboutYouSettings from "../Categories/All About You Settings/AllAboutYouSettings";
import BasicSettings from "../Categories/Basic Settings/BasicSettings";
import SearchSettings from "../Categories/Search Settings/SearchSettings";
import SecuritySettings from "../Categories/Security Settings/SecuritySettings";
import SettingsCarousel from "../Settings Carousel/SettingsCarousel";

const SettingsNavigation = ({ route }: any) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsCarousel"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SettingsCarousel"
        component={SettingsCarousel}
        initialParams={route.params}
      />
      <Stack.Screen
        name="BasicSettings"
        component={BasicSettings}
        initialParams={route.params}
      />
      <Stack.Screen
        name="AllAboutYouSettings"
        component={AllAboutYouSettings}
        initialParams={route.params}
      />
      <Stack.Screen
        name="SearchSettings"
        component={SearchSettings}
        initialParams={route.params}
      />
       <Stack.Screen
        name="SecuritySettings"
        component={SecuritySettings}
        initialParams={route.params}
        options={{ presentation: "transparentModal" }}
      />
    </Stack.Navigator>
  );
};
const SettingsNavigator = ({ route }: any) => {
  
};

export default SettingsNavigation;
