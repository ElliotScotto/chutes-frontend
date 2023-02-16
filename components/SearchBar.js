import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
//
export default function SearchBar({ setSearchName }) {
  return (
    <View style={styles.mainSearchView}>
      <View style={styles.barSearch}>
        <View style={styles.iconSearch}>
          <Text>
            <Ionicons name="ios-compass-outline" size={24} color="grey" />
          </Text>
        </View>
        <View style={styles.inputSearch}>
          <TextInput
            placeholder="Rechercher par nom"
            autoCapitalize="none"
            onChangeText={(event) => {
              setSearchName(event);
            }}
          />
        </View>
      </View>
    </View>
  );
}
//
//
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainSearchView: {
    height: 60,
    backgroundColor: colors.scrapFirstColor,
    alignItems: "center",
    justifyContent: "center",
  },
  barSearch: {
    backgroundColor: "white",
    flexDirection: "row",
    width: widthScreen * 0.95,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  iconSearch: {
    height: 40,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",

    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  inputSearch: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
    width: "90%",
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
});
