import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
//Utils
import colors from "../utils/colors";
//Components
import Filters from "./Filters";
import { useState } from "react";
//
//
export default function SearchBar({
  setSearchName,
  filtersVisible,
  setFiltersVisible,
  setSort,
}) {
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
              setSort(event);
            }}
          />
        </View>
      </View>
      <Pressable
        style={styles.displayFilters}
        onPress={() => {
          setFiltersVisible(!filtersVisible);
        }}
      >
        {!filtersVisible ? (
          <MaterialCommunityIcons
            name="filter"
            size={24}
            color={colors.scrapFirstColor}
          />
        ) : (
          <MaterialCommunityIcons
            name="filter-outline"
            size={24}
            color={colors.scrapFirstColor}
          />
        )}
      </Pressable>
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
    position: "relative",
  },
  displayFilters: {
    alignItems: "center",
    position: "absolute",
    // top: 18, //hauteur de la searchbar(60/2=30 >> hauteur icone=24 donc 30-12 )
    right: widthScreen * 0.05,
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
