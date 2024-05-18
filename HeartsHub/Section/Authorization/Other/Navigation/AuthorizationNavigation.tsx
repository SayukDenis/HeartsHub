import { useSelector } from "react-redux";
import { Stack } from "../../../../Navigation/Stack";
import MainCarouselPageNavigation from "../../../Main page/Navigation/MainCarouselNavigation";
import AuthorizationCarousel from "../../Authorization carousel page/AuthorizationCarousel";
import SignInOrSignUpPage from "../../Authorization carousel page/Sign in or sign up page/SignInOrSignUpPage";
import { selectId } from "../../../../redux/Authorization/selectors";
import Authorization from "../../Authorization carousel page/Authorization";

const AuthorizationNavigation = () => {
  const id =useSelector(selectId);
  if(id&&id!="" ){
    return (
      <Stack.Navigator
        initialRouteName={"MainCarouselPageNavigation"}
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="MainCarouselPageNavigation"
          component={MainCarouselPageNavigation}
        />
      </Stack.Navigator>
    );
  }
  else{
    return (
      <Stack.Navigator
        initialRouteName={"SignInOrSignUpPage"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignInOrSignUpPage" component={SignInOrSignUpPage} />
        <Stack.Screen
          name="AuthorizationCarousel"
          component={Authorization}
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
  }
  
};

export default AuthorizationNavigation;
