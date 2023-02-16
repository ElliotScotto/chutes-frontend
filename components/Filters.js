import { StyleSheet, View, Text, Dimensions } from "react-native";
//Utils
import colors from "../utils/colors";
//
export default function Filters() {
  return (
    <View style={styles.mainContainerFilters}>
      <Text>Filtres</Text>
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainContainerFilters: {
    width: widthScreen,
    backgroundColor: colors.scrapFirstColor,
    height: 100,
  },
});
