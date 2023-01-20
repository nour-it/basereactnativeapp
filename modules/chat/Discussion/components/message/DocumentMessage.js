import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../../../../src/var/color'
import font from '../../../../../src/var/font'
import image from '../../../../../src/var/image'

const DocumentMessage = ({message}) => {
  return (
    <View style={[styles.row]}>
      <View style={[styles.content]}>
        <Image source={image.document['180x180']} style={styles.image}/>
        <Text style={[styles.date]}>12:20</Text>
      </View>
      <View style={[styles.border]} />
    </View>
  )
}

export default DocumentMessage

const styles = StyleSheet.create({
  row: {
    marginVertical: 5,
    marginRight: 10,
    marginLeft: 80,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  content: {
    position: "relative",
    paddingVertical: 6,
    paddingHorizontal: 6,
    paddingBottom: 20,
    backgroundColor: color.primary,
    borderRadius: 12,
    borderTopRightRadius: 0,
    minWidth: 70
  },
  border: {
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: color.primary,
    borderTopColor: color.primary,
    width: 10,
    height: 10,
    borderTopRightRadius: 0,
  },
  image: {
    width: 200, 
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
    backgroundColor: color.white + "EE"
  },
  date: {
    fontFamily: font.n_r,
    fontSize: 12,
    color: color.white + '90',
    marginTop: 10,
    textAlign: "right",
    position: "absolute",
    bottom: 5,
    right: 5,
  }
})