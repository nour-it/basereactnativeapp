import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../../../src/var/color'
import font from '../../../../src/var/font'

const MessageListItem = (props) => {

// console.log(props);
  return (
    <View style={[styles.row]}>
      <View style={[styles.content]}>
        <Text style={[styles.message]}>{props.item}</Text>
        <Text style={[styles.date]}>12:20</Text>
      </View>
      <View style={[styles.border]}/>
    </View>
  )
}

export default React.memo(MessageListItem)

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
        paddingVertical: 4,
        paddingHorizontal: 6,
        paddingBottom: 20,
        backgroundColor: color.primary,
        borderRadius: 10,
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
      message: {
        fontFamily: font.n_r,
        fontSize: 16,
        color: color.white,
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