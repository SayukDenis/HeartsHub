import { Dimensions, StatusBar, Platform } from "react-native";
import Constants from "expo-constants";
export const { width, height } = Dimensions.get("screen");
export const statusBarHeight =
  Platform.OS == "android"
    ? StatusBar.currentHeight == undefined
      ? 0
      : StatusBar.currentHeight
    : Constants.statusBarHeight;
export const marginTopForTextAuthorization = statusBarHeight + height * 0.08;
export const heightOfMainTitle = height * 0.05;
export const marginBetweenTitles = height * 0.01;
export const countOfAuthorizationPages = 10;
export const heightOfAuthorizationButton=height * 0.063;
export const widthOfButtonNext=width*0.63;
export const heightOfProgressAuthorization = height * 0.015;
