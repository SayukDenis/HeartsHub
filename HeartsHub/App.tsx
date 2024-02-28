import { View, StatusBar, Text, AppRegistry } from "react-native";
import Navigation from "./Navigation/Navigation";
import { registerRootComponent } from 'expo';

export default function App() {
  StatusBar.setBarStyle("dark-content");
  return (
    <View style={{height:"100%",width:"100%"}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigation/>
      
    </View>
  );
}
const appName="HeartsHub"
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName.toLowerCase(), () => App)
