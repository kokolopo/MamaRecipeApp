import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabMenu from "./src/pages/TabMenu";
import Registration from "./src/pages/Registration";
import Login from "./src/pages/Login";
const Stack = createNativeStackNavigator();

// notif
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";

// state
import useLogin from "./src/states/useLogin";
import DetailRecipe from "./src/pages/DetailRecipe";
import MyRecipes from "./src/pages/MyRecipes";
import EditRecipe from "./src/pages/EditRecipe";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  // state
  const { token } = useLogin();
  console.log({ token });

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={token ? "TabMenu" : "Login"}
      >
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Detail" component={DetailRecipe} />
        <Stack.Screen name="MyRecipes" component={MyRecipes} />
        <Stack.Screen name="EditRecipe" component={EditRecipe} />
        <Stack.Screen
          name="TabMenu"
          component={TabMenu}
          initialParams={{ FMCToken: expoPushToken }}
          options={{
            headerLeft: null, // Menghilangkan tombol kembali di header
            gestureEnabled: false, // Menonaktifkan gestur "go back"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
