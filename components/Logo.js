import { useCallback } from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
// import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
//Utils
import colors from "../utils/colors";
//
export default function Logo() {
  const [fontsLoaded] = useFonts({
    Montserrat_Thin: require("../assets/fonts/montserrat/Montserrat-Thin.ttf"),
    Montserrat_Light: require("../assets/fonts/montserrat/Montserrat-Light.ttf"),
    Montserrat_Regular: require("../assets/fonts/montserrat/Montserrat-Regular.ttf"),
    Montserrat_Medium: require("../assets/fonts/montserrat/Montserrat-Medium.ttf"),
    Montserrat_SemiBold: require("../assets/fonts/montserrat/Montserrat-SemiBold.ttf"),
    Montserrat_Bold: require("../assets/fonts/montserrat/Montserrat-Bold.ttf"),
    Montserrat_BoldItalic: require("../assets/fonts/montserrat/Montserrat-BoldItalic.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={styles.displayLogo}>
      {/* <View
        style={{
          position: "absolute",
          bottom: -10,
          right:
            Platform.OS === "ios" ? widthScreen * 0.565 : widthScreen * 0.585,
          height: 20,
          width: widthScreen * 0.05,
          backgroundColor: colors.scrapFirstColor,
        }}
      /> */}
      <Text style={styles.fontTitleHeader}>CHUTES</Text>
      {/* <MaterialCommunityIcons
        name="lightbulb-fluorescent-tube-outline"
        size={24}
        color="#fff"
      /> */}
      {/* <View
        style={{
          position: "absolute",
          bottom: -10,
          left:
            Platform.OS === "ios" ? widthScreen * 0.565 : widthScreen * 0.585,
          height: 20,
          width: widthScreen * 0.05,
          backgroundColor: colors.scrapFirstColor,
        }}
      /> */}
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  displayLogo: {
    height: 30,
    justifyContent: "flex-end",
    position: "relative",
  },
  fontTitleHeader: {
    fontSize: 18,
    fontFamily: "Montserrat_Medium",
    color: colors.scrapFirstColor,
  },
});
