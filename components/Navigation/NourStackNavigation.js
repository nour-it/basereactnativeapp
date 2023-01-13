
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

/**
 * load app screens
 * 
 * @params any props
 * @returns JSX.Element
 */
const NourStackNavigation = ({ stacks }) => {

  let screens = Object.keys(stacks);

  const DefaultStack = () => <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>No Screen</Text></View>

  const config = {
    // animation: 'timing',
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,

      // duration: 5000,

    },
  };



  return (
    <Stack.Navigator
      tabBar={(props) => null}
      screenOptions={({ route }) => ({
        headerShown: false,
        statusBarColor: "#FFFFFF00",
      })}
    >
      {screens.length > 0 ? screens.map(
        (key, index) => <Stack.Screen
          name={stacks[key].name}
          component={stacks[key].component}
          key={index.toString()}
          options={({ route }) => ({
            gestureDirection: "vertical",
            transitionSpec: {
              open: config,
              close: config,
            },
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
          })}
        />) : <Stack.Screen
        name={"no screen"}
        component={DefaultStack}
        options={({ route }) => ({})} />}
    </Stack.Navigator>
  );
};

export default NourStackNavigation;
