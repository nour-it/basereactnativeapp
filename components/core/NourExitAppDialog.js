import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import icon from '../../src/var/icon'
import color from '../../src/var/color'
import dimension from '../../src/var/dimension'
import image from '../../src/var/image'

const NourExitAppDialog = () => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image source={image.warning['170x182']} style={styles.image} />
                <Text>Are you sure, do you want to exit ?</Text>
            </View>
        </View>
    )
}

export default NourExitAppDialog

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#00000099",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    body: {
        backgroundColor: color.white,
        width: dimension.window.width - 40,
        // paddingVertical: 10,
        borderRadius: 40,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        // flexWrap: "wrap",
        // aspectRatio: 1,
        overflow: 'hidden'
    },
    image: { width: 96, height: 96, resizeMode: "contain",  margin: 15}
})