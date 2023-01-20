import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import font from '../../src/var/font'
import color from '../../src/var/color'
import icon from '../../src/var/icon'
import NourTouchable from '../core/NourTouchable'

const DiscussionHeader = (props) => {
  return (
    <View style={styles.container}>
      <NourTouchable outerStyle={styles.outerStyle} innerStyle={styles.innerStyle} onPress={props.navigation.goBack}>
        <Image source={icon.back['48x48']} style={styles.logo} />
      </NourTouchable>
    </View>
  )
}

export default DiscussionHeader
  
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
    width: 24,
    height: 24,
    resizeMode: "contain",
    transform: [{ rotate: `180deg` }],
    tintColor: color.primary,
  },
  innerStyle: {
		width: 30,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	outerStyle: {
		overflow: "hidden",
		position: "absolute",
		borderRadius: 20,
    marginLeft: 10
	},
})