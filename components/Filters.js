import { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
//Packages
import Checkbox from "expo-checkbox";
//Utils
import colors from "../utils/colors";
//
export default function Filters({ sort, setSort }) {
  //Condition
  const [condition, setShape] = useState([]);
  let arrayCondition = [];
  const [perfect, setPerfect] = useState(false);
  const [good, setGood] = useState(false);
  const [acceptable, setAcceptable] = useState(false);
  const [damaged, setDamaged] = useState(false);
  const [ruined, setRuined] = useState(false);
  //
  //Condition
  const handleAddCondition = (props) => {
    if (condition.indexOf(props) === -1) {
      condition.push(props);
      arrayCondition.push(props);
    }
    console.log("handleAddCondition: condition ====> ", condition);
  };
  //
  const handleDeleteCondition = (props) => {
    arrayCondition = condition.splice(condition.indexOf(props), 1);
    console.log("handleDeleteCondition: condition ====> ", condition);
  };
  //
  return (
    <View style={styles.mainContainerFilters}>
      {/* <Text style={styles.fontFilters}>Filtres</Text> */}
      {/* Condition */}
      <View style={styles.inputBox}>
        <Checkbox
          style={styles.checkbox3}
          value={perfect}
          onValueChange={() => {
            <>
              {setPerfect(!perfect)}
              {!perfect
                ? handleAddCondition("Comme neuf")
                : condition.indexOf("Comme neuf") !== -1 &&
                  handleDeleteCondition("Comme neuf")}
            </>;
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
          value={good}
          onValueChange={() => {
            <>
              {setGood(!good)}
              {!good
                ? handleAddCondition("Très bon état")
                : condition.indexOf("Très bon état") !== -1 &&
                  handleDeleteCondition("Très bon état")}
            </>;
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
          value={acceptable}
          onValueChange={() => {
            <>
              {setAcceptable(!acceptable)}
              {!acceptable
                ? handleAddCondition("Correct")
                : condition.indexOf("Correct") !== -1 &&
                  handleDeleteCondition("Correct")}
            </>;
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
          value={damaged}
          onValueChange={() => {
            <>
              {setDamaged(!damaged)}
              {!damaged
                ? handleAddCondition("Abîmé")
                : condition.indexOf("Abîmé") !== -1 &&
                  handleDeleteCondition("Abîmé")}
            </>;
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
          value={ruined}
          onValueChange={() => {
            <>
              {setRuined(!ruined)}
              {!ruined
                ? handleAddCondition("Très abîmé")
                : condition.indexOf("Très abîmé") !== -1 &&
                  handleDeleteCondition("Très abîmé")}
            </>;
          }}
          color={ruined ? "#568b44" : "#fff"}
        />

        <View style={styles.titleBox}>
          <Text style={styles.fontFilters}>Très abîmé</Text>
        </View>
      </View>
      {console.log("Filters : condition ==== > ", condition)}
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
  fontFilters: { color: "#fff" },
  //Condition
  inputBox: {
    marginBottom: 5,
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
