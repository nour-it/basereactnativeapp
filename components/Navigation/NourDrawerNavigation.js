
import React from "react";

import screen from "../../src/var/drawerScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();


/**
 * load app screens
 * 
 * @params any props
 * @returns JSX.Element
 */
const NourDrawerNavigation = (props) => {

  let drawers = Object.keys(screen.drawer);

  const DefaultStack = () => <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>No Screen</Text></View>

  return (
    <Drawer.Navigator
      backBehavior="none"
      tabBar={(props) => null}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      {drawers.length > 0 ? drawers.map(
        (key, index) => <Drawer.Screen
          name={screen.drawer[key].name}
          component={screen.drawer[key].component}
          key={index.toString()}
          options={screen.drawer[key].option}
        />) : <Drawer.Screen
        name={"no screen"}
        component={DefaultStack}
        options={({ route }) => ({})} />}
    </Drawer.Navigator>
  );
};

export default NourDrawerNavigation;
