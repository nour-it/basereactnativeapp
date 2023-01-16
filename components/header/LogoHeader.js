import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import image from '../../src/var/image'
import font from '../../src/var/font'
import color from '../../src/var/color'

const LogoHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Base App</Text>
      <Image source={image.logo['72x72']} style={styles.logo} />
    </View>
  )
}

export default LogoHeader

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomColor: color.black + "10",
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: font.n_b,
    fontSize: 24,
    color: color.black + "99"
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  }
})