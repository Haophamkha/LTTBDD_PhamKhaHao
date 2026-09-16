import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "../App";
import BookDetailScreen from "../screens/BookDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={App}
      />

      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
      />
    </Stack.Navigator>
  );
}
