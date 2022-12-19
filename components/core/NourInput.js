import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function NourInput() {
  return (
    <View style={styles.container}>
      <TextInput multiline={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        marginHorizontal: 20,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        maxHeight: 100,
    }
})