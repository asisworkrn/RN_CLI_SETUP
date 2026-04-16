import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../auth/AuthNavigator";
import { navigationRef } from "../navigationRef";
import AppNavigator from "../app/AppNavigator";

// Replace with Zustand later
const isLoggedIn = false;

export default function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}