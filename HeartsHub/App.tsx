import { View, StatusBar, Text, AppRegistry } from "react-native";
import Navigation from "./Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import LoadingPage from "./Section/Authorization/Other/Loading page/LoadingPage";

export default function App() {
  StatusBar.setBarStyle("dark-content");
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <LoadingPage/>
        <Navigation />
      </Provider>
    </View>
  );
}
const appName = "HeartsHub";
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName.toLowerCase(), () => App);
