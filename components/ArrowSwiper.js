import React from "react";
// import { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Utils
import colors from "../utils/colors";
//
let arrowDisplay;
//
export default function ArrowSwiper({ title }) {
  let arrowFont = "";
  let arrowColor = "";
  {
    title === "Dimensions" ? (
      <>
        {(arrowFont = colors.lightBlack)};{" "}
        {(arrowColor = colors.scrapFirstColor)}
      </>
    ) : (
      <>
        {(arrowFont = "#fff")};{(arrowColor = "#fff")}
      </>
    );
  }
  return (
    <View style={[styles.mainContainer, { borderBottomColor: arrowColor }]}>
      <Text style={{ color: arrowFont }}>{title}</Text>

      <MaterialCommunityIcons
        style={styles.arrow}
        name="arrow-right"
        size={18}
        color={arrowColor}
      />
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;

const styles = StyleSheet.create({
  mainContainer: {
    width: widthScreen * 0.88,
    borderBottomWidth: 1,
    position: "relative",
    height: 18,
  },
  arrow: { position: "absolute", top: 8, right: -20 },
});
