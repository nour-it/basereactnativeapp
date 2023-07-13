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

    const [on, setOn] = useState(true)

    const switchAnim = useRef(new Animated.Value(0)).current;
    const switchBgAnim = useRef(new Animated.Value(0)).current;

    const pressSwitch = () => {
        const fbAnim = Animated.timing(switchAnim, {
            toValue: on ? 20 : 0,
            duration: 200,
            useNativeDriver: true,
        })
        const bgAnim = Animated.timing(switchBgAnim, {
            toValue: on ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        })

        Animated.parallel([fbAnim, bgAnim], { stopTogether: true }).start();
        setOn(!on)
        onPress && onPress()
    }

    return (
        <View {...props}>
            <Pressable onPress={() => pressSwitch()}>
                <Animated.View style={[styles.switch, {
                    backgroundColor: switchBgAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['#CCC', color.secondary]
                    })
                }]}>
                    <Animated.View style={[styles.boul, { transform: [{ translateX: switchAnim }] }]} />
                </Animated.View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    switch: {
        height: 30,
        backgroundColor: "gray",
        width: 50,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        position: "relative",
        borderWidth: 1,
        borderColor: color.primary + "33",
    },
    boul: {
        height: 25,
        backgroundColor: color.primary,
        width: 25,
        borderRadius: 13,
        marginHorizontal: 2,
        position: "relative",
    }
})