import { BackHandler, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../src/var/color'
import dimension from '../../src/var/dimension'
import image from '../../src/var/image'
import font from '../../src/var/font'
import NourScreenView from './NourScreenView'
import NourTouchable from './NourTouchable'

const NourExitAppDialog = ({onClose}) => {

  function ExitApp () {
    onClose()
    BackHandler.exitApp();
  }

  return (
    <NourScreenView style={styles.container}>
      <View style={styles.body}>
        <Image source={image.warning['170x182']} style={styles.image} />
        <Text style={styles.text}>Are you sure, do you want to exit ?</Text>
        <View style={styles.btns}>
          <ImageBackground source={image.btn_bg['414x162']} style={styles.btn_bg}>
            <NourTouchable outerStyle={styles.outerStyle} innerStyle={styles.innerStyle} onPress={onClose}>
              <Text style={styles.btText}>No</Text>
            </NourTouchable>
          </ImageBackground>
          <ImageBackground source={image.btn_bg['414x162']} style={[styles.btn_bg]}>
            <NourTouchable outerStyle={styles.outerStyle} innerStyle={styles.innerStyle} onPress={ExitApp}>
              <Text style={styles.btText}>Yes</Text>
            </NourTouchable>
          </ImageBackground>
        </View>
      </View>
    </NourScreenView>
  )
}

export default NourExitAppDialog

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#00000099",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  body: {
    backgroundColor: color.white,
    width: dimension.window.width - 40,
    // paddingVertical: 10,
    borderRadius: 40,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    // flexWrap: "wrap",
    // aspectRatio: 1,
    overflow: 'hidden',
    paddingVertical: 20,
  },
  image: { width: 96, height: 96, resizeMode: "contain", margin: 15 },
  text: { fontSize: 18, fontFamily: font.n_b },
  btns: { flexDirection: "row", marginTop: 40, justifyContent: "space-between", flex: 1 },
  btn_bg: { width: 100, height: 40, resizeMode: "contain", justifyContent: "center", alignItems: "center", },
  btText: { color: color.white, fontFamily: font.n_b, fontSize: 16 },
  innerStyle: {
		width: 95,
		height: 33,
		alignItems: "center",
		justifyContent: "center",
	},
	outerStyle: {
		overflow: "hidden",
		position: "absolute",
		borderRadius: 20,
	},
})