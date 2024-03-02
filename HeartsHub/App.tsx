import { View, StatusBar, Text, AppRegistry } from "react-native";
import Navigation from "./Navigation/Navigation";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

export default function App() {
  StatusBar.setBarStyle("dark-content");
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <Navigation />
      </Provider>
    </View>
  );
}
const appName = "HeartsHub";
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName.toLowerCase(), () => App);
