import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

export default function NourDialog() {

    const bodyAnim = useRef(new Animated.Value(100)).current;

    useEffect(() => {
      
        Animated.loop(
            Animated.timing(bodyAnim, {duration: 500, toValue: 0, useNativeDriver: true}), 
            { iterations: 1}    
        ).start()
    
      return () => {
         
      }
    }, [])



  return (
    <View style={styles.container}>
        <Animated.View style={[styles.body, {transform: [{translateY: bodyAnim}]}]}>
            <Text>Contenu de la boite de dialog.</Text>
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000066"
    },
    body: {
        width: "80%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
    }
})