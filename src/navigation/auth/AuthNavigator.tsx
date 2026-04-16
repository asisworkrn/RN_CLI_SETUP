import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../types";
import { AUTH_SCREENS } from "./auth.screens";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {AUTH_SCREENS.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name as keyof AuthStackParamList}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
}