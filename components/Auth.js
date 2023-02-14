import React from "react";
import { StatusBar } from "expo-status-bar";
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

const HomeScreen2 = () => {
  return (
    <>
      <StatusBar hidden={false} style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#568b44",
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
            title: "CHUTES",
            headerShown: true,
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#568b44" },
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
        <Stack.Screen name="Home2" component={HomeScreen2} />
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
            return {
              title: null,
              headerShown: true,
              headerBackVisible: true,
              headerBackTitleVisible: true,
              headerBackTitle: "Caractéristiques", // ou Back = options.route.params.screen,
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#568b44" },
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Auth;
