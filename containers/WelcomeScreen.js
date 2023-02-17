import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.welcomeContainer}>
            <View style={styles.welcomeTitle}>
              <Text style={{ fontSize: 40 }}>Bienvenue</Text>
            </View>

            <View style={styles.infoApp}>
              <Text style={[styles.infoFont, styles.infoAppFont]}>
                Débarassez-vous de vos surplus et outils de bricolage qui ne
                vous serviront qu'une fois et faites le ménage sur votre établi
                !
              </Text>
            </View>
            <View style={styles.titleApp}>
              <Text style={styles.titleAppFont}>CHUTES</Text>
            </View>
            <View style={styles.appGoals}>
              <Text style={styles.infoFont}>Donnez</Text>
              <Text style={styles.infoFont}>Vendez</Text>
              <Text style={styles.infoFont}>Louez</Text>
              <Text style={[styles.infoFont, styles.infoFont2]}>Jetez</Text>
            </View>
            <View style={styles.infoMessage}>
              <Text style={styles.infoFont}>Plus d'excuses</Text>
            </View>
            <View style={styles.displayBtnHome}>
              <TouchableOpacity
                style={styles.btnHome}
                onPress={() => {
                  navigation.navigate("Tabs");
                }}
              >
                <Text style={styles.btnFontHome}>Demarrer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeContainer: {
    width: widthScreen * 0.9,
    height: heightScreen * 0.85,
    // borderColor: "black",
    // borderWidth: 1,
    position: "relative",
    justifyContent: "center",
  },
  welcomeTitle: {
    marginBottom: 50,
    alignItems: "center",
    // borderColor: "black", borderWidth: 1
  },

  infoApp: {
    marginBottom: 50,
    // borderColor: "black",
    // borderWidth: 1,
  },
  infoAppFont: { textAlign: "justify", lineHeight: 24 },
  infoFont: { fontSize: 16 },
  infoMessage: { alignItems: "center", marginTop: 20 },
  infoFont2: { textDecorationLine: "line-through" },
  titleApp: {
    marginBottom: 20,
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },
  titleAppFont: { fontWeight: "bold", fontSize: 24, color: "#568b44" },
  appGoals: {
    alignItems: "center",
    // borderColor: "black", borderWidth: 1
  },

  displayBtnHome: {
    marginTop: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },
  btnHome: {
    width: 200,
    height: 30,
    backgroundColor: "#568b44",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    // borderColor: "black",
    // borderWidth: 1,
  },
  btnFontHome: { color: "white", fontSize: 18 },
});
