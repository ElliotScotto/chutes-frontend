import React from "react";
import { useState } from "react";
import { View, StyleSheet, Dimensions, Text, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Utils
import colors from "../utils/colors";
//
let arrowDisplay;
//
export default function ArrowSwiper({ title }) {
  let arrowStyle = "";

  {
    title === "Dimensions" ? (arrowStyle = "black") : (arrowStyle = "#fff");
  }
  return (
    <View
      style={[
        styles.mainContainer,
        { borderBottomColor: colors.scrapFirstColor },
      ]}
    >
      <Text style={{ color: arrowStyle }}>{title}</Text>

      <MaterialCommunityIcons
        style={styles.arrow}
        name="arrow-right"
        size={18}
        color={colors.scrapFirstColor}
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
