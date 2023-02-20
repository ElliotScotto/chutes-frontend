import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
//Utils
import colors from "../utils/colors";
//Components
import Filters from "./Filters";
import { useState } from "react";
import GreenHider from "./GreenHider.js";
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
            <AntDesign
              name={"search1"}
              size={20}
              color={colors.scrapFirstColor}
            />
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
    </View>
  );
}
//
//
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainSearchView: {
    // backgroundColor: colors.scrapFirstColor,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },

  barSearch: {
    width: widthScreen * 0.97,
    // marginTop: 3,
    // marginBottom: 5,
    backgroundColor: "white",
    borderColor: colors.scrapFirstColor,
    borderWidth: 1,
    flexDirection: "row",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  displayFilters: {
    alignItems: "center",
    justifyContent: "center",
    right: widthScreen * 0.08,
  },
  iconSearch: {
    height: 40,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    // borderTopLeftRadius: 3,
    // borderBottomLeftRadius: 3,
  },
  inputSearch: {
    height: 40,
    justifyContent: "center",
    backgroundColor: "white",
    width: "90%",
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
});
