import React from "react";
import { useState, useEffect } from "react";
//StatusBar & Header
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
//Components
import ArrowSwiper from "../components/ArrowSwiper";
import ShapeIcon from "../utils/ShapeIcon.js";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Filters from "../components/Filters";
//Utils
import displayDate from "../utils/displayDate";
import colors from "../utils/colors";
import { globalWhite } from "../utils/globalWhite";
//
let serverUrl = "";
// Condition pour déterminer l'adresse IP ou le nom d'hôte selon la plateforme
if (Platform.__constants.Model === "sdk_gphone64_arm64") {
  serverUrl = "http://10.0.2.2:3000"; // Adresse IP pour Android
} else if (Platform.OS === "ios") {
  serverUrl = "http://localhost:3000"; // Nom d'hôte pour iOS
} else if (Platform.__constants.Model === "LYA-L29") {
  serverUrl = "http://192.168.1.38:3000"; // Nom d'hôte pour mon smartphone
}
//
export default function HomeScreen({ navigation }) {
  //Connexion
  const [backendEndpoint, setBackendEndpoint] = useState("");
  //
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);
  const [sortDirection, setSortDirection] = useState(null);
  //
  const handleAscendingChange = () => {
    if (!ascending) {
      setAscending(true);
      setDescending(false);
      setSortDirection("price-asc");
    } else {
      setAscending(false);
      setSortDirection(null);
    }
  };

  const handleDescendingChange = () => {
    if (!descending) {
      setDescending(true);
      setAscending(false);
      setSortDirection("price-desc");
    } else {
      setDescending(false);
      setSortDirection(null);
    }
  };
  //
  const [filter, setFilter] = useState({
    search: "",
    condition: {
      perfect: false,
      good: false,
      acceptable: false,
      damaged: false,
      ruined: false,
    },
    freeScrap: false,
    category: {
      quincaillerie: false,
      outils: false,
      peinture: false,
      sol: false,
      electricite: false,
      plomberie: false,
      toiture: false,
      menuiserie: false,
      grosOeuvre: false,
      jardin: false,
      divers: false,
    },
  });
  //
  const handleSearch = (text) => {
    setFilter({ ...filter, search: text });
  };
  const handleFilter = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/scraps?filter=${JSON.stringify(
            filter
          )}&sort=${sortDirection}`
        );
        // const data = await res.json();
        // console.log("response.data =====> ", response.data);
        // console.log("response.data.count =====> ", response.data.count); //Nombre de résultats selon filtres
        setProducts(response.data.allScraps);
        setIsLoading(false);
      } catch (error) {
        console.log("HOMECREEN: error.response=====> ", error.response);
      }
    };
    //
    // useEffect(() => {
    getProducts();
  }, [filter, sortDirection]);
  //
  return (
    <SafeAreaProvider
      style={[
        globalWhite.container,
        Platform.OS === "ios" ? styles.scrollViewIOS : styles.scrollViewAndroid,
      ]}
    >
      <StatusBar hidden={false} style="dark" />
      <SearchBar
        filtersVisible={filtersVisible}
        setFiltersVisible={setFiltersVisible}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        filter={filter}
        navigation={navigation}
      />
      {filtersVisible && (
        <View style={{ alignItems: "center" }}>
          <Filters
            filter={filter}
            handleFilter={handleFilter}
            ascending={ascending}
            descending={descending}
            handleAscendingChange={handleAscendingChange}
            handleDescendingChange={handleDescendingChange}
          />
        </View>
      )}
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={products}
            renderItem={({ item, index }) => {
              const arrayCategories = item.category;
              const arrayShapes = item.shape;
              return (
                <Swiper
                  style={styles.wrapper}
                  showsButtons={false}
                  loop={false}
                  autoplay={false}
                  showsPagination={false}
                >
                  <View
                    style={[
                      styles.mainDisplayCardScrap,
                      Platform.OS === "ios"
                        ? styles.mainDisplayCardforIos
                        : styles.mainDisplayCardforAndroid,
                    ]}
                  >
                    <TouchableOpacity
                      style={styles.cardScrap}
                      key={index}
                      onPress={() => {
                        navigation.navigate("Product", {
                          //PRODUCT
                          name: item.name,
                          condition: item.condition,
                          description: item.description,
                          category: item.category,
                          material: item.material,
                          pictures: item.pictures,
                          weight: item.weight,
                          //DIMENSIONS
                          length: item.length,
                          width: item.width,
                          thickness: item.thickness,
                          diameter: item.diameter,
                          depth: item.depth,
                          //unitMeasure
                          mmLength: item.mmLength,
                          cmLength: item.cmLength,
                          mLength: item.mLength,
                          mmWidth: item.mmWidth,
                          cmWidth: item.cmWidth,
                          mWidth: item.mWidth,
                          mmThickness: item.mmThickness,
                          cmThickness: item.cmThickness,
                          mThickness: item.mThickness,
                          mmDiameter: item.mmDiameter,
                          cmDiameter: item.cmDiameter,
                          mDiameter: item.mDiameter,
                          mmDepth: item.mmDepth,
                          cmDepth: item.cmDepth,
                          mDepth: item.mDepth,
                          //shape
                          shape: item.shape,
                          //details
                          normAndLabel: item.normAndLabel,
                          brand: item.brand,
                          //offer
                          isFree: item.isFree,
                          isForSell: item.isForSell,
                          quantity: item.quantity,
                          price: item.price,
                          //delivery
                          homePickup: item.homePickup,
                          sending: item.sending,
                          //offerID
                          id: item._id,
                          owner: item.owner,
                          createdAt: item.createdAt,
                        });
                      }}
                    >
                      <View style={styles.CardScrapLeft}>
                        <View style={[styles.displayNameScrap, styles.margBot]}>
                          <Text
                            style={[styles.nameScrap, styles.lightBlack]}
                            numberOfLines={1}
                          >
                            {item.name}
                          </Text>
                        </View>
                        <View style={[styles.row, styles.margBot]}>
                          <Text
                            style={[styles.lightBlack, styles.quantityAndPrice]}
                          >
                            Etat:
                          </Text>
                          <Text style={styles.lightBlack}>
                            {item.condition}
                          </Text>
                        </View>

                        <View style={[styles.row, styles.margBot]}>
                          <Text
                            style={[styles.lightBlack, styles.quantityAndPrice]}
                          >
                            Quantité:
                          </Text>
                          <Text style={styles.lightBlack}>{item.quantity}</Text>
                          <Text style={styles.separator}>|</Text>
                          {item.price === 0 || item.isFree === true ? (
                            <Text style={styles.lightBlack}>Gratuit</Text>
                          ) : (
                            <>
                              <Text
                                style={[
                                  styles.lightBlack,
                                  styles.quantityAndPrice,
                                ]}
                              >
                                Prix:
                              </Text>
                              <Text
                                style={[
                                  styles.lightBlack,
                                  styles.quantityAndPrice,
                                ]}
                              >
                                {item.price}
                              </Text>
                              <Text style={styles.lightBlack}>€</Text>
                            </>
                          )}
                        </View>

                        <View style={styles.allDelivery}>
                          {item.homePickup ? (
                            <MaterialCommunityIcons
                              name="home-circle"
                              size={24}
                              color={colors.scrapFirstColor}
                            />
                          ) : (
                            <MaterialCommunityIcons
                              name="home-circle-outline"
                              size={24}
                              color="lightgray"
                            />
                          )}
                          {item.sending ? (
                            <MaterialCommunityIcons
                              name="send-circle"
                              size={24}
                              color={colors.scrapFirstColor}
                            />
                          ) : (
                            <MaterialCommunityIcons
                              name="send-circle-outline"
                              size={24}
                              color="lightgray"
                            />
                          )}
                        </View>
                      </View>
                      <View style={styles.CardScrapRight}>
                        {!item.pictures[0] ? (
                          <MaterialCommunityIcons
                            name="image-off-outline"
                            resizeMode="cover"
                            size={105}
                            color="lightgray"
                            style={styles.mainPictureScrap}
                          />
                        ) : (
                          <Image
                            style={styles.mainPictureScrap}
                            source={{ uri: `${item.pictures[0]}` }}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    <ArrowSwiper title={"Dimensions"} />
                  </View>
                  <View style={styles.secondDisplayCardScrap}>
                    <View style={styles.displayTitleDimensions}>
                      <Text
                        style={[
                          styles.fontSecondCard,
                          styles.fontDimensionsTitle,
                        ]}
                      >
                        Dimensions
                      </Text>
                    </View>
                    <View style={styles.displayDimensions}>
                      <View>
                        {item.length ? (
                          <View style={styles.row}>
                            <Text style={styles.fontSecondCard}>
                              Longueur : {item.length}
                            </Text>
                            {item.mmLength && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                mm
                              </Text>
                            )}
                            {item.cmLength && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                cm
                              </Text>
                            )}
                            {item.mLength && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                M
                              </Text>
                            )}
                          </View>
                        ) : (
                          <Text style={styles.fontSecondCard}>
                            Longueur : ?
                          </Text>
                        )}
                        {item.width ? (
                          <View style={styles.row}>
                            <Text style={styles.fontSecondCard}>
                              Largeur : {item.width}
                            </Text>
                            {item.mmWidth && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                mm
                              </Text>
                            )}
                            {item.cmWidth && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                cm
                              </Text>
                            )}
                            {item.mWidth && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                M
                              </Text>
                            )}
                          </View>
                        ) : (
                          <Text style={styles.fontSecondCard}>Largeur : ?</Text>
                        )}
                      </View>
                      <View>
                        {item.diameter ? (
                          <View style={styles.row}>
                            <Text style={styles.fontSecondCard}>
                              Diamètre : {item.diameter}
                            </Text>
                            {item.mmDiameter && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                mm
                              </Text>
                            )}
                            {item.cmDiameter && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                cm
                              </Text>
                            )}
                            {item.mDiameter && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                M
                              </Text>
                            )}
                          </View>
                        ) : (
                          <Text style={styles.fontSecondCard}>
                            Diamètre : ?
                          </Text>
                        )}
                        {item.thickness ? (
                          <View style={styles.row}>
                            <Text style={styles.fontSecondCard}>
                              Epaisseur : {item.thickness}
                            </Text>
                            {item.mmThickness && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                mm
                              </Text>
                            )}
                            {item.cmThickness && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                cm
                              </Text>
                            )}
                            {item.mThickness && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                M
                              </Text>
                            )}
                          </View>
                        ) : (
                          <Text style={styles.fontSecondCard}>
                            Epaisseur : ?
                          </Text>
                        )}
                        {item.depth ? (
                          <View style={styles.row}>
                            <Text style={styles.fontSecondCard}>
                              Profondeur : {item.depth}
                            </Text>
                            {item.mmDepth && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                mm
                              </Text>
                            )}
                            {item.cmDepth && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                cm
                              </Text>
                            )}
                            {item.mDepth && (
                              <Text
                                style={[
                                  styles.fontSecondCard,
                                  styles.dimensionsUnit,
                                ]}
                              >
                                M
                              </Text>
                            )}
                          </View>
                        ) : (
                          <Text style={styles.fontSecondCard}>
                            Profondeur : ?
                          </Text>
                        )}
                      </View>

                      {arrayShapes.length >= 1 && (
                        <View>
                          {arrayShapes.length === 1 && (
                            <ShapeIcon shape={item.shape[0]} />
                          )}
                          {arrayShapes.length === 2 && (
                            <View style={styles.displayShapes}>
                              <ShapeIcon shape={item.shape[0]} />
                              <ShapeIcon shape={item.shape[1]} />
                            </View>
                          )}
                        </View>
                      )}
                    </View>
                    <View>
                      <ArrowSwiper title={"Details"} />
                    </View>
                  </View>
                  <View style={styles.thirdDisplayCardScrap}>
                    <Text style={[styles.fontThirdCard, styles.detailsTitle]}>
                      Détails
                    </Text>
                    <View style={styles.displayDetails}>
                      <View>
                        {arrayCategories.length > 1 ? (
                          <Text style={styles.lightBlack} numberOfLines={1}>
                            Catégories : {item.category[0]}, {item.category[1]}
                          </Text>
                        ) : (
                          <Text style={styles.lightBlack}>
                            Catégorie : {item.category[0]}
                          </Text>
                        )}

                        {item.brand ? (
                          <Text style={styles.lightBlack}>
                            Marque : {item.brand}
                          </Text>
                        ) : (
                          <Text style={styles.lightBlack}>Marque : ?</Text>
                        )}
                        {item.normAndLabel ? (
                          <Text style={styles.lightBlack}>
                            Norme / label : {item.normAndLabel}
                          </Text>
                        ) : (
                          <Text style={styles.lightBlack}>
                            Norme / label : ?
                          </Text>
                        )}
                        {/* <Text style={styles.lightBlack}>
                          Création : {displayDate(item.createdAt)}
                        </Text> */}
                      </View>
                      <View style={styles.thirdCardRight}>
                        <TouchableOpacity
                          style={styles.buttonScrapId}
                          key={index}
                          onPress={() => {
                            navigation.navigate("Product", {
                              //PRODUCT
                              name: item.name,
                              condition: item.condition,
                              description: item.description,
                              category: item.category,
                              material: item.material,
                              pictures: item.pictures,
                              weight: item.weight,
                              //DIMENSIONS
                              length: item.length,
                              width: item.width,
                              height: item.height,
                              thickness: item.thickness,
                              diameter: item.diameter,
                              depth: item.depth,
                              //unitMeasure
                              mmLength: item.mmLength,
                              cmLength: item.cmLength,
                              mLength: item.mLength,
                              mmWidth: item.mmWidth,
                              cmWidth: item.cmWidth,
                              mWidth: item.mWidth,
                              mmThickness: item.mmThickness,
                              cmThickness: item.cmThickness,
                              mThickness: item.mThickness,
                              mmDiameter: item.mmDiameter,
                              cmDiameter: item.cmDiameter,
                              mDiameter: item.mDiameter,
                              mmDepth: item.mmDepth,
                              cmDepth: item.cmDepth,
                              mDepth: item.mDepth,
                              //shape
                              shape: item.shape,
                              //details
                              necessaryTool: item.necessaryTool,
                              normAndLabel: item.normAndLabel,
                              brand: item.brand,
                              //offer
                              isFree: item.isFree,
                              isForSell: item.isForSell,
                              quantity: item.quantity,
                              price: item.price,
                              //delivery
                              homePickup: item.homePickup,
                              sending: item.sending,
                              //offerID
                              id: item._id,
                              owner: item.owner,
                              createdAt: item.createdAt,
                            });
                          }}
                        >
                          <Text style={styles.fontBtnScrapId}>Fiche</Text>
                          <Text style={styles.fontBtnScrapId}>Produit</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Swiper>
              );
            }}
            keyExtractor={(item) => String(item._id)}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  scrollViewAndroid: {
    paddingBottom: Constants.statusBarHeight + 32, //On ajoute la hauteur occupée par le header et la SearchBar
  },
  scrollViewIOS: {
    paddingBottom: Constants.statusBarHeight + 8, //On ajoute la hauteur occupée par le header et la SearchBar
  },
  container: {
    alignItems: "center",
    width: widthScreen,
    marginTop: 10,
  },

  mainDisplayCardScrap: {
    width: widthScreen * 0.95,
    marginLeft: 10,
  },
  mainDisplayCardforIos: { marginTop: 7 },
  mainDisplayCardforAndroid: { marginTop: 3 },
  cardScrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 3,
  },

  CardScrapLeft: {
    flexDirection: "column",
    // borderColor: "black",
    // borderWidth: 1,
    width: "69%",
  },
  row: { flexDirection: "row" },
  margBot: { marginBottom: 3 },
  displayNameScrap: {
    // borderColor: "black",
    // borderWidth: 1,
  },
  nameScrap: {
    fontSize: 15,
    fontWeight: "700",
  },
  quantityAndPrice: { marginRight: 3 },
  separator: {
    marginLeft: 5,
    marginRight: 5,
    color: colors.scrapFirstColor,
    fontWeight: "bold",
  },
  CardScrapRight: {
    width: 105,
    justifyContent: "flex-end",
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },
  mainPictureScrap: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    alignItems: "center",
    borderRadius: 3,
  },
  allDelivery: {
    flexDirection: "row",
    // borderColor: "black",
    // borderWidth: 1,
  },
  //Swipper
  wrapper: {
    height: 138,
    //  borderColor: "black",
    //   borderWidth: 1
  },
  //
  fontSecondCard: { color: "#fff" },
  //SecondSlide
  secondDisplayCardScrap: {
    width: widthScreen,
    height: 138,
    backgroundColor: colors.scrapFirstColor,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 9,
  },
  //Dimensions
  displayTitleDimensions: { alignItems: "center" },
  fontDimensionsTitle: {
    fontSize: 16,
    fontWeight: "500",
    // borderColor: "black",
    // borderWidth: 1,
  },
  displayDimensions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderColor: "black",
    // borderWidth: 1,
  },
  dimensionsUnit: { marginLeft: 3 },
  displayShapes: {
    flexDirection: "row",
    // borderColor: "black",
    // borderWidth: 1,
  },
  //ThirdSlide
  thirdDisplayCardScrap: {
    width: widthScreen,
    height: 138,
    backgroundColor: "#fff",
    padding: 10,
    borderBottomColor: colors.scrapFirstColor,
    borderBottomWidth: 1,
  },
  displayDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderColor: "black",
    // borderWidth: 1,
  },
  fontThirdCard: { color: colors.scrapFirstColor },
  lightBlack: { color: "#151515" },
  detailsTitle: { fontSize: 16, fontWeight: "500", marginBottom: 10 },
  thirdCardRight: {
    // borderColor: "black",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  buttonScrapId: {
    padding: 8,
    height: 80,
    width: "auto",
    borderColor: colors.scrapFirstColor,
    borderWidth: 2,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  fontBtnScrapId: { color: colors.scrapFirstColor },
});
