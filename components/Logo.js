import { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
// import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
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
      <Text style={styles.fontTitleHeader}>CHUTES</Text>
      {/* <MaterialCommunityIcons
        name="lightbulb-fluorescent-tube-outline"
        size={24}
        color="#fff"
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  displayLogo: {
    height: 30,
    justifyContent: "flex-end",
  },
  fontTitleHeader: {
    fontSize: 18,
    fontFamily: "Montserrat_Medium",
    color: "#fff",
  },
});
