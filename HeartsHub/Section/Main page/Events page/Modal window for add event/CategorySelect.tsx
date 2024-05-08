import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  height,
  width,
} from "../../../../SemiComponents/Constants/SizeConstants";
import { categoryOfEvents } from "../DataForEvents";

interface CategorySelectProps {
  selectCategory: number;
  setSelectCategory: Dispatch<SetStateAction<number>>;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selectCategory,
  setSelectCategory,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{ fontWeight: "700", fontSize: height * 0.019, marginBottom: 5 }}
      >
        {"Категорія"}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        activeOpacity={0.6}
        style={{
          padding: 10,
          borderWidth: 2,
          flexDirection: "row",
          borderRadius: 15,
          width: width * 0.3,
          marginBottom: 5,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: height * 0.018,
            fontWeight: "800",
            alignSelf: "center",
          }}
        >
          {categoryOfEvents[selectCategory]}
        </Text>
      </TouchableOpacity>
      {isPressed ? (
        <View
          style={{
            borderWidth: 2,
            width: width * 0.3,
            borderRadius: 15,
          }}
        >
          {categoryOfEvents.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setIsPressed(false);
                    setSelectCategory(index);
                  }}
                  style={{
                    padding: 8,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: height * 0.018,
                      fontWeight: "800",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
                {index == categoryOfEvents.length - 1 ? null : (
                  <View
                    style={{
                      backgroundColor: "#232323",
                      width: "90%",
                      height: 2,
                      alignSelf: "center",
                      opacity: 0.5,
                    }}
                  />
                )}
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default CategorySelect;
