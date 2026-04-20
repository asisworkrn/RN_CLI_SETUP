import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { AppStackParamList } from "../types";
import { APP_SCREENS } from "./app.screens";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {APP_SCREENS.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name as keyof AppStackParamList}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
}