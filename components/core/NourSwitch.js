import { StyleSheet, Text, View, Switch, Animated, ViewProps } from 'react-native'
import React, { useRef, useState } from 'react'
import { Pressable } from 'react-native'
import color from '../../src/var/color';


/**
 * 
 * @param {ViewProps} props 
 * @returns 
 */
export default function NourSwitch(props) {

    const { onPress } = props

    const [on, setOn] = useState(props.on || false)

    const switchAnim = useRef(new Animated.Value(on ? 18 : 0)).current;
    const switchBgAnim = useRef(new Animated.Value(on ? 1 : 0)).current;

    const pressSwitch = () => {
        const fbAnim = Animated.timing(switchAnim, {
            toValue: !on ? 18 : 0,
            duration: 200,
            useNativeDriver: true,
        })
        const bgAnim = Animated.timing(switchBgAnim, {
            toValue: !on ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        })
        setOn(!on)
        Animated.parallel([fbAnim, bgAnim], { stopTogether: true }).start();
        onPress && onPress()
    }

    return (
        <View {...props}>
            <Pressable onPress={() => pressSwitch()}>
                <Animated.View style={[styles.switch, {
                    backgroundColor: switchBgAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [color.white, color.secondary]
                    })
                }]}>
                    <Animated.View style={[styles.boul, { transform: [{ translateX: switchAnim }] }]} />
                </Animated.View>
            </Pressable>
        </View>
    )
}

const styles = {
    switch: {
        height: 22,
        width: 42,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        position: "relative",
        borderWidth: 1,
        borderColor: color.primary + "33",
        padding: 4
    },
    boul: {
        height: 15,
        backgroundColor: color.primary,
        width: 15,
        borderRadius: 15,
        // marginHorizontal: 2,
        position: "relative",
        transform: [{ translateX: 18}],
    }
}