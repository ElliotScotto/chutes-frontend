//React
import React from "react";
import { useState, useEffect } from "react";
//utils
import colors from "../utils/colors";
//Packages
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Checkbox from "expo-checkbox";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
//React Native
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
  Button,
  ActivityIndicator,
} from "react-native";
//Icons
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
//Components
import CreationSection from "../components/CreationSection";
//Containers
import UploadScreen from "../containers/UploadScreen";
//Modals
import ModalName from "../modals/CreateName";
import ModalMaterial from "../modals/CreateMaterial";
import ModalDescription from "../modals/CreateDescription";
import ModalCategories from "../modals/CreateCategories";
import ModalQuantity from "../modals/CreateQuantity";
import ModalPrice from "../modals/CreatePrice";
import ModalPickup from "../modals/CreatePickup";
import ModalDetails from "../modals/CreateDetails";
import ModalDimensions from "../modals/CreateDimensions";
import ModalPicture from "../modals/CreatePictures";
//
//
export default function CreateScreen({ navigation }) {
  //Connexion
  const [backendEndpoint, setBackendEndpoint] = useState("");
  //product
  const [name, setName] = useState("");
  //Condition
  const [condition, setCondition] = useState("");
  const [perfect, setPerfect] = useState(false);
  const [good, setGood] = useState(false);
  const [acceptable, setAcceptable] = useState(false);
  const [damaged, setDamaged] = useState(false);
  const [ruined, setRuined] = useState(false);
  //
  const [description, setDescription] = useState("");
  //Offer
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(0);
  const [isFree, setIsFree] = useState(true);
  const [isForSell, setIsForSell] = useState(false);
  //Category
  const [category, setCategory] = useState([]);
  let arrayCategory = [];
  const [hardware, setHardware] = useState(false);
  const [paint, setPaint] = useState(false);
  const [floor, setFloor] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [bigWork, setBigWork] = useState(false);
  const [tools, setTools] = useState(false);
  const [plumbing, setPlumbing] = useState(false);
  const [roofing, setRoofing] = useState(false);
  const [garden, setGarden] = useState(false);
  const [carpentry, setCarpentry] = useState(false);
  const [otherCategories, setOtherCategories] = useState(false);
  //Material
  const [material, setMaterial] = useState([]);
  let arrayMaterial = [];
  const [metal, setMetal] = useState(false);
  const [plastic, setPlastic] = useState(false);
  const [wood, setWood] = useState(false);
  const [glass, setGlass] = useState(false);
  const [liquid, setLiquid] = useState(false);
  const [powders, setPowders] = useState(false);
  const [stones, setStones] = useState(false);
  const [otherMaterials, setOtherMaterials] = useState(false);
  //Weight
  const [weight, setWeight] = useState("");
  const [lessOne, setLessOne] = useState(false);
  const [oneAndFive, setOneAndFive] = useState(false);
  const [fiveAndTen, setFiveAndTen] = useState(false);
  const [tenAndTwenty, setTenAndTwenty] = useState(false);
  const [twentyAndMore, setTwentyAndMore] = useState(false);
  //DIMENSIONS
  const [dimensionsShown, setDimensionsShown] = useState(false);
  //length
  const [length, setLength] = useState(0);
  const [mmLength, setMmLength] = useState(false);
  const [cmLength, setCmLength] = useState(true);
  const [mLength, setMLength] = useState(false);
  //width
  const [width, setWidth] = useState(0);
  const [mmWidth, setMmWidth] = useState(false);
  const [cmWidth, setCmWidth] = useState(true);
  const [mWidth, setMWidth] = useState(false);
  //diameter
  const [diameter, setDiameter] = useState(0);
  const [mmDiameter, setMmDiameter] = useState(false);
  const [cmDiameter, setCmDiameter] = useState(true);
  const [mDiameter, setMDiameter] = useState(false);
  //thickness
  const [thickness, setThickness] = useState(0);
  const [mmThickness, setMmThickness] = useState(true);
  const [cmThickness, setCmThickness] = useState(false);
  const [mThickness, setMThickness] = useState(false);
  //depth
  const [depth, setDepth] = useState(0);
  const [mmDepth, setMmDepth] = useState(false);
  const [cmDepth, setCmDepth] = useState(true);
  const [mDepth, setMDepth] = useState(false);
  //Shapes
  const [shape, setShape] = useState([]);
  let arrayShape = [];
  const [round, setRound] = useState(false);
  const [square, setSquare] = useState(false);
  const [rectangle, setRectangle] = useState(false);
  const [triangle, setTriangle] = useState(false);
  const [flat, setFlat] = useState(false);
  const [ovoïd, setOvoïd] = useState(false);
  const [pentagon, setPentagon] = useState(false);
  const [hexagon, setHexagon] = useState(false);
  const [octagon, setOctagon] = useState(false);
  //Pictures
  const [image, setImage] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [isLoadingPicture, setIsLoadingPicture] = useState(false);
  //Delivery
  const [homePickup, setHomePickup] = useState(true);
  const [sending, setSending] = useState(false);
  const [userCity, setUserCity] = useState("");
  //Other Details
  const [detailsShown, setDetailsShown] = useState(false);
  const [necessaryTool, setNecessaryTool] = useState("");
  const [normAndLabel, setNormAndLabel] = useState("");
  const [brand, setBrand] = useState("");
  //form
  const [errorMessage, setErrorMessage] = useState(null);
  // const [errorMessage2, setErrorMessage2] = useState(null);
  // const [secureTextEntry, setSecureTextEntry] = useState(true);
  //
  //
  const handlePress = async (event) => {
    event.preventDefault();
    if (
      name &&
      material &&
      condition &&
      description &&
      category &&
      quantity &&
      weight
    ) {
      try {
        //IOS
        Platform.OS === "ios" && setBackendEndpoint("localhost");
        //MY ANDROID SIMULATOR
        Platform.__constants.Model === "sdk_gphone64_arm64" &&
          setBackendEndpoint("10.0.2.2");
        //MY PHYSICAL DEVICE HUAWEI
        Platform.__constants.Model === "LYA-L29" &&
          setBackendEndpoint("192.168.1.38");
        const response = await axios.post(
          `http://${backendEndpoint}:3000/scrap/create`,
          {
            //PRODUCT
            name,
            material,
            condition,
            description,
            category,
            weight,
            //DIMENSIONS
            //length
            length,
            mmLength,
            cmLength,
            mLength,
            //width
            width,
            mmWidth,
            cmWidth,
            mWidth,
            //thickness
            thickness,
            mmThickness,
            cmThickness,
            mThickness,
            //diameter
            diameter,
            mmDiameter,
            cmDiameter,
            mDiameter,
            //depth
            depth,
            mmDepth,
            cmDepth,
            mDepth,
            //shape
            shape,
            //OFFER
            quantity,
            price,
            isFree,
            isForSell,
            //details
            necessaryTool,
            brand,
            normAndLabel,
            //DELIVERY
            homePickup,
            sending,
            userCity,
            // pictures: selectedPicture,
          }
        );
        console.log("CREATESCREEN: response.data ===== >", response.data);
      } catch (error) {
        console.log("CREATESCREEN: error.response=====> ", error.response);
      }
    } else {
      setErrorMessage("Veuillez remplir tous les critères.");
    }
    console.log("HandleSubmit: errorMessage ===> ", errorMessage);
  };
  //
  //Material
  const handleAddMaterial = (props) => {
    if (material.indexOf(props) === -1) {
      material.push(props);
      arrayMaterial.push(props);
    }
    console.log("handleAddMaterial: material ====> ", material);
  };
  //
  const handleDeleteMaterial = (props) => {
    arrayMaterial = material.splice(material.indexOf(props), 1);

    console.log("handleDeleteMaterial: material ====> ", material);
  };
  //
  //Category
  const handleAddCategory = (props) => {
    if (category.indexOf(props) === -1) {
      category.push(props);
      arrayCategory.push(props);
    }
    console.log("handleAddCategory: category ====> ", category);
  };
  //
  const handleDeleteCategory = (props) => {
    arrayCategory = category.splice(category.indexOf(props), 1);

    console.log("handleDeleteCategory: category ====> ", category);
  };
  //
  //Shape
  const handleAddShape = (props) => {
    if (shape.indexOf(props) === -1) {
      shape.push(props);
      arrayShape.push(props);
    }
    console.log("handleAddShape: shape ====> ", shape);
  };
  //
  const handleDeleteShape = (props) => {
    arrayShape = shape.splice(shape.indexOf(props), 1);
    console.log("handleDeleteShape: shape ====> ", shape);
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#fff" }}>
      <StatusBar hidden={false} style="light" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <CreationSection props={"produit"} />
          <View style={styles.input}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <View>
                <Text style={styles.fontTitleInput}>nom</Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                <ModalName />
              </View>
            </View>
            <TextInput
              style={styles.customInput}
              inputMode={"text"}
              maxLength={40}
              selectionColor="golgenrod"
              placeholder="Stratifié, Tube PVC L.1M, Lot de 100 clous..."
              placeholderTextColor="lightgray"
              value={name}
              onChangeText={(name) => {
                name.length <= 40 && setName(name);
              }}
            />
          </View>

          <View style={styles.input}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <View>
                <Text style={styles.fontTitleInput}>matière principale</Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                <ModalMaterial />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={metal}
                  onValueChange={() => {
                    <>
                      {setMetal(!metal)}
                      {!metal
                        ? handleAddMaterial("Métal")
                        : material.indexOf("Métal") !== -1 &&
                          handleDeleteMaterial("Métal")}
                    </>;
                  }}
                  color={metal ? colors.scrapFirstColor : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Métal</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={plastic}
                  onValueChange={() => {
                    <>
                      {setPlastic(!plastic)}
                      {!plastic
                        ? handleAddMaterial("Plastique")
                        : material.indexOf("Plastique") !== -1 &&
                          handleDeleteMaterial("Plastique")}
                    </>;
                  }}
                  color={plastic ? "#568b44" : undefined}
                />

                <View>
                  <Text style={styles.darkgrey}>Plastique</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={wood}
                  onValueChange={() => {
                    <>
                      {setWood(!wood)}
                      {!wood
                        ? handleAddMaterial("Bois")
                        : material.indexOf("Bois") !== -1 &&
                          handleDeleteMaterial("Bois")}
                    </>;
                  }}
                  color={wood ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Bois</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={glass}
                  onValueChange={() => {
                    <>
                      {setGlass(!glass)}
                      {!glass
                        ? handleAddMaterial("Verre")
                        : material.indexOf("Verre") !== -1 &&
                          handleDeleteMaterial("Verre")}
                    </>;
                  }}
                  color={glass ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Verre</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox}
                  value={liquid}
                  onValueChange={() => {
                    <>
                      {setLiquid(!liquid)}
                      {!liquid
                        ? handleAddMaterial("Liquide")
                        : material.indexOf("Liquide") !== -1 &&
                          handleDeleteMaterial("Liquide")}
                    </>;
                  }}
                  color={liquid ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>
                    Liquide (ex: Peinture, Enduits...)
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.inputBox}>
              <Checkbox
                style={styles.checkbox}
                value={powders}
                onValueChange={() => {
                  <>
                    {setPowders(!powders)}
                    {!powders
                      ? handleAddMaterial("Poudres")
                      : material.indexOf("Poudres") !== -1 &&
                        handleDeleteMaterial("Poudres")}
                  </>;
                }}
                color={powders ? "#568b44" : undefined}
              />
              <View>
                <Text style={styles.darkgrey}>
                  Poudres (ex: Ciments, Plâtre, Colles...)
                </Text>
              </View>
            </View>
            <View style={styles.inputBox}>
              <Checkbox
                style={styles.checkbox}
                value={stones}
                onValueChange={() => {
                  <>
                    {setStones(!stones)}
                    {!stones
                      ? handleAddMaterial("Pierres")
                      : material.indexOf("Pierres") !== -1 &&
                        handleDeleteMaterial("Pierres")}
                  </>;
                }}
                color={stones ? "#568b44" : undefined}
              />
              <View>
                <Text style={styles.darkgrey}>
                  Pierres (ex: Graviers, Galets...)
                </Text>
              </View>
            </View>
            <View style={styles.inputBox}>
              <Checkbox
                style={styles.checkbox}
                value={otherMaterials}
                onValueChange={() => {
                  <>
                    {setOtherMaterials(!otherMaterials)}
                    {!otherMaterials
                      ? handleAddMaterial("Divers")
                      : material.indexOf("Divers") !== -1 &&
                        handleDeleteMaterial("Divers")}
                  </>;
                }}
                color={otherMaterials ? "#568b44" : undefined}
              />
              <View>
                <Text style={styles.darkgrey}>
                  Autres (ex: Carrelage, Stratifié, Moquette...)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <Text style={styles.fontTitleInput}>état</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                marginTop: 10,
              }}
            >
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={perfect}
                  onValueChange={() => {
                    setPerfect(!perfect);
                    setGood(false);
                    setAcceptable(false);
                    setDamaged(false);
                    setRuined(false);
                    setCondition(!perfect ? "Comme neuf" : null);
                  }}
                  color={perfect ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Comme Neuf</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={good}
                  onValueChange={() => {
                    setPerfect(false);
                    setGood(!good);
                    setAcceptable(false);
                    setDamaged(false);
                    setRuined(false);
                    setCondition(!good ? "Très bon état" : null);
                  }}
                  color={good ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Très bon état</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={acceptable}
                  onValueChange={() => {
                    setPerfect(false);
                    setGood(false);
                    setAcceptable(!acceptable);
                    setDamaged(false);
                    setRuined(false);
                    setCondition(!acceptable ? "Correct" : null);
                  }}
                  color={acceptable ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Correct</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                marginTop: 10,
              }}
            >
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={damaged}
                  onValueChange={() => {
                    setPerfect(false);
                    setGood(false);
                    setAcceptable(false);
                    setDamaged(!damaged);
                    setRuined(false);
                    setCondition(!damaged ? "Abîmé" : null);
                  }}
                  color={damaged ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Abîmé</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={ruined}
                  onValueChange={() => {
                    setPerfect(false);
                    setGood(false);
                    setAcceptable(false);
                    setDamaged(false);
                    setRuined(!ruined);
                    setCondition(!ruined ? "Très abîmé" : null);
                  }}
                  color={ruined ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Très abîmé</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <View>
                  <Text style={styles.fontTitleInput}>description</Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 5,
                  }}
                >
                  <ModalDescription />
                </View>
              </View>
            </View>
            <TextInput
              style={[styles.customInput, styles.descriptionArea]}
              inputMode="text"
              selectionColor="#568b44"
              placeholder="Planche (Sapin) redécoupée et poncée faisant 30cm de longueur, 20cm de largeur et 3cm d'épaisseur. Non tâché, sans noeuds et sans fissures"
              placeholderTextColor="lightgray"
              multiline={true}
              numberOfLines={4}
              rows={4}
              maxLength={180}
              textAlignVertical="auto"
              onChangeText={(description) => {
                setDescription(description);
              }}
              value={description}
            />
          </View>
          <View style={styles.input4}>
            <Pressable
              style={styles.revealedBtn}
              onPress={() => {
                setDimensionsShown(!dimensionsShown);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <View style={{ position: "relative" }}>
                  <Text style={styles.fontTitleInput2}>
                    + dimensions & forme
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 5,
                  }}
                >
                  <ModalDimensions />
                </View>
                <SimpleLineIcons
                  name="arrow-down"
                  size={20}
                  color="#fff"
                  style={{ position: "absolute", right: 5 }}
                />
              </View>
            </Pressable>
          </View>
          {dimensionsShown && (
            <View style={[styles.detailsRevealed, { alignItems: "center" }]}>
              <View
                style={[
                  styles.input,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={{ width: "45%" }}>
                  <Text style={styles.fontTitleInput2}>longueur</Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "60%" }}>
                      <TextInput
                        style={styles.customInput2}
                        inputMode="numeric"
                        keyboardType="numeric"
                        selectionColor="#fff"
                        placeholderTextColor="#fff"
                        onChangeText={(length) => {
                          setLength(length);
                        }}
                        value={length}
                      />
                    </View>
                    <View style={{ flexDirection: "column", width: "24%" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mmLength}
                          onValueChange={() => {
                            setMmLength(true);
                            setCmLength(false);
                            setMLength(false);
                          }}
                          color={mmLength ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>mm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={cmLength}
                          onValueChange={() => {
                            setMmLength(false);
                            setCmLength(true);
                            setMLength(false);
                          }}
                          color={cmLength ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>cm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mLength}
                          onValueChange={() => {
                            setMLength(true);
                            setMmLength(false);
                            setCmLength(false);
                          }}
                          color={mLength ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>M</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ width: "45%" }}>
                  <Text style={styles.fontTitleInput2}>largeur</Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "60%" }}>
                      <TextInput
                        style={styles.customInput2}
                        inputMode="numeric"
                        keyboardType="numeric"
                        selectionColor="#fff"
                        placeholderTextColor="#fff"
                        onChangeText={(width) => {
                          setWidth(width);
                        }}
                        value={width}
                      />
                    </View>
                    <View style={{ flexDirection: "column", width: "24%" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mmWidth}
                          onValueChange={() => {
                            setMmWidth(true);
                            setCmWidth(false);
                            setMWidth(false);
                          }}
                          color={mmWidth ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>mm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={cmWidth}
                          onValueChange={() => {
                            setMmWidth(false);
                            setCmWidth(true);
                            setMWidth(false);
                          }}
                          color={cmWidth ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>cm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mWidth}
                          onValueChange={() => {
                            setMWidth(true);
                            setMmWidth(false);
                            setCmWidth(false);
                          }}
                          color={mWidth ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>M</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.input,
                  { flexDirection: "row", justifyContent: "space-between" },
                ]}
              >
                <View style={{ width: "33%" }}>
                  <Text style={styles.fontTitleInput2}>épaisseur</Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "40%" }}>
                      <TextInput
                        style={styles.customInput2}
                        inputMode="numeric"
                        keyboardType="numeric"
                        selectionColor="#fff"
                        placeholderTextColor="#fff"
                        onChangeText={(thickness) => {
                          setThickness(thickness);
                        }}
                        value={thickness}
                      />
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mmThickness}
                          onValueChange={() => {
                            setMmThickness(true);
                            setCmThickness(false);
                            setMThickness(false);
                          }}
                          color={mmThickness ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>mm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={cmThickness}
                          onValueChange={() => {
                            setMmThickness(false);
                            setCmThickness(true);
                            setMThickness(false);
                          }}
                          color={cmThickness ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>cm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mThickness}
                          onValueChange={() => {
                            setMThickness(true);
                            setMmThickness(false);
                            setCmThickness(false);
                          }}
                          color={mThickness ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>M</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ width: "33%" }}>
                  <Text style={styles.fontTitleInput2}>diamètre</Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "40%" }}>
                      <TextInput
                        style={styles.customInput2}
                        inputMode="numeric"
                        keyboardType="numeric"
                        selectionColor="#fff"
                        placeholderTextColor="#fff"
                        onChangeText={(diameter) => {
                          setDiameter(diameter);
                        }}
                        value={diameter}
                      />
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mmDiameter}
                          onValueChange={() => {
                            setMmDiameter(true);
                            setCmDiameter(false);
                            setMDiameter(false);
                          }}
                          color={mmDiameter ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>mm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={cmDiameter}
                          onValueChange={() => {
                            setMmDiameter(false);
                            setCmDiameter(true);
                            setMDiameter(false);
                          }}
                          color={cmDiameter ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>cm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mDiameter}
                          onValueChange={() => {
                            setMDiameter(true);
                            setMmDiameter(false);
                            setCmDiameter(false);
                          }}
                          color={mDiameter ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>M</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ width: "33%" }}>
                  <Text style={styles.fontTitleInput2}>profondeur</Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "40%" }}>
                      <TextInput
                        style={styles.customInput2}
                        inputMode="numeric"
                        keyboardType="numeric"
                        selectionColor="#fff"
                        placeholderTextColor="#fff"
                        onChangeText={(depth) => {
                          setDepth(depth);
                        }}
                        value={depth}
                      />
                    </View>
                    <View style={{ flexDirection: "column", width: "50%" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mmDepth}
                          onValueChange={() => {
                            setMmDepth(true);
                            setCmDepth(false);
                            setMDepth(false);
                          }}
                          color={mmDepth ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>mm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={cmDepth}
                          onValueChange={() => {
                            setMmDepth(false);
                            setCmDepth(true);
                            setMDepth(false);
                          }}
                          color={cmDepth ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>cm</Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={styles.checkbox5}
                          value={mDepth}
                          onValueChange={() => {
                            setMDepth(true);
                            setMmDepth(false);
                            setCmDepth(false);
                          }}
                          color={mDepth ? "#568b44" : "#fff"}
                        />
                        <Text style={styles.fontUnit}>M</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.input}>
                <Text style={styles.fontTitleInput2}>forme principale</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="circle-outline"
                        size={32}
                        color="#fff"
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={round}
                      onValueChange={() => {
                        <>
                          {setRound(!round)}
                          {!round
                            ? handleAddShape("Rond")
                            : shape.indexOf("Rond") !== -1 &&
                              handleDeleteShape("Rond")}
                        </>;
                      }}
                      color={round ? "#568b44" : "#fff"}
                    />
                  </View>

                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="square-outline"
                        size={32}
                        color="#fff"
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={square}
                      onValueChange={() => {
                        <>
                          {setSquare(!square)}
                          {!square
                            ? handleAddShape("Carré")
                            : shape.indexOf("Carré") !== -1 &&
                              handleDeleteShape("Carré")}
                        </>;
                      }}
                      color={square ? "#568b44" : "#fff"}
                    />
                  </View>
                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="rectangle-outline"
                        color="#fff"
                        size={36}
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={rectangle}
                      onValueChange={() => {
                        <>
                          {setRectangle(!rectangle)}
                          {!rectangle
                            ? handleAddShape("Rectangle")
                            : shape.indexOf("Rectangle") !== -1 &&
                              handleDeleteShape("Rectangle")}
                        </>;
                      }}
                      color={rectangle ? "#568b44" : "#fff"}
                    />
                  </View>
                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="triangle-outline"
                        size={32}
                        color="#fff"
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={triangle}
                      onValueChange={() => {
                        <>
                          {setTriangle(!triangle)}
                          {!triangle
                            ? handleAddShape("Triangle")
                            : shape.indexOf("Triangle") !== -1 &&
                              handleDeleteShape("Triangle")}
                        </>;
                      }}
                      color={triangle ? "#568b44" : "#fff"}
                    />
                  </View>
                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <Ionicons name="remove-outline" size={32} color="#fff" />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={flat}
                      onValueChange={() => {
                        <>
                          {setFlat(!flat)}
                          {!flat
                            ? handleAddShape("Plat")
                            : shape.indexOf("Plat") !== -1 &&
                              handleDeleteShape("Plat")}
                        </>;
                      }}
                      color={flat ? "#568b44" : "#fff"}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="egg-outline"
                        size={32}
                        color="#fff"
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={ovoïd}
                      onValueChange={() => {
                        <>
                          {setOvoïd(!ovoïd)}
                          {!ovoïd
                            ? handleAddShape("Ovoïde")
                            : shape.indexOf("Ovoïde") !== -1 &&
                              handleDeleteShape("Ovoïde")}
                        </>;
                      }}
                      color={ovoïd ? "#568b44" : "#fff"}
                    />
                  </View>

                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="pentagon-outline"
                        size={32}
                        color="#fff"
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={pentagon}
                      onValueChange={() => {
                        <>
                          {setPentagon(!pentagon)}
                          {!pentagon
                            ? handleAddShape("Pentagone")
                            : shape.indexOf("Pentagone") !== -1 &&
                              handleDeleteShape("Pentagone")}
                        </>;
                      }}
                      color={pentagon ? "#568b44" : "#fff"}
                    />
                  </View>
                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="hexagon-outline"
                        color="#fff"
                        size={36}
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={hexagon}
                      onValueChange={() => {
                        <>
                          {setHexagon(!hexagon)}
                          {!hexagon
                            ? handleAddShape("Hexagone")
                            : shape.indexOf("Hexagone") !== -1 &&
                              handleDeleteShape("Hexagone")}
                        </>;
                      }}
                      color={hexagon ? "#568b44" : "#fff"}
                    />
                  </View>
                  <View style={styles.inputBox2}>
                    <View style={styles.iconShape}>
                      <MaterialCommunityIcons
                        name="octagon-outline"
                        size={32}
                        color="#fff"
                      />
                    </View>
                    <Checkbox
                      style={styles.checkbox4}
                      value={octagon}
                      onValueChange={() => {
                        <>
                          {setOctagon(!octagon)}
                          {!octagon
                            ? handleAddShape("Octagone")
                            : shape.indexOf("Octagone") !== -1 &&
                              handleDeleteShape("Octagone")}
                        </>;
                      }}
                      color={octagon ? "#568b44" : "#fff"}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          <View style={[styles.input, { marginTop: 10 }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <View>
                <Text style={styles.fontTitleInput}>catégorie</Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                <ModalCategories />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <View style={[styles.inputBox, { width: "37%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={hardware}
                  onValueChange={() => {
                    <>
                      {setHardware(!hardware)}
                      {!hardware
                        ? handleAddCategory("Quincaillerie")
                        : category.indexOf("Quincaillerie") !== -1 &&
                          handleDeleteCategory("Quincaillerie")}
                    </>;
                  }}
                  color={hardware ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Quincaillerie</Text>
                </View>
              </View>
              <View style={[styles.inputBox, { width: "39%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={tools}
                  onValueChange={() => {
                    <>
                      {setTools(!tools)}
                      {!tools
                        ? handleAddCategory("Outils")
                        : category.indexOf("Outils") !== -1 &&
                          handleDeleteCategory("Outils")}
                    </>;
                  }}
                  color={tools ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Outils</Text>
                </View>
              </View>
              <View style={[styles.inputBox, { width: "29%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={paint}
                  onValueChange={() => {
                    <>
                      {setPaint(!paint)}
                      {!paint
                        ? handleAddCategory("Peinture")
                        : category.indexOf("Peinture") !== -1 &&
                          handleDeleteCategory("Peinture")}
                    </>;
                  }}
                  color={paint ? "#568b44" : undefined}
                />

                <View>
                  <Text style={styles.darkgrey}>Peinture</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={[styles.inputBox, { width: "37%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={electricity}
                  onValueChange={() => {
                    <>
                      {setElectricity(!electricity)}
                      {!electricity
                        ? handleAddCategory("Electricité")
                        : category.indexOf("Electricité") !== -1 &&
                          handleDeleteCategory("Electricité")}
                    </>;
                  }}
                  color={electricity ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Electricité</Text>
                </View>
              </View>
              <View style={[styles.inputBox, { width: "39%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={plumbing}
                  onValueChange={() => {
                    <>
                      {setPlumbing(!plumbing)}
                      {!plumbing
                        ? handleAddCategory("Plomberie")
                        : category.indexOf("Plomberie") !== -1 &&
                          handleDeleteCategory("Plomberie")}
                    </>;
                  }}
                  color={plumbing ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Plomberie</Text>
                </View>
              </View>
              <View style={[styles.inputBox, { width: "29%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={roofing}
                  onValueChange={() => {
                    <>
                      {setRoofing(!roofing)}
                      {!roofing
                        ? handleAddCategory("Toiture")
                        : category.indexOf("Toiture") !== -1 &&
                          handleDeleteCategory("Toiture")}
                    </>;
                  }}
                  color={roofing ? "#568b44" : undefined}
                />

                <View>
                  <Text style={styles.darkgrey}>Toiture</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={[styles.inputBox, { width: "37%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={carpentry}
                  onValueChange={() => {
                    <>
                      {setCarpentry(!carpentry)}
                      {!carpentry
                        ? handleAddCategory("Menuiserie")
                        : category.indexOf("Menuiserie") !== -1 &&
                          handleDeleteCategory("Menuiserie")}
                    </>;
                  }}
                  color={carpentry ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Menuiserie</Text>
                </View>
              </View>
              <View style={[styles.inputBox, { width: "39%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={bigWork}
                  onValueChange={() => {
                    <>
                      {setBigWork(!bigWork)}
                      {!bigWork
                        ? handleAddCategory("Gros-oeuvre")
                        : category.indexOf("Gros-oeuvre") !== -1 &&
                          handleDeleteCategory("Gros-oeuvre")}
                    </>;
                  }}
                  color={bigWork ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Gros-oeuvre</Text>
                </View>
              </View>
              <View style={[styles.inputBox, { width: "29%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={floor}
                  onValueChange={() => {
                    <>
                      {setFloor(!floor)}
                      {!floor
                        ? handleAddCategory("Sol")
                        : category.indexOf("Sol") !== -1 &&
                          handleDeleteCategory("Sol")}
                    </>;
                  }}
                  color={floor ? "#568b44" : undefined}
                />

                <View>
                  <Text style={styles.darkgrey}>Sol</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={[styles.inputBox, { width: "37%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={garden}
                  onValueChange={() => {
                    <>
                      {setGarden(!garden)}
                      {!garden
                        ? handleAddCategory("Jardin")
                        : category.indexOf("Jardin") !== -1 &&
                          handleDeleteCategory("Jardin")}
                    </>;
                  }}
                  color={garden ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Jardin</Text>
                </View>
              </View>
              <View style={[styles.inputBox, { width: "39%" }]}>
                <Checkbox
                  style={styles.checkbox3}
                  value={otherCategories}
                  onValueChange={() => {
                    <>
                      {setOtherCategories(!otherCategories)}
                      {!otherCategories
                        ? handleAddCategory("Divers")
                        : category.indexOf("Divers") !== -1 &&
                          handleDeleteCategory("Divers")}
                    </>;
                  }}
                  color={otherCategories ? "#568b44" : undefined}
                />

                <View>
                  <Text style={styles.darkgrey}>Divers</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.input}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.fontTitleInput}>poids total</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                marginTop: 10,
              }}
            >
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={lessOne}
                  onValueChange={() => {
                    setLessOne(!lessOne);
                    setOneAndFive(false);
                    setFiveAndTen(false);
                    setTenAndTwenty(false);
                    setTwentyAndMore(false);
                    setWeight(!lessOne ? "Moins de 1 kg" : null);
                  }}
                  color={lessOne ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Moins d'1kg</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={oneAndFive}
                  onValueChange={() => {
                    setLessOne(false);
                    setOneAndFive(!oneAndFive);
                    setFiveAndTen(false);
                    setTenAndTwenty(false);
                    setTwentyAndMore(false);
                    setWeight(!oneAndFive ? "1Kg à 5Kg" : null);
                  }}
                  color={oneAndFive ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>1kg à 5kg</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={fiveAndTen}
                  onValueChange={() => {
                    setLessOne(false);
                    setOneAndFive(false);
                    setFiveAndTen(!fiveAndTen);
                    setTenAndTwenty(false);
                    setTwentyAndMore(false);
                    setWeight(!fiveAndTen ? "5kg à 10kg" : null);
                  }}
                  color={fiveAndTen ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>5kg à 10kg</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                marginTop: 10,
              }}
            >
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={tenAndTwenty}
                  onValueChange={() => {
                    setLessOne(false);
                    setOneAndFive(false);
                    setFiveAndTen(false);
                    setTenAndTwenty(!tenAndTwenty);
                    setTwentyAndMore(false);
                    setWeight(!tenAndTwenty ? "10kg à 20kg" : null);
                  }}
                  color={tenAndTwenty ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>10kg à 20kg</Text>
                </View>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox3}
                  value={twentyAndMore}
                  onValueChange={() => {
                    setLessOne(false);
                    setOneAndFive(false);
                    setFiveAndTen(false);
                    setTenAndTwenty(false);
                    setTwentyAndMore(!twentyAndMore);
                    setWeight(!twentyAndMore ? "Plus de 20kg" : null);
                  }}
                  color={twentyAndMore ? "#568b44" : undefined}
                />
                <View>
                  <Text style={styles.darkgrey}>Plus de 20kg</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.input}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("Photos");
                }}
              >
                <Text style={styles.fontTitleInput}>photos</Text>
              </Pressable>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                <ModalPicture />
              </View>
            </View>
          </View>
          <View style={styles.input4}>
            <Pressable
              style={styles.revealedBtn}
              onPress={() => {
                setDetailsShown(!detailsShown);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 30,
                }}
              >
                <View>
                  <Text style={styles.fontTitleInput2}>+ détails</Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 5,
                  }}
                >
                  <ModalDetails />
                </View>
                <SimpleLineIcons
                  name="arrow-down"
                  size={20}
                  color="#fff"
                  style={{ position: "absolute", right: 5 }}
                />
              </View>
            </Pressable>
          </View>
          {detailsShown && (
            <View
              style={[
                styles.detailsRevealed,
                { paddingLeft: 20, paddingRight: 20 },
              ]}
            >
              <View>
                <Text style={styles.fontTitleInput2}>outil nécessaire</Text>
                <TextInput
                  style={styles.customInput2}
                  inputMode="text"
                  selectionColor="#fff"
                  placeholder="ex: Marteau, Visseuse... "
                  placeholderTextColor="#fff"
                  autoCapitalize="none"
                  onChangeText={(necessaryTool) => {
                    setNecessaryTool(necessaryTool);
                  }}
                  value={necessaryTool}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "40%" }}>
                  <Text style={styles.fontTitleInput2}>marque</Text>
                  <TextInput
                    style={styles.customInput2}
                    inputMode="text"
                    selectionColor="#fff"
                    autoCapitalize="none"
                    onChangeText={(brand) => {
                      setBrand(brand);
                    }}
                    value={brand}
                  />
                </View>
                <View style={{ width: "40%" }}>
                  <Text style={styles.fontTitleInput2}>norme & Label</Text>
                  <TextInput
                    style={styles.customInput2}
                    inputMode="text"
                    selectionColor="#fff"
                    placeholder="NF, ACERMI, A+..."
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                    onChangeText={(normAndLabel) => {
                      setNormAndLabel(normAndLabel);
                    }}
                    value={normAndLabel}
                  />
                </View>
              </View>
            </View>
          )}
          <CreationSection props={"offre"} />
          <View
            style={[
              styles.input,
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "90%",
                position: "relative",
              },
            ]}
          >
            <View style={styles.inputBox}>
              <Checkbox
                style={styles.checkbox}
                value={isFree}
                onValueChange={() => {
                  setIsFree(true);
                  setPrice(0);
                  setIsForSell(false);
                }}
                color={isFree ? "#568b44" : undefined}
              />
              <Text style={styles.darkgrey}>Donner</Text>
            </View>
            <View style={styles.inputBox}>
              <Checkbox
                style={styles.checkbox}
                value={isForSell}
                onValueChange={() => {
                  setIsFree(false);
                  setIsForSell(true);
                }}
                color={isForSell ? "#568b44" : undefined}
              />
              <Text style={styles.darkgrey}>Vendre</Text>
            </View>

            {isFree === true && (
              <View
                style={[
                  styles.line,
                  {
                    position: "absolute",
                    top: "70%",
                    height: 20,
                    width: 10,
                    borderLeftColor: "#568b44",
                    borderLeftWidth: 1,
                  },
                  Platform.OS === "ios"
                    ? { left: "22.25%" }
                    : { left: "21.75%" },
                ]}
              ></View>
            )}
            {isForSell === true && (
              <View
                style={[
                  styles.line,
                  {
                    position: "absolute",
                    top: "70%",
                    height: 20,
                    width: 10,
                    borderLeftColor: "#568b44",
                    borderLeftWidth: 1,
                  },
                  Platform.OS === "ios" ? { left: "62.25%" } : { left: "62%" },
                ]}
              ></View>
            )}
          </View>

          {isFree && (
            <View
              style={[
                styles.input,
                {
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "90%",
                  borderColor: "#568b44",
                  borderWidth: 1,
                },
              ]}
            >
              <View style={{ width: "35%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: 30,
                    marginTop: 5,
                  }}
                >
                  <View>
                    <Text style={styles.fontTitleInput}>quantité</Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginLeft: 5,
                    }}
                  >
                    <ModalQuantity />
                  </View>
                </View>
                <TextInput
                  style={styles.customInput}
                  inputMode="numeric"
                  keyboardType="numeric"
                  selectionColor="#568b44"
                  onChangeText={(quantity) => {
                    setQuantity(quantity);
                    setPrice(0);
                  }}
                  value={quantity}
                />
              </View>
            </View>
          )}

          {isForSell && (
            <View
              style={[
                styles.input,
                {
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "90%",
                  borderColor: "#568b44",
                  borderWidth: 1,
                },
              ]}
            >
              <View style={{ width: "35%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: 30,
                    marginTop: 5,
                  }}
                >
                  <View>
                    <Text style={styles.fontTitleInput}>quantité</Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginLeft: 5,
                    }}
                  >
                    <ModalQuantity />
                  </View>
                </View>
                <TextInput
                  style={styles.customInput}
                  inputMode="numeric"
                  keyboardType="numeric"
                  selectionColor="#568b44"
                  onChangeText={(quantity) => {
                    setQuantity(quantity);
                  }}
                  value={quantity}
                />
              </View>
              <View style={{ width: "35%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: 30,
                    marginTop: 5,
                  }}
                >
                  <View>
                    <Text style={styles.fontTitleInput}>prix</Text>
                  </View>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginLeft: 5,
                    }}
                  >
                    <ModalPrice />
                  </View>
                </View>
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <TextInput
                    style={styles.customInput}
                    inputMode="numeric"
                    keyboardType="numeric"
                    place
                    selectionColor="#568b44"
                    onChangeText={(price) => {
                      setPrice(price);
                    }}
                    value={price}
                  />
                  <View style={{ position: "absolute", top: 5, right: 7 }}>
                    <Text
                      style={{
                        color: "lightgray",
                        fontSize: 18,
                      }}
                    >
                      €
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          <CreationSection props={"délivrance"} />
          <View style={styles.input}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <View>
                <Text style={styles.fontTitleInput}>retrait</Text>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                <ModalPickup />
              </View>
            </View>
            <View style={styles.pickUp}>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox}
                  value={homePickup}
                  onValueChange={() => {
                    setHomePickup(!homePickup);
                    setSending(true);
                  }}
                  color={homePickup ? colors.scrapFirstColor : undefined}
                />
                <Text style={styles.darkgrey}>à Domicile</Text>
              </View>
              <View style={styles.inputBox}>
                <Checkbox
                  style={styles.checkbox}
                  value={sending}
                  onValueChange={() => {
                    setSending(!sending);
                    setHomePickup(true);
                  }}
                  color={sending ? colors.scrapFirstColor : undefined}
                />
                <Text style={styles.darkgrey}>Envoi</Text>
              </View>
            </View>
          </View>
          {homePickup && (
            <View style={styles.input}>
              <Text style={styles.fontTitleInput}>ville</Text>
              <TextInput
                style={styles.customInput}
                inputMode="text"
                selectionColor={colors.scrapFirstColor}
                placeholder="Où se trouve le produit"
                placeholderTextColor="lightgray"
                autoCapitalize={"words"}
                onChangeText={(userCity) => {
                  setUserCity(userCity);
                }}
                value={userCity}
              />
            </View>
          )}
          <View style={styles.displayBtnCreate}>
            {name.length < 30 &&
            material.length > 0 &&
            condition &&
            description.length >= 10 &&
            category.length > 0 &&
            weight &&
            quantity > 0 ? (
              <TouchableOpacity
                style={[
                  styles.btnCreate,
                  { backgroundColor: colors.scrapFirstColor },
                ]}
                onPress={handlePress}
              >
                <Text style={styles.btnFontCreate}>Créer</Text>
              </TouchableOpacity>
            ) : (
              <View style={{ alignItems: "center" }}>
                {errorMessage && (
                  <View style={styles.displayErrorMessage}>
                    <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
                  </View>
                )}

                <TouchableOpacity
                  style={[styles.btnCreate, { backgroundColor: "lightgray" }]}
                  onPress={() => {
                    console.log("name ====> ", name);
                    console.log("material ====> ", material);
                    console.log("description ====> ", description);
                    console.log("condition ===>", condition);
                    console.log("category ====> ", category);
                    console.log("weight ===> ", weight);
                    console.log("quantity ===> ", quantity);
                    console.log("price ===> ", price);
                    console.log("homePickup ===> ", homePickup);
                    console.log("sending ===> ", sending);
                    isFree === true && console.log("offer=====> Don");
                    isForSell === true && console.log("offer=====> Vente");
                    // console.log("selectedPicture ===> ", selectedPicture);
                    setErrorMessage("Veuillez remplir tous les critères");
                  }}
                >
                  <Text style={styles.btnFontCreate}>Créer</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkgrey: { color: "#151515" },
  input: {
    width: "90%",
    marginBottom: 10,
  },
  input3: { width: "90%", marginTop: 20 },
  input4: { width: "90%" },
  revealedBtn: {
    backgroundColor: "#568b44",
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
  },
  detailsRevealed: {
    backgroundColor: "#568b44",
    width: "90%",
    marginBottom: 15,
  },
  fontTitleInput: {
    color: "#151515",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  fontTitleInput2: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "capitalize",
  },

  customInput: {
    height: 30,
    borderBottomColor: "#568b44",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
  },
  customInput2: {
    height: 30,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    color: "#fff",
  },
  descriptionArea: { textAlignVertical: "top", height: 80 },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputBox2: {
    //Shapes
    alignItems: "center",
    marginBottom: 10,
  },
  iconShape: { height: 40 },
  inputFree: { flexDirection: "row", alignItems: "center" },
  checkbox: {
    marginRight: 8,
    borderColor: "#568b44",
  },
  checkbox2: {
    marginLeft: 8,
    borderColor: "#568b44",
  },
  checkbox3: {
    marginRight: 5,
    borderColor: "#568b44",
  },
  checkbox4: {
    //Shapes
    borderColor: "#568b44",
    height: 15,
    width: 15,
    borderWidth: 1,
  },
  checkbox5: {
    //Dimensions
    borderColor: "#568b44",
    height: 15,
    width: 15,
    borderWidth: 1,
    marginLeft: 10,
  },
  fontUnit: {
    color: "#fff",
    marginLeft: 3,
  },
  pickUp: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  //Buttons Picture
  btnPicture: {
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#568b44",
    borderWidth: 1,
  },
  fontTitleInput3: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  //Button Create
  displayBtnCreate: {
    marginTop: 30,
    marginBottom: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },
  btnCreate: {
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    // borderColor: "black",
    // borderWidth: 1,
  },
  btnFontCreate: { color: "white", fontSize: 18 },
  displayErrorMessage: { marginBottom: 5 },
  errorMessageStyle: { color: "#ab4237" },
});
