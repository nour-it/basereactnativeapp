
import React from "react";

import screen from "../../src/var/screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import color from "../../src/var/color";

const Stack = createNativeStackNavigator();


/**
 * load app screens
 * 
 * @params any props
 * @returns JSX.Element
 */
const NourStackNavigation = (props) => {

  let screens = Object.keys(screen.ChatStackScreen);

  const DefaultStack = () => <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}><Text>No Screen</Text></View>

  return (
    <Stack.Navigator
      tabBar={(props) => null}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => null,
        tabBarLabel: () => null,
        headerShown: false,
        statusBarColor: color.primary

      })}
    >
      {screens.length > 0 ? screens.map(
        (key, index) => <Stack.Screen
          name={screen.ChatStackScreen[key].name}
          component={screen.ChatStackScreen[key].component}
          key={index.toString()}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              null
            ),
          })}
        />) : <Stack.Screen
        name={"no screen"}
        component={DefaultStack}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            null
          ),
        })}/>}
    </Stack.Navigator>
  );
};

export default NourStackNavigation;
