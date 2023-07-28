import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import NourScreenView from '../../components/core/NourScreenView'
import { ImageBackground } from 'react-native'
import image from '../../src/var/image'
import dimension from '../../src/var/dimension'
import font from '../../src/var/font'
import NourSwitch from '../../components/core/NourSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { DARK, LIGHT, getCurrentTheme, setTheme } from '../../src/stores/configStore'

const SettingScreen = (props) => {

  const dispatch = useDispatch();
  const currentTheme = getCurrentTheme();
  function onChangeTheme() {
    dispatch(setTheme(currentTheme == "light" ? "dark" : "light"))
  }

  const style = theme[currentTheme].styles

  return (
    <NourScreenView style={style.container}>
      <View style={style.cardContainer}>
        {/* <Image source={image.card_row_bg2['340x214']} style={style.card} /> */}
        <Text style={style.cardText}>Notifications</Text>
        <NourSwitch style={style.switch} />
      </View>
      <View style={style.cardContainer}>
        {/* <Image source={image.card_row_bg2['340x214']} style={style.card} /> */}
        <Text style={style.cardText}>Dark Mode</Text>
        <NourSwitch style={style.switch} onPress={onChangeTheme} on={currentTheme == DARK}/>
      </View>
    </NourScreenView>
  )
}

export default SettingScreen

const theme = {
  [`${LIGHT}`]: {
    styles: StyleSheet.create({
      container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        paddingTop: 20,
      },
      cardContainer: {
        // position: "relative",
        // alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      },
      card: {
        width: '100%',
        // width: dimension.window.width,
        // height: 70,
        resizeMode: "contain",
        // resizeMode: "stretch",
      },
      cardText: {
        // position: "absolute",
        left: 20,
        fontSize: 18,
        fontFamily: font.n_b,
        color: "#FF0000"
      },
      switch: {
        position: 'absolute',
        right: 20,
      }
    })
  },
  'dark': {
    styles: StyleSheet.create({
      container: {
        backgroundColor: "#000000",
        flex: 1,
        paddingTop: 20,
      },
      cardContainer: {
        position: "relative",
        // alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      },
      card: {
        width: '100%',
        // width: dimension.window.width,
        // height: 70,
        resizeMode: "contain",
        // resizeMode: "stretch",
      },
      cardText: {
        // position: "absolute",
        left: 20,
        fontSize: 18,
        fontFamily: font.n_b,
        color: "#FFFFFF"
      },
      switch: {
        position: 'absolute',
        right: 20,
      }
    })
  }
}

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
    width: '100%',
    // width: dimension.window.width,
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