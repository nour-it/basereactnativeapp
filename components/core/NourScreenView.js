import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const NourScreenView = ({ children, style }) => {

    const [state, setState] = useState({ mounted: false})

    useEffect(() => {
    
        setState((state) => ({ ...state, mounted: true }))
        return () => {
          setState((state) => ({ ...state, mounted: false }))
        }
      }, [])
      if (!state.mounted) return
    

    return (
        <View style={style}>
            {children}
        </View>
    )
}

export default NourScreenView

const styles = StyleSheet.create({})