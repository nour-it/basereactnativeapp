import { StyleSheet, View, ViewProps } from 'react-native'
import React, { useEffect, useState } from 'react'

/**
 * 
 * @param {ViewProps} props 
 * @returns 
 */
const NourScreenView = (props) => {

  const [state, setState] = useState({ mounted: false })

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
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