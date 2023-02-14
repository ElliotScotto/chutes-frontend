import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Image, View } from "react-native";
export default function ProductScreen({ route }) {
  const arrayPictures = route.params.pictures;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>id: {route.params.id}</Text>
        <Text>Nom: {route.params.name}</Text>
        <Text>Etat: {route.params.condition}</Text>
        <Text>Description: {route.params.description}</Text>
        <Text>Quantité: {route.params.quantity}</Text>
        <Text>Prix: {route.params.price}€</Text>
        <Text>Catégorie: {route.params.category}</Text>
        <Text>Hauteur(cm): {route.params.height}</Text>
        <Text>Longueur(cm): {route.params.width}</Text>
        <Text>Matière Principale: {route.params.material}</Text>
        <Text>Forme: {route.params.shape}</Text>
        <Text>Poids(Kg): {route.params.weight}</Text>
        <Text>Epaisseur(mm): {route.params.thickness}</Text>
        <Text>Diamètre(mm): {route.params.diameter}</Text>
        <Text>Longueur(cm): {route.params.length}</Text>

        <Text>
          Retrait à domicile:
          {route.params.homePickup === true ? (
            <Text> Oui</Text>
          ) : (
            <Text> Non</Text>
          )}
        </Text>
        {arrayPictures.length > 0 ? (
          <Image
            style={styles.picturesScrap}
            source={{ uri: `${route.params.pictures}` }}
          />
        ) : (
          <View>
            <Text>Images: No image found</Text>
          </View>
        )}

        <Text>Norme/Label: {route.params.normAndLabel}</Text>
        <Text>Vendeur: {route.params.owner}</Text>
        <Text>Date d'ajout : {route.params.createdAt}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  picturesScrap: { width: 250, height: 250 },
});
