import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../auth/AuthNavigator";
import { navigationRef } from "../navigationRef";
import AppNavigator from "../app/AppNavigator";
import { useAuthStore } from "@src/state/useAuthStore";


export default function RootNavigator() {
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = !!token;

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}