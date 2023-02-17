import { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
//Utils
import colors from "../utils/colors";
//
export default function CreationSection({ props }) {
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
    <View style={styles.customSection} onLayout={onLayoutRootView}>
      <Text style={styles.fontSection}>{props}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  customSection: {
    width: "90%",
    // borderColor: "#568b44",
    // borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  fontSection: {
    color: colors.scrapSecondColor,
    textTransform: "uppercase",
    fontSize: 20,
    fontFamily: "Montserrat_Light",
  },
});
