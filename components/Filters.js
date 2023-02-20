import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, Platform } from "react-native";
//Packages
import Checkbox from "expo-checkbox";
import axios from "axios";
//Utils
import colors from "../utils/colors";
//

//
export default function Filters({ filter, handleFilter }) {
  //Condition
  // const [condition, setCondition] = useState([]);

  const [perfect, setPerfect] = useState(false);
  const [good, setGood] = useState(false);
  const [acceptable, setAcceptable] = useState(false);
  const [damaged, setDamaged] = useState(false);
  const [ruined, setRuined] = useState(false);
  //
  //
  return (
    <View style={styles.mainContainerFilters}>
      <Text style={[styles.fontFilters, styles.titlteFilter]}>état</Text>
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
          color={perfect ? "#568b44" : "#fff"}
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
          color={good ? "#568b44" : "#fff"}
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
          color={acceptable ? "#568b44" : "#fff"}
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
          color={damaged ? "#568b44" : "#fff"}
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
          color={ruined ? "#568b44" : "#fff"}
        />

        <View style={styles.titleBox}>
          <Text style={styles.fontFilters}>Très abîmé</Text>
        </View>
      </View>
      {/* {console.log("Filters : searchCondition ==== > ", searchCondition)} */}
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
  },
  titlteFilter: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 5,
    letterSpacing: 1,
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
