import { NavigationContainer } from "@react-navigation/native";
import AuthorizationNavigation from "../Section/Authorization/Other/Navigation/AuthorizationNavigation";
import { Stack } from "./Stack";
import SettingsNavigation from "../Section/Settings/Navigation/SettingsNavigation";


const Navigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="O"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="AuthorizationNavigation"
          component={AuthorizationNavigation}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
