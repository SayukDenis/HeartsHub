import { Stack } from "../../../../Navigation/Stack";
import MainCarouselPageNavigation from "../../../Main page/Navigation/MainCarouselNavigation";
import AuthorizationCarousel from "../../Authorization carousel page/AuthorizationCarousel";
import SignInOrSignUpPage from "../../Authorization carousel page/Sign in or sign up page/SignInOrSignUpPage";

const AuthorizationNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainCarouselPageNavigation"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInOrSignUpPage" component={SignInOrSignUpPage} />
      <Stack.Screen
        name="AuthorizationCarousel"
        component={AuthorizationCarousel}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="MainCarouselPageNavigation"
        component={MainCarouselPageNavigation}
      />
    </Stack.Navigator>
  );
};

export default AuthorizationNavigation;
