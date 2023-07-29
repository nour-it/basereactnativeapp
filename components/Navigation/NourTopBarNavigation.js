import { Image, PanResponder, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChatsDrawerStacks } from '../../modules/chat/chatModule';
import SettingScreen from '../../modules/settings/SettingScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import icon from '../../src/var/icon';
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

export default function NourTopBarNavigation() {

  const configStore = useSelector(state => state.configStore)
  let props = {}
  if (!configStore.showTabBar) props = { tabBar: (props) => null}
  return (
    <Tab.Navigator
      tabBarPosition={"bottom"}
      // style={{bottom: 0, height: 200,}}
      screenOptions={{
        swipeEnabled: configStore.showTabBar
      }}
      {...props}
    >
      <Tab.Screen
        name="Chat"
        component={ChatsDrawerStacks}
        options={{
          tabBarIcon: ({ focused, color }) => <Image source={icon.chats["96x96"]} style={[styles.icon]} />,
          tabBarLabel: () => <View style={{ height: 10 }} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Image source={icon.settings["54x54"]} style={[styles.icon]} />,
          tabBarLabel: () => <View style={{ height: 10 }} />,
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: { width: 36, height: 36, resizeMode: "contain", marginBottom: 10 },
});