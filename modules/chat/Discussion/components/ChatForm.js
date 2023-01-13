import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import dimension from '../../../../src/var/dimension'
import { Image } from 'react-native'
import icon from '../../../../src/var/icon'
import NourInput from '../../../../components/core/NourInput'
import color from '../../../../src/var/color'
import font from '../../../../src/var/font'
import NourTouchable from '../../../../components/core/NourTouchable'

const ChatForm = ({onMessageSend}) => {

    const [state, setState] = useState({
        mounted: false,
        message: null,
    });



    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }));
        return () => {
            setState((state) => ({ ...state, mounted: false }));
        };
    }, []);

    if (!state.mounted) return;

    const updateMessage = (label, value) => setState((state) => ({ ...state, [label]: value }));

    const sendMessage = () => {
        const message = state.message;
        setState((state) => ({ ...state, message: null }));
        onMessageSend(message)
    }

    return (
        <View style={styles.container}>
            <NourTouchable>
                <Image source={icon.explorer['162x213']} style={{ width: 32, height: 32, resizeMode: "stretch", }} />
            </NourTouchable>
            <NourInput fieldStyle={styles.field} inputStyle={styles.input} placeholder={"Tape your message."} updateValue={updateMessage} label={"message"} multiline={true} value={state.message} />
            <NourTouchable outerStyle={{ borderRadius: 15, overflow: "hidden" }} onPress={sendMessage}>
                <Image source={icon.send['96x96']} style={{ width: 32, height: 32, resizeMode: "contain", }} />
            </NourTouchable>
        </View>
    )
}

export default ChatForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        position: 'absolute',
        width: dimension.window.width,
        bottom: 0,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    field: {
        flex: 1,
        backgroundColor: color.black + "22",
        marginHorizontal: 10,
        borderRadius: 20,
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: font.n_sb,
        fontSize: 14,
        minHeight: 15,
        maxHeight: 60,
    }
})