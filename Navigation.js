import React from "react";
import { Text, View } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
// import RestaurantScreen from './screens/RestaurantScreen';

const RootStack = createStaticNavigation(
  createNativeStackNavigator({
    initialRouteName: "Home",
    screens: {
      Home: HomeScreen,
    },
  })
);

export default function Navigation() {
  return (
    <>
      <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.screens name = "Home" component = {HomeScreen} />
            </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}