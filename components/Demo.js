import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

const Demo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon/btn_bg_blue.png")} style={{width: 350, height: 50, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/btn_bg_green.png")} style={{width: 350, height: 50, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/btn_bg_orange.png")} style={{width: 200, height: 50, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/btn_bg.png")} style={{width: 300, height: 50, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/card_shadow2.png")} style={{width: 300, height: 80, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/card_shadowed.png")} style={{width: 300, height: 80, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/EIe.png")} style={{width: 24, height: 24, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/gtp.png")} style={{width: 150, height: 150, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/ic_download.png")} style={{width: 36, height: 36, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/ic_download.png")} style={{width: 48, height: 48, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/ic_share.png")} style={{width: 48, height: 48, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/iG0.png")} style={{width: 60, height: 60, resizeMode: "contain"}}/>
      <Image source={require("../assets/icon/kjN.png")} style={{width: 60, height: 60, resizeMode: "contain"}}/>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})