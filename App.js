
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Provider } from "react-redux";
import NourStackNavigation from "./components/Navigation/NourStackNavigation";
import stores from "./src/stores";

import * as ScreenOrientation from "expo-screen-orientation"
import color from "./src/var/color";

/**
 * Load font, app store and Navigation system
 * @returns JSX.Element | null
 */
export default function App() {

  const [fontsLoaded] = useFonts({
    "n_b": require("./assets/fonts/n_b.ttf"),
    "n_sb": require("./assets/fonts/n_sb.ttf"),
    "n_r": require("./assets/fonts/n_r.ttf"),
  });

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  if (!fontsLoaded) return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}><ActivityIndicator size={"large"} color={color.primary}/></View>;


  return (
    <Provider store={stores}>
      <NavigationContainer>
        <NourStackNavigation/>
      </NavigationContainer>
    </Provider>
  );
} 