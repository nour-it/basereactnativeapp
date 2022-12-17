import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NourScrollView = (props) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} {...props}>
        {props.children}
      </ScrollView>
    )
}

export default NourScrollView