import { BackHandler, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import icon from '../../../../src/var/icon'
import color from '../../../../src/var/color'
import dimension from '../../../../src/var/dimension'
import { useEffect } from 'react'
import { useState } from 'react'
import NourTouchable from '../../../../components/core/NourTouchable'
import useImage from '../../../../hooks/useImage'

import * as ImagePicker from 'expo-image-picker';

const MediaModal = ({ onClose, onSendImage }) => {

    const [state, setState] = useState({ mounted: false, mediaModalIsOpen: false, })

    // const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    // console.log(status);

    // if (!status?.granted) requestPermission()

    const {chooseImage} = useImage();

    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))
        BackHandler.addEventListener('hardwareBackPress', onClose)
        return () => {
            setState((state) => ({ ...state, mounted: false }))
            BackHandler.removeEventListener("hardwareBackPress", onClose)
        }
    }, [])

    if (!state.mounted) return

    const onChoosingImage = async () => {
        onClose();
        const uri = await chooseImage();
        onSendImage(uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <NourTouchable onPress={onChoosingImage}>
                    <Image source={icon.image['512x512']} style={styles.icon} />
                </NourTouchable>
                <Image source={icon.video['512x512']} style={styles.icon} />
                <Image source={icon.doc['512x512']} style={styles.icon} />
            </View>
        </View>
    )
}

export default MediaModal

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#00000099",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    body: {
        backgroundColor: color.white,
        width: dimension.window.width - 40,
        // paddingVertical: 10,
        borderRadius: 30,
        position: "absolute",
        bottom: 80,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        // aspectRatio: 1,
        overflow: 'hidden'
    },
    icon: { width: 48, height: 48, resizeMode: "contain", margin: 15 }
})