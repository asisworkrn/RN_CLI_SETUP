import React, { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../auth/AuthNavigator";
import { navigationRef } from "../navigationRef";
import AppNavigator from "../app/AppNavigator";
import { useAuthStore } from "@src/state/useAuthStore";
import BootSplash from "react-native-bootsplash";


export default function RootNavigator() {
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = !!token;

  const onReady = useCallback(async () => {
    setTimeout(()=>{
  BootSplash.hide();
    },3000)
  
  }, []);

  return (
    <NavigationContainer onReady={onReady} ref={navigationRef}>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}