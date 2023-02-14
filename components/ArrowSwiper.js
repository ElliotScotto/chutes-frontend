import React from "react";
import { useState } from "react";
import { View, StyleSheet, Dimensions, Text, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
let arrowDisplay;

export default function ArrowSwiper({ title }) {
  let arrowStyle = "";

  {
    title === "Dimensions" ? (arrowStyle = "#566844") : (arrowStyle = "#fff");
  }
  return (
    <View style={[styles.mainContainer, { borderBottomColor: arrowStyle }]}>
      <Text style={{ color: arrowStyle, fontWeight: "500" }}>{title}</Text>

      <MaterialCommunityIcons
        style={styles.arrow}
        name="arrow-right"
        size={18}
        color={arrowStyle}
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
