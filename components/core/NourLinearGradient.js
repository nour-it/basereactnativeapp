import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import color from '../../src/var/color'

export default function NourLinearGradient({ children, start = { x: .5, y: 0 }, end = { x: .5, y: 1 }, colors = [color.primary, color.secondary] }) {
    return (
        <LinearGradient
            start={start}
            end={end}
            // locations={[.5, .5]}
            colors={colors}
            style={styles.container}>
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})