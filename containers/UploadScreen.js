//React
import React from "react";
import { useState, useEffect } from "react";
//utils
import colors from "../utils/colors";
//Packages
// import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
//React Native
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
  Button,
  ActivityIndicator,
} from "react-native";
//Components
import CreationSection from "../components/CreationSection";
//Modals
import ModalPicture from "../modals/CreatePictures";
//
export default function UploadScreen() {
  //Connexion
  const [backendEndpoint, setBackendEndpoint] = useState("");
  //Pictures
  const [data, setData] = useState();
  const [picture, setPicture] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [isLoadingPicture, setIsLoadingPicture] = useState(false);
  //
  //
  //Pictures
  const [uri2, setUri2] = useState("");
  //GetPictureWithPermissions
  const getPermissionAndGetPicture = async () => {
    //Demander le droit d'accéder à la galerie
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      //ouvrir la galerie photo
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
        // allowsMultipleSelection: true,
        selectionLimit: 5,
        maxWidth: 500,
        maxHeight: 500,
        base64: true,
      });
      if (result.canceled === true) {
        alert("Pas de photo sélectionnée");
      } else {
        setSelectedPicture(result.assets[0].uri);
      }
    } else {
      alert("Permission refusée");
    }
  };
  //TakePictureWithPermissions
  const getPermissionAndTakePicture = async () => {
    //Demander le droit d'accéder à l'appareil photo
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      //ouvrir l'appareil photo
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
        // allowsMultipleSelection: true,
        selectionLimit: 5,
        maxWidth: 500,
        maxHeight: 500,
        // base64: true,
      });
      console.log("result===> ", result);
      console.log("result.assets===> ", result.assets);
      // const arrayResultAssets = result.assets;
      // console.log(
      //   "Object.values arrayResultAssets===> ",
      //   Object.values(arrayResultAssets)
      // );
      // const valuesArrayAssets = Object.values(arrayResultAssets);
      // console.log(
      //   "Object.keys(valuesArrayAssets)===> ",
      //   Object.keys(valuesArrayAssets)
      // );
      // const handleUri = () => {
      //   arrayResultAssets.forEach((element) => {
      //     const keys = Object.keys(element);
      //     keys.forEach((key) => {
      //       if (key === "uri") {
      //         console.log(element[key]);
      //         setUri2(element[key]);
      //       }
      //     });
      //   });
      //   return uri2;
      // };
      if (result.canceled) {
        alert("Pas de photo sélectionnée");
      } else {
        setSelectedPicture(result.assets[0].uri);
      }
    } else {
      alert("Permission refusée");
    }
  };
  //SendPicture
  const sendPicture = async () => {
    setIsLoadingPicture(true);
    const tab = selectedPicture.split(".");
    console.log("selectedPicture ====> ", selectedPicture);
    console.log("selectedPicture.split(.) ====> ", selectedPicture.split("."));
    console.log("tab ====> ", tab);
    console.log("tab.length ====> ", tab.length);
    console.log("LastElement : tab[tab.length-1] ====> ", tab[tab.length - 1]);
    // console.log("result.assets[0].uri", result.assets[0].uri);
    const formData = new FormData();
    formData.append("picture", {
      uri: selectedPicture,
      name: `my-pic.${tab[1]}`,
      type: `image/${tab[tab.length - 1]}`,
    });

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
        `https://${backendEndpoint}:3000/scrap/upload`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
          //Si vous avez des headers à transmettre c'est par ici !
          //headers: { Authorization: "Bearer " + userToken },
          transformRequest: (formData) => formData,
        }
      );
      if (response.data) {
        setData(response.data);
        setIsLoadingPicture(false);
        alert("Photo Envoyée !");
        console.log("UPLOADSCREEN: response.data ===>", response.data);
      }
    } catch (error) {
      console.log("UPLOADSCREEN : ERREUR Requête côté Client ====>", error);
    }
  };
  //
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View style={styles.container}>
          <Button title="Galerie" onPress={getPermissionAndGetPicture} />
          <Button
            title="Prendre une photo"
            onPress={getPermissionAndTakePicture}
          />
          {selectedPicture && (
            <Image
              source={{ uri: selectedPicture }}
              style={{ height: 200, width: 200 }}
            />
          )}

          {isLoadingPicture === true ? (
            <ActivityIndicator size="small" color="#568b44" />
          ) : (
            <Button
              title="Envoi d'une photo au backend"
              onPress={sendPicture}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
