import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import colors from "../utils/colors";
export default function Loading() {
  return (
    <View style={styles.containerActivityIndicator}>
      {/* <Text>Chargement en cours...</Text> */}
      <ActivityIndicator size="small" color={colors.scrapFirstColor} />
    </View>
  );
}
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  containerActivityIndicator: {
    height: heightScreen / 2,
    justifyContent: "center",
  },
});
