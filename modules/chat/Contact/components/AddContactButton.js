
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import icon from '../../../../src/var/icon'
import NourTouchable from '../../../../components/core/NourTouchable'
import image from '../../../../src/var/image'


const AddContactButton = ({onPress}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image.bgShadow['81x81']} style={styles.bgStyle}>
                <NourTouchable outerStyle={styles.outerStyle} innerStyle={styles.innerStyle} onPress={onPress}>
                    <Image source={icon.addChat['72x72']} style={{ width: 36, height: 36, resizeMode: "contain" }} />
                </NourTouchable>
            </ImageBackground>
        </View>
    )
}

export default AddContactButton

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    outerStyle: {
        borderRadius: 30,
        overflow: "hidden",
    },
    innerStyle: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    bgStyle : { width: 70, height: 70, resizeMode: "contain", alignItems: "center", justifyContent: "center", }
})