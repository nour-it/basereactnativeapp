
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { BackHandler, View } from "react-native";
import { Provider } from "react-redux";
import stores from "./src/stores";

import * as ScreenOrientation from "expo-screen-orientation"
import color from "./src/var/color";
import NourLoading from "./components/core/NourLoading";
import NourDrawerNavigation from "./components/Navigation/NourDrawerNavigation";
import { useState } from 'react';
import { useEffect } from 'react';
import { Keyboard } from 'react-native';
import { StatusBar } from 'react-native';
import NourExitAppDialog from './components/core/NourExitAppDialog';
import useNotification, { initNotificationsConfig } from './hooks/useNotification';

initNotificationsConfig()

/**
 * Load font, app store and Navigation system
 * @returns JSX.Element | null
 */
export default function App() {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  const [fontsLoaded] = useFonts({
    "n_b": require("./assets/fonts/n_b.ttf"),
    "n_sb": require("./assets/fonts/n_sb.ttf"),
    "n_r": require("./assets/fonts/n_r.ttf"),
  });

  const [state, setState] = useState({ mounted: false, exitAppModal: false })

  const {addNotificationListener, removeNotificationListener} = useNotification();

  function toggleExitAppModal() {
    setState((state) => ({ ...state, exitAppModal: !state.exitAppModal }))
    return true;
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", function (e) { Keyboard.dismiss() });
    setState((state) => ({ ...state, mounted: true }))
    BackHandler.addEventListener("hardwareBackPress", toggleExitAppModal)
    addNotificationListener()
    return () => {
      setState((state) => ({ ...state, mounted: false }))
      BackHandler.removeEventListener('hardwareBackPress', toggleExitAppModal)
      removeNotificationListener()
    }
  }, [])


  if (!fontsLoaded || !state.mounted)
    return <NourLoading />;

  return (
    <Provider store={stores} >
      <StatusBar backgroundColor={color.secondary} />
      <NavigationContainer >
        <NourDrawerNavigation />
      </NavigationContainer>
      {state.exitAppModal && <NourExitAppDialog onClose={toggleExitAppModal} />}
    </Provider>
  );
} 