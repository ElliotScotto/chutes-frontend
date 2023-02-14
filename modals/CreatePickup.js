import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
//
export default function CreatePickup() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "10%",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textStyle}>✓</Text>
              </View>
              <View style={{ width: "90%" }}>
                <Text style={[styles.modalText, styles.textStyle]}>
                  En cochant les 3 cases, l'acheteur peut choisir le mode de
                  délivrance qu'il souhaite.
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "10%",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textStyle}>✓</Text>
              </View>
              <View style={{ width: "90%" }}>
                <Text style={[styles.modalText, styles.textStyle]}>
                  "à domicile" : votre ville et departement sera visible par
                  tous les utilisateurs. Votre adresse complète ne sera connu de
                  l'acheteur qu'au moment de la transaction.
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: "10%",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textStyle}>✓</Text>
              </View>
              <View style={{ width: "90%" }}>
                <Text style={[styles.modalText, styles.textStyle]}>
                  "en lieu sûr" : Vous choisissez un lieu idéalement situé entre
                  votre domicile et celui de l'acheteur. Votre adresse ne sera
                  jamais visible par les utilisateurs.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeModalFont}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>
          <Feather name="info" size={20} color="#568b44" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  centeredView: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // margin: 20,
    width: widthScreen * 0.9,
    backgroundColor: "#568b44",
    padding: 20,
    borderColor: "#fff",
    borderWidth: 1,
    elevation: 5,
  },

  textStyle: {
    color: "#fff",
  },
  modalText: {
    marginBottom: 8,
  },
  closeModal: { marginTop: 10, alignItems: "flex-end" },
  closeModalFont: { color: "#fff", fontWeight: "500" },
});
