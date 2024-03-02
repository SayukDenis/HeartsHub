import { Stack } from "../../Navigation/Navigation";
import AuthorizationCarousel from "../Authorization carousel page/AuthorizationCarousel";
import EnteringAnEmailAddressPage from "../Entering an email address page/EnteringAnEmailAddressPage";
import SignInOrSignUpPage from "../Sign in or sign up page/SignInOrSignUpPage";
import VerifyCodePage from "../Verify code page/VerifyCodePage";

const AuthorizationNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignInOrSignUpPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInOrSignUpPage" component={SignInOrSignUpPage} />
      <Stack.Screen
        name="AuthorizationCarousel"
        component={AuthorizationCarousel}
      />
    </Stack.Navigator>
  );
};

export default AuthorizationNavigation;
