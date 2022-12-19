import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function NourLinearGradient({ children }) {
    return (
        <View>
            <LinearGradient
                colors={['#F00', '#00F']}
                style={styles.container}>
                {children}
            </LinearGradient>

            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                // locations={[.5, .5]}
                colors={['#0000FF33', '#00F']}
                style={styles.container}>
                {children}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        marginVertical: 5,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})