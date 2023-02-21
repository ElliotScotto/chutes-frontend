import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, Platform } from "react-native";
//Packages
import Checkbox from "expo-checkbox";
import axios from "axios";
//Utils
import colors from "../utils/colors";
//

//
export default function Filters({
  filter,
  handleFilter,
  sortPrice,
  setSortPrice,
}) {
  //Condition
  const [perfect, setPerfect] = useState(false);
  const [good, setGood] = useState(false);
  const [acceptable, setAcceptable] = useState(false);
  const [damaged, setDamaged] = useState(false);
  const [ruined, setRuined] = useState(false);
  const [freePrice, setFreePrice] = useState(false);
  const [isAsc, setIsAsc] = useState(false);
  const [isDesc, setIsDesc] = useState(false);
  //Prix
  // const handleAscChange = () => {
  //   setSortDirection("price_asc");
  // };

  // const handleDescChange = () => {
  //   setSortDirection("price_desc");
  // };
  //
  return (
    <View style={styles.mainContainerFilters}>
      <View>
        <Text style={[styles.fontFilters, styles.titleFilter]}>état</Text>
        {/* Condition */}
        <View style={styles.inputBox}>
          <Checkbox
            style={styles.checkbox3}
            value={filter.perfect}
            onValueChange={(value) => {
              {
                handleFilter("perfect", value);
              }
            }}
            color={perfect ? colors.scrapFirstColor : "#fff"}
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
            color={good ? colors.scrapFirstColor : "#fff"}
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
            color={acceptable ? colors.scrapFirstColor : "#fff"}
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
            color={damaged ? colors.scrapFirstColor : "#fff"}
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
            color={ruined ? colors.scrapFirstColor : "#fff"}
          />

          <View style={styles.titleBox}>
            <Text style={styles.fontFilters}>Très abîmé</Text>
          </View>
        </View>
        {/* {console.log("Filters : searchCondition ==== > ", searchCondition)} */}
      </View>
      <View>
        <View>
          <Text style={[styles.fontFilters, styles.titleFilter]}>prix</Text>
          {/* Prix */}
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.freePrice}
              onValueChange={(value) => {
                handleFilter("freePrice", value);

                // isDesc && setSortDirection(null);
              }}
              color={freePrice ? colors.scrapFirstColor : "#fff"}
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Gratuit</Text>
            </View>
          </View>
          <View style={styles.titleBox}>
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
              value={filter.isAsc}
              onValueChange={(value) => {
                handleFilter("isAsc", value);
                setIsDesc(false);
                setSortPrice(!sortPrice);
                // : setSortDirection("");
              }}
              color={isAsc ? colors.scrapFirstColor : "#fff"}
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Croissant</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Checkbox
              style={styles.checkbox3}
              value={filter.isDesc}
              onValueChange={(value) => {
                handleFilter("isDesc", value);
                setIsAsc(false);
                setSortPrice(!sortPrice);
                // : setSortDirection("");
              }}
              color={isDesc ? colors.scrapFirstColor : "#fff"}
            />

            <View style={styles.titleBox}>
              <Text style={styles.fontFilters}>Décroissant</Text>
            </View>
          </View>

          {/* {console.log("Filters : searchCondition ==== > ", searchCondition)} */}
        </View>
      </View>
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  mainContainerFilters: {
    width: widthScreen * 0.95,
    backgroundColor: colors.scrapFirstColor,
    height: "auto",
    padding: 5,
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
  },
  titleFilter: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 5,
    letterSpacing: 1,
  },
  fontSecondTitle: {
    marginTop: 5,
    borderColor: "#fff",
    borderBottomWidth: 1,
  },
  fontFilters: {
    color: "#fff",
  },
  //Condition
  inputBox: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox3: {
    marginRight: 5,
    borderColor: "#fff",
    width: 15,
    height: 15,
    borderWidth: 1.5,
  },
});
