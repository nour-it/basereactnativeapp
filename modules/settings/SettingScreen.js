import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NourScreenView from '../../components/core/NourScreenView'
import { ImageBackground } from 'react-native'
import image from '../../src/var/image'
import dimension from '../../src/var/dimension'
import font from '../../src/var/font'
import NourSwitch from '../../components/core/NourSwitch'

const SettingScreen = (props) => {

  console.log(dimension.window);

  return (
    <NourScreenView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={image.card_row_bg2['340x214']} style={styles.card}/>
        <Text style={styles.cardText}>Notifications</Text>
        <NourSwitch style={styles.switch}/>
      </View>
      <View style={styles.cardContainer}>
        <Image source={image.card_row_bg2['340x214']} style={styles.card}/>
        <Text style={styles.cardText}>Dark Mode</Text>
        <NourSwitch style={styles.switch}/>
      </View>
    </NourScreenView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: 20,
  },
  cardContainer: {
    position: "relative",
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  card: {
    width: dimension.window.width,
    // height: 70,
    resizeMode: "contain",
    // resizeMode: "stretch",
  },
  cardText: {
    position: "absolute",
    left: 20,
    fontSize: 18,
    fontFamily: font.n_b
  },
  switch: {
    position: 'absolute',
    right: 20,
  }
})