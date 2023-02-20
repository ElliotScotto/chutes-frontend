import { useState } from "react";
import { StyleSheet, View, Text, Dimensions, LogBox } from "react-native";
//Packages
import Checkbox from "expo-checkbox";
//Utils
import colors from "../utils/colors";
//
export default function Filters({ searchCondition, setSearchCondition }) {
  //Condition
  // const [condition, setCondition] = useState([]);
  let arrayCondition = [];
  const [perfect, setPerfect] = useState(false);
  const [good, setGood] = useState(false);
  const [acceptable, setAcceptable] = useState(false);
  const [damaged, setDamaged] = useState(false);
  const [ruined, setRuined] = useState(false);
  //
  //Condition
  const handleAddCondition2 = (props) => {
    if (searchCondition.indexOf(props) === -1) {
      searchCondition.push(props);
      arrayCondition.push(props);
    }

    console.log("handleAddCondition2: searchCondition ====> ", searchCondition);
    console.log("handleAddCondition2: arrayCondition ====> ", arrayCondition);
  };
  //
  const handleDeleteCondition2 = (props) => {
    // arrayCondition = arrayCondition.splice(props, 1);
    arrayCondition = searchCondition.splice(searchCondition.indexOf(props), 1);
    console.log(
      "handleDeleteCondition2: searchCondition ====> ",
      searchCondition
    );
    console.log("handleDeleteCondition2: arrayCondition", arrayCondition);
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
                ? handleAddCondition2("Comme neuf")
                : searchCondition.indexOf("Comme neuf") !== -1 &&
                  handleDeleteCondition2("Comme neuf")}
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
                ? handleAddCondition2("Très bon état")
                : searchCondition.indexOf("Très bon état") !== -1 &&
                  handleDeleteCondition2("Très bon état")}
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
                ? handleAddCondition2("Correct")
                : searchCondition.indexOf("Correct") !== -1 &&
                  handleDeleteCondition2("Correct")}
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
                ? handleAddCondition2("Abîmé")
                : searchCondition.indexOf("Abîmé") !== -1 &&
                  handleDeleteCondition2("Abîmé")}
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
                ? handleAddCondition2("Très abîmé")
                : searchCondition.indexOf("Très abîmé") !== -1 &&
                  handleDeleteCondition2("Très abîmé")}
            </>;
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
  fontFilters: { color: "#fff" },
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
