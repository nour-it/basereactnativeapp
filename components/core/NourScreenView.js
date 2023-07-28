import { BackHandler, StyleSheet, View, ViewProps } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTabBar } from '../../src/stores/configStore';

/**
 * 
 * @param {ViewProps} props 
 * @returns 
 */
const NourScreenView = (props) => {

  const [state, setState] = useState({ mounted: false })

  const dispatch = useDispatch();

  function backPress() {
    if (props.navigation?.canGoBack()) {
      dispatch(toggleTabBar())
      props.navigation.goBack()
      return true;
    }
    return false;
  }

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    BackHandler.addEventListener('hardwareBackPress', backPress);
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])
  
  if (!state.mounted) return

  return (
    <View {...props}>
      {props.children}
    </View>
  )
}

export default NourScreenView

const styles = StyleSheet.create({})