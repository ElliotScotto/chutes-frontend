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
export default function CreateDescription() {
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
            <Text style={[styles.modalText, styles.textStyle]}>
              ✓ <Text style={{ fontWeight: "700" }}>10</Text> caractères min.
              (espaces inclus).
            </Text>
            <Text style={[styles.modalText, styles.textStyle]}>
              ✓ <Text style={{ fontWeight: "700" }}>180</Text> caractères max.
              (espaces inclus).
            </Text>
            <Text style={[styles.modalText, styles.textStyle]}>
              ✓ Pensez aux details absents dans le nom.
            </Text>
            <Text style={styles.textStyle}>
              ✓ Précisez l'aspect global du produit.
            </Text>
            <Text style={[styles.textStyle, { marginLeft: 16 }]}>
              Ex: Brut, redécoupé, tâché, lisse, couleur, tailles...
            </Text>

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
