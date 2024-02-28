import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthorizationNavigation from "../Authorization/Navigation/AuthorizationNavigation";
export const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"AuthorizationNavigation"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AuthorizationNavigation" component={AuthorizationNavigation} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;