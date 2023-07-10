
// import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, } from "react";
import { BackHandler, StatusBar, Keyboard, Text, View} from "react-native";
import { Provider } from "react-redux";
import stores from "./src/stores";

import * as ScreenOrientation from "expo-screen-orientation"
import color from "./src/var/color";
import NourLoading from "./components/core/NourLoading";
import NourDrawerNavigation from "./components/Navigation/NourDrawerNavigation";

import NourExitAppDialog from './components/core/NourExitAppDialog';
import useNotification, { initNotificationsConfig } from './hooks/useNotification';
import useFont from './hooks/useFont';
import useTask from './hooks/useTask';

initNotificationsConfig()

/**
 * Load font, app store and Navigation system
 * @returns JSX.Element | null
 */
export default function App() {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  const { fontsLoaded } = useFont();

  const [state, setState] = useState({ mounted: false, exitAppModal: false })

  const { addNotificationListener, removeNotificationListener } = useNotification();

  const {locationTask, registerBackgroundFetchAsync, registerNotificationTask} = useTask();

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", function (e) { Keyboard.dismiss() });
    setState((state) => ({ ...state, mounted: true }))
    BackHandler.addEventListener("hardwareBackPress", toggleExitAppModal)
    addNotificationListener()
    locationTask();
    registerBackgroundFetchAsync();
    registerNotificationTask();
   
    return () => {
      setState((state) => ({ ...state, mounted: false }))
      BackHandler.removeEventListener('hardwareBackPress', toggleExitAppModal)
      removeNotificationListener()
    }
  }, [])


  if (!fontsLoaded || !state.mounted)
    return <NourLoading />;


  function toggleExitAppModal() {
    setState((state) => ({ ...state, exitAppModal: !state.exitAppModal }))
    return true;
  }

  return (
    <Provider store={stores} >
      <StatusBar 
      backgroundColor={color.secondary} 
      />
      <NavigationContainer >
        <NourDrawerNavigation />
      </NavigationContainer>
      {state.exitAppModal && <NourExitAppDialog onClose={toggleExitAppModal} />}
    </Provider>
  );
} 