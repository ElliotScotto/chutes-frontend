import React from "react";
import { useState } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
//Icons
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
//Containers
import HomeScreen from "../containers/HomeScreen";
import ProductScreen from "../containers/ProductScreen";
import CreateScreen from "../containers/CreateScreen";
import UploadScreen from "../containers/UploadScreen";
import ProfileScreen from "../containers/ProfileScreen";
import WelcomeScreen from "../containers/WelcomeScreen";
//Components
import SearchBar from "./SearchBar";
import Logo from "./Logo";
//Utils
import colors from "../utils/colors";
//Header
Platform.OS === "ios"
  ? console.log(
      "Constants.statusBarHeight_IOS ===== >> ",
      Constants.statusBarHeight
    )
  : console.log(
      "Constants.statusBarHeight_ANDROID ===== >> ",
      Constants.statusBarHeight
    );

const DisplayTabs = () => {
  const [searchName, setSearchName] = useState("");
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sort, setSort] = useState("");
  return (
    <>
      <StatusBar hidden={false} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.scrapFirstColor,
          tabBarInactiveTintColor: "gray",
          headerBackTitleVisible: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name={"search1"} size={size} color={color} />
            ),
            headerTitle: () => <Logo />,
            headerShown: true,
            headerTitleAlign: "center",
            headerTitleContainerStyle: { justifyContent: "flex-end" },

            headerStyle: {
              height: Constants.statusBarHeight + 30, // 30 correspond à la hauteur du composant <Logo/>
              backgroundColor: "#fff",
            },
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name={"addfile"} size={size} color={color} />
            ),
            title: "Créer votre produit",
            headerShown: true,
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#568b44" },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name={"user"} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Tabs" component={DisplayTabs} />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={(options) => {
            console.log("options.route", options.route);
            return {
              title: null,
              headerShown: true,
              headerTintColor: "#568b44",
              headerBackVisible: true,
              headerBackTitleVisible: true,
              headerBackTitle: "Chutes", // ou Back = options.route.params.screen,
            };
          }}
        />
        <Stack.Screen
          name="Photos"
          component={UploadScreen}
          options={(options) => {
            // console.log("options.route", options.route);
            <SearchBar />;
            return {
              title: null,
              headerShown: true,
              headerBackVisible: true,
              headerBackTitleVisible: true,
              headerBackTitle: "Caractéristiques", // ou Back = options.route.params.screen,
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#568b44", height: 20 },
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Auth;
