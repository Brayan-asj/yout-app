import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PrincipalScreen from "../screens/PrincipalScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#19376D",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => ({
          headerLeft: null,
          title: "YOUT Security",
          headerRight: () => (
            <Image
              source={require("../assets/yout2_white.png")}
              style={{
                width: 55,
                height: 55,
                marginRight: 15,
                resizeMode: "contain",
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({ navigation }) => ({
          headerLeft: null,
          title: "YOUT Security",
          headerRight: () => (
            <Image
              source={require("../assets/yout2_white.png")}
              style={{
                width: 55,
                height: 55,
                marginRight: 15,
                resizeMode: "contain",
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="Principal"
        component={PrincipalScreen}
        options={({ navigation }) => ({
          headerLeft: null,
          title: "YOUT Security",
          headerRight: () => (
            <Image
              source={require("../assets/yout2_white.png")}
              style={{
                width: 55,
                height: 55,
                marginRight: 15,
                resizeMode: "contain",
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
