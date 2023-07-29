import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import icon from '../../src/var/icon'
import NourTouchable from '../core/NourTouchable'
import { useDispatch } from 'react-redux'
import { getCurrentTheme, toggleTabBar } from '../../src/stores/configStore'
import styles from './styles'

const DiscussionHeader = (props) => {
  const dispatch = useDispatch();

  function backPress() {
    if (props.navigation?.canGoBack()) {
      dispatch(toggleTabBar())
      props.navigation.goBack()
      return true;
    }
    return false;
  }

  const style = styles[getCurrentTheme()];

  return (
    <View style={style.container}>
      <NourTouchable outerStyle={style.outerStyle} innerStyle={style.innerStyle} onPress={backPress}>
        <Image source={icon.back['48x48']} style={style.logo} />
      </NourTouchable>
    </View>
  )
}

export default DiscussionHeader
