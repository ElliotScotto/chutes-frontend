import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
//Utils
import displayDate from "../utils/displayDate";
import { globalWhite } from "../utils/globalWhite";
//Components
import CreationSection from "../components/CreationSection";
//
export default function ProductScreen({ route }) {
  const arrayPictures = route.params.pictures;
  const arrayCategory = route.params.category;
  const arrayShape = route.params.shape;
  const DateOffer = route.params.createdAt;
  return (
    <ScrollView style={globalWhite.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.productContainer}>
            <CreationSection props={"En bref"} />
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Nom:</Text>
              <Text>{route.params.name}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Matière Principale:</Text>
              <Text>{route.params.material}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Etat:</Text>
              <Text>{route.params.condition}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Description:</Text>
              <View style={{ flexShrink: 1 }}>
                <Text>{route.params.description}</Text>
              </View>
            </View>

            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Catégorie:</Text>
              {arrayCategory.length > 1 ? (
                <>
                  <Text>{route.params.category[0]},</Text>
                  <Text style={{ marginLeft: 3 }}>
                    {route.params.category[1]}
                  </Text>
                </>
              ) : (
                <Text>{route.params.category}</Text>
              )}
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Poids:</Text>
              <Text>{route.params.weight}</Text>
            </View>
            <CreationSection props={"dimensions & forme"} />
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Longueur:</Text>
              <Text>{route.params.length}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Largeur:</Text>
              <Text>{route.params.width}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Epaisseur:</Text>
              <Text>{route.params.thickness}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Diamètre:</Text>
              <Text>{route.params.diameter}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Profondeur:</Text>
              <Text>{route.params.depth}</Text>
            </View>

            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Forme:</Text>
              {arrayShape.length > 1 ? (
                <>
                  <Text>{route.params.shape[0]},</Text>
                  <Text style={{ marginLeft: 3 }}>{route.params.shape[1]}</Text>
                </>
              ) : (
                <Text>{route.params.shape}</Text>
              )}
            </View>

            <CreationSection props={"détails produit"} />
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Outils nécessaire:</Text>
              <Text> {route.params.necessaryTool}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Marque:</Text>
              <Text> {route.params.brand}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Norme/Label:</Text>
              <Text> {route.params.normAndLabel}</Text>
            </View>
            <CreationSection props={"offre"} />
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Quantité:</Text>
              <Text>{route.params.quantity}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Prix:</Text>
              <Text>{route.params.price}</Text>
              <Text style={{ marginLeft: 3 }}>€</Text>
            </View>
            <CreationSection props={"délivrance"} />
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Retrait à domicile:</Text>
              {route.params.homePickup === true ? (
                <Text> Oui</Text>
              ) : (
                <Text> Non</Text>
              )}
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Envoi:</Text>
              {route.params.sending === true ? (
                <Text> Oui</Text>
              ) : (
                <Text> Non</Text>
              )}
            </View>

            <CreationSection props={"détails offre"} />
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>N° Offre:</Text>
              <Text>{route.params.id}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>N° Vendeur:</Text>
              <Text> {route.params.owner}</Text>
            </View>
            <View style={styles.displayDetailsProduct}>
              <Text style={styles.fontTitle}>Date d'ajout :</Text>
              <Text> {displayDate(route.params.createdAt)}</Text>
            </View>
            {arrayPictures.length > 0 ? (
              <Image
                style={styles.picturesScrap}
                source={{ uri: `${route.params.pictures}` }}
              />
            ) : (
              <View style={styles.displayDetailsProduct}>
                <Text style={styles.fontTitle}>Images:</Text>
                <Text> No image found</Text>
              </View>
            )}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: widthScreen,
    // paddingTop: 10,
  },
  productContainer: { width: widthScreen * 0.95 },
  displayDetailsProduct: { flexDirection: "row" },
  fontTitle: { fontWeight: "bold", marginRight: 5 },
  picturesScrap: { width: 250, height: 250 },
});
