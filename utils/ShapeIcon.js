import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
export default function ShapeIcon({ shape }) {
  let shapeIcon = [];
  if (shape === "rond" || "Rond") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="circle-outline"
        size={40}
        color="#fff"
        key={1}
      />,
    ];
  }
  if (shape === "Carré") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="square-outline"
        size={40}
        color="#fff"
        key={2}
      />,
    ];
  }
  if (shape === "Rectangle") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="rectangle-outline"
        size={40}
        color="#fff"
        key={3}
      />,
    ];
  }
  if (shape === "Triangle") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="triangle-outline"
        size={40}
        color="#fff"
        key={4}
      />,
    ];
  }
  if (shape === "Plat") {
    shapeIcon = [
      <Ionicons name="remove-outline" size={40} color="#fff" key={5} />,
    ];
  }
  if (shape === "Ovoïde") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="egg-outline"
        size={40}
        color="#fff"
        key={6}
      />,
    ];
  }
  if (shape === "Pentagone") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="pentagon-outline"
        size={40}
        color="#fff"
        key={7}
      />,
    ];
  }
  if (shape === "Hexagone") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="hexagon-outline"
        size={40}
        color="#fff"
        key={8}
      />,
    ];
  }
  if (shape === "Octagone") {
    shapeIcon = [
      <MaterialCommunityIcons
        name="octagon-outline"
        size={40}
        color="#fff"
        key={9}
      />,
    ];
  }
  return shapeIcon;
}
