import { View, StyleSheet, Dimensions, Text } from "react-native";
export default function GreenHider() {
  <View style={styles.greenContainer}>
    <Text>coucou</Text>
  </View>;
}
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  greenContainer: {
    position: "absolute",
    top: 10,
    left: 1,
    height: 20,
    width: widthScreen * 0.05,
    backgroundColor: "black",
  },
});
