import { StyleSheet, Text, View } from "react-native";
import { Event } from "../../../Models/Event";
import { height, width } from "../../../SemiComponents/Constants/SizeConstants";

interface EventItemProps {
  event: Event;
}
const marginBottom = 5;
const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <View
      style={{
        marginBottom: 20,
        width: width * 0.9,
        overflow: "hidden",
        alignSelf: "center",
        borderRadius: 30,
        padding: 20,
      }}
    >
      <Text
        style={[{ fontWeight: "800", fontSize: height * 0.025, marginBottom }]}
      >
        {event.title}
      </Text>
      <View
        style={{
          width: "100%",
          height: 2,
          backgroundColor: "black",
          marginBottom,
          borderRadius: 100,
        }}
      />
      <Text style={[style.text, { fontSize: height * 0.018 }]}>
        {"Опис: " + event.description}
      </Text>
      <Text style={[style.text]}>Адреса: {event.adress}</Text>
      <Text style={[style.text]}>Час: {event.date.toLocaleString()}</Text>
      <Text style={[style.text]}>Категорія: {event.category}</Text>
      <View
        style={{
          backgroundColor: "white",
          width,
          position: "absolute",
          height: height,
          zIndex: -1,
          opacity: 0.6,
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  text: { color: "black", fontWeight: "700", marginBottom },
});

export default EventItem;
