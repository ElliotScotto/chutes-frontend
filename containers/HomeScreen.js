import React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
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
} from "react-native";
//Components
import ArrowSwiper from "../components/ArrowSwiper";
import ShapeIcon from "../utils/ShapeIcon.js";
//
export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        Platform.OS === "ios"
          ? (response = await axios.get("http://localhost:3000/scraps"))
          : (response = await axios.get("http://10.0.2.2:3000/scraps"));
        setData(response.data);
        // console.log("HOMESCREEN : RESPONSE.DATA ====> ", response.data);
      } catch (res) {
        console.warn("ERREUR REQUETE ====> ", res);
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar hidden={false} style="light" />
      <SafeAreaView
        style={[styles.container, Platform.OS === "ios" && styles.IosContainer]}
      >
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            const arrayCategories = item.category;
            const arrayShapes = item.shape;
            console.log("arrayShapes ====> ", arrayShapes);
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
                        id: item._id,
                        name: item.name,
                        condition: item.condition,
                        description: item.description,
                        category: item.category,
                        createdAt: item.createdAt,
                        diameter: item.diameter,
                        thickness: item.thickness,
                        length: item.length,
                        width: item.width,
                        height: item.height,
                        homePickup: item.homePickup,
                        sending: item.sending,
                        material: item.material,
                        shape: item.shape,
                        pictures: item.pictures,
                        quantity: item.quantity,
                        price: item.price,
                        weight: item.weight,
                        normAndLabel: item.normAndLabel,
                        owner: item.owner,
                      });
                    }}
                  >
                    <View style={styles.CardScrapLeft}>
                      <View style={styles.displayNameScrap}>
                        <Text style={styles.nameScrap} numberOfLines={1}>
                          {item.name}
                        </Text>
                      </View>

                      <Text style={styles.lightBlack}>
                        Etat: {item.condition}
                      </Text>
                      <Text style={styles.lightBlack}>
                        Quantité: {item.quantity}
                      </Text>
                      {item.price === 0 || item.isFree === true ? (
                        <Text>Gratuit</Text>
                      ) : (
                        <Text style={styles.lightBlack}>
                          Prix: {item.price} €
                        </Text>
                      )}
                      <View style={styles.allDelivery}>
                        {item.homePickup ? (
                          <MaterialCommunityIcons
                            name="home-circle"
                            size={24}
                            color="#568b44"
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
                            color="#568b44"
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
                          color="#568b44"
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
                        <Text style={styles.fontSecondCard}>
                          Longueur : {item.length}
                        </Text>
                      ) : (
                        <Text style={styles.fontSecondCard}>Longueur : ?</Text>
                      )}

                      {item.width ? (
                        <Text style={styles.fontSecondCard}>
                          Largeur : {item.width}
                        </Text>
                      ) : (
                        <Text style={styles.fontSecondCard}>Largeur : ?</Text>
                      )}

                      {item.height ? (
                        <Text style={styles.fontSecondCard}>
                          Hauteur : {item.height}
                        </Text>
                      ) : (
                        <Text style={styles.fontSecondCard}>Hauteur : ?</Text>
                      )}
                    </View>
                    <View>
                      {item.diameter ? (
                        <Text style={styles.fontSecondCard}>
                          Diamètre : {item.diameter}
                        </Text>
                      ) : (
                        <Text style={styles.fontSecondCard}>Diamètre : ?</Text>
                      )}

                      {item.thickness ? (
                        <Text style={styles.fontSecondCard}>
                          Epaisseur : {item.thickness}
                        </Text>
                      ) : (
                        <Text style={styles.fontSecondCard}>Epaisseur : ?</Text>
                      )}

                      {item.depth ? (
                        <Text style={styles.fontSecondCard}>
                          Profondeur : {item.depth}
                        </Text>
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
                        <Text style={styles.lightBlack}>Norme / label : ?</Text>
                      )}
                      <Text style={styles.lightBlack}>
                        Création : {item.createdAt}
                      </Text>
                    </View>
                    <View style={styles.thirdCardRight}>
                      <TouchableOpacity
                        style={styles.buttonScrapId}
                        key={index}
                        onPress={() => {
                          navigation.navigate("Product", {
                            id: item._id,
                            name: item.name,
                            condition: item.condition,
                            description: item.description,
                            category: item.category,
                            createdAt: item.createdAt,
                            diameter: item.diameter,
                            thickness: item.thickness,
                            length: item.length,
                            width: item.width,
                            height: item.height,
                            homePickup: item.homePickup,
                            sending: item.sending,
                            material: item.material,
                            shape: item.shape,
                            pictures: item.pictures,
                            quantity: item.quantity,
                            price: item.price,
                            weight: item.weight,
                            normAndLabel: item.normAndLabel,
                            owner: item.owner,
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: widthScreen,
  },
  // IosContainer: { height: heightScreen },
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
    // marginBottom: 15,
    // borderColor: "black",
    // borderWidth: 1,
  },

  CardScrapLeft: {
    flexDirection: "column",
    // borderColor: "black",
    // borderWidth: 1,
    width: "69%",
  },
  displayNameScrap: {
    // borderColor: "black",
    // borderWidth: 1,
  },
  nameScrap: {
    fontSize: 15,
    fontWeight: "700",
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
    backgroundColor: "#568b44",
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
    borderBottomColor: "#568b44",
    borderBottomWidth: 1,
  },
  displayDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderColor: "black",
    // borderWidth: 1,
  },
  fontThirdCard: { color: "#566844" },
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
    borderColor: "#568b44",
    borderWidth: 2,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  fontBtnScrapId: { color: "#568b44" },
});
