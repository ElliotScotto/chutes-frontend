import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
//Packages
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
// <AntDesign name="check" size={24} color="black" />
//Utils
import colors from "../utils/colors";
//
export default function Filters({
  filter,
  handleFilter,
  ascending,
  descending,
  handleAscendingChange,
  handleDescendingChange,
}) {
  //Condition
  // const [perfect, setPerfect] = useState(false);
  // const [good, setGood] = useState(false);
  // const [acceptable, setAcceptable] = useState(false);
  // const [damaged, setDamaged] = useState(false);
  // const [ruined, setRuined] = useState(false);
  // const [freePrice, setFreePrice] = useState(false);
  //Sort Price
  // const [isAsc, setIsAsc] = useState(false);
  // const [isDesc, setIsDesc] = useState(false);

  return (
    <View style={styles.mainContainerFilters}>
      <View style={styles.mBot}>
        <Text style={[styles.fontFilters, styles.titleFilter]}>état</Text>
        <View style={styles.pad}>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.perfect}
              onValueChange={(value) => {
                {
                  handleFilter("perfect", value);
                }
              }}
              color={
                filter.perfect ? colors.scrapFirstColor : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Comme Neuf</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.good}
              onValueChange={(value) => {
                {
                  handleFilter("good", value);
                }
              }}
              color={filter.good ? colors.scrapFirstColor : colors.lightBlack}
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Très bon état</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.acceptable}
              onValueChange={(value) => {
                {
                  handleFilter("acceptable", value);
                }
              }}
              color={
                filter.acceptable ? colors.scrapFirstColor : colors.lightBlack
              }
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Correct</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.damaged}
              onValueChange={(value) => {
                {
                  handleFilter("damaged", value);
                }
              }}
              color={
                filter.damaged ? colors.scrapFirstColor : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Abîmé</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.ruined}
              onValueChange={(value) => {
                {
                  handleFilter("ruined", value);
                }
              }}
              color={filter.ruined ? colors.scrapFirstColor : colors.lightBlack}
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Très abîmé</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mBot}>
        <Text style={[styles.fontFilters, styles.titleFilter]}>catégorie</Text>
        <View style={[styles.wrap, styles.pad, styles.row, styles.spaceB]}>
          <View style={styles.inputBox}>
            <TouchableOpacity></TouchableOpacity>
            <Checkbox
              style={styles.checkbox3}
              value={filter.quincaillerie}
              onValueChange={(value) => {
                {
                  handleFilter("quincaillerie", value);
                }
              }}
              color={
                filter.quincaillerie
                  ? colors.scrapFirstColor
                  : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>quincaillerie</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.outils}
              onValueChange={(value) => {
                {
                  handleFilter("outils", value);
                }
              }}
              color={filter.outils ? colors.scrapFirstColor : colors.lightBlack}
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>outils</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.peinture}
              onValueChange={(value) => {
                {
                  handleFilter("peinture", value);
                }
              }}
              color={
                filter.peinture ? colors.scrapFirstColor : colors.lightBlack
              }
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>peinture</Text>
            </View>
          </View>

          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.electricite}
              onValueChange={(value) => {
                {
                  handleFilter("electricite", value);
                }
              }}
              color={
                filter.electricite ? colors.scrapFirstColor : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>electricité</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.plomberie}
              onValueChange={(value) => {
                {
                  handleFilter("plomberie", value);
                }
              }}
              color={
                filter.plomberie ? colors.scrapFirstColor : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>plomberie</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.toiture}
              onValueChange={(value) => {
                {
                  handleFilter("toiture", value);
                }
              }}
              color={
                filter.toiture ? colors.scrapFirstColor : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>toiture</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.menuiserie}
              onValueChange={(value) => {
                {
                  handleFilter("menuiserie", value);
                }
              }}
              color={
                filter.menuiserie ? colors.scrapFirstColor : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>menuiserie</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.grosOeuvre}
              onValueChange={(value) => {
                {
                  handleFilter("grosOeuvre", value);
                }
              }}
              color={
                filter.grosOeuvre ? colors.scrapFirstColor : colors.lightBlack
              }
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>gros-oeuvre</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.jardin}
              onValueChange={(value) => {
                {
                  handleFilter("jardin", value);
                }
              }}
              color={filter.jardin ? colors.scrapFirstColor : colors.lightBlack}
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>jardin</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.wrap,
            styles.pad,
            styles.row,
            styles.mBot,
            styles.spaceA,
          ]}
        >
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.sol}
              onValueChange={(value) => {
                {
                  handleFilter("sol", value);
                }
              }}
              color={filter.sol ? colors.scrapFirstColor : colors.lightBlack}
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>sol</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.divers}
              onValueChange={(value) => {
                {
                  handleFilter("divers", value);
                }
              }}
              color={filter.divers ? colors.scrapFirstColor : colors.lightBlack}
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>divers</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View>
        <View>
          <Text style={[styles.fontFilters, styles.titleFilter]}>prix</Text>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.freeScrap}
              onValueChange={(value) => {
                handleFilter("freeScrap", value);
              }}
              color={filter.freeScrap ? colors.scrapFirstColor : "#fff"}
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>gratuit</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.titleBox, styles.sectionSort]}>
            <Text
              style={[
                styles.fontFilters,
                styles.titleFilter,
                styles.fontSecondTitle,
              ]}
            >
              Tri
            </Text>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={ascending}
              onValueChange={handleAscendingChange}
              color={filter.isAsc ? colors.scrapFirstColor : "#fff"}
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>croissant</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={descending}
              onValueChange={handleDescendingChange}
              color={filter.isDesc ? colors.scrapFirstColor : "#fff"}
            />
            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>décroissant</Text>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainContainerFilters: {
    width: widthScreen * 0.95,
    borderColor: colors.scrapFirstColor,
    borderWidth: 1,
    height: "auto",
    padding: 10,
    // alignItems: "center",
    // justifyContent: "space-evenly",
    // flexDirection: "row",
  },
  row: { flexDirection: "row" },
  boxAlign: { justifyContent: "space-evenly" },
  wrap: { flexWrap: "wrap" },
  pad: { paddingLeft: 10, paddingRight: 10 },
  mBot: { marginBottom: 15 },
  spaceA: { justifyContent: "space-around" },
  spaceB: { justifyContent: "space-between" },
  titleFilter: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 5,
    letterSpacing: 1,
    marginBottom: 10,
  },
  fontSecondTitle: {
    borderColor: colors.lightBlack,
    borderBottomWidth: 1,
    marginTop: 5,
    fontSize: 13,
  },
  fontFilters: {
    color: colors.lightBlack,
    textTransform: "capitalize",
    fontSize: 16,
  },
  sectionSort: { marginTop: 15, borderTopColor: "#fff", borderTopWidth: 1 },
  //Condition
  inputBox: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox3: {
    marginRight: 5,
    borderColor: colors.lightBlack,
    width: 20,
    height: 20,
    borderWidth: 1,
  },
});
