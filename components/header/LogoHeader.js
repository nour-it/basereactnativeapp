import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import image from '../../src/var/image'
import font from '../../src/var/font'
import color from '../../src/var/color'
import { getCurrentTheme } from '../../src/stores/configStore'
import styles from './styles'

const LogoHeader = (props) => {

  const style = styles[getCurrentTheme()];

  return (
    <View style={style.container}>
      <Text style={style.text}>Nour It</Text>
      <Image source={image.logo['72x72']} style={style.home_logo} />
    </View>
  )
}

export default LogoHeader

