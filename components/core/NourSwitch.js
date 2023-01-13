import { StyleSheet, Text, View, Switch, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { Pressable } from 'react-native'
import color from '../../src/var/color';


export default function NourSwitch() {

    const [on, setOn] = useState(true)

    const switchAnim = useRef(new Animated.Value(0)).current;
    const switchBgAnim = useRef(new Animated.Value(0)).current;


    const pressSwitch = () => {
        const fbAnim = Animated.timing(switchAnim, {
            toValue: on ? 60 - 30 : 0,
            duration: 500,
            useNativeDriver: true,
        })
        const bgAnim = Animated.timing(switchBgAnim, {
            toValue: on ? 1 : 0,
            duration: 500,
            // useNativeDriver: true,
        })
        
        Animated.parallel([fbAnim, bgAnim], {stopTogether: true}).start();
        setOn(!on)
    }

    return (
        <View>
            <Text>NourSwitch</Text>
            <Pressable onPress={() => pressSwitch()}>
                <Animated.View style={[styles.switch, {backgroundColor: switchBgAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['#CCC', '#0F0']
                })}]}>
                    <Animated.View style={[styles.boul, { transform: [{ translateX: switchAnim }] }]} />
                </Animated.View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    switch: {
        height: 20,
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
        height: 15,
        backgroundColor: "blue",
        width: 15,
        borderRadius: 13,
        marginHorizontal: 2,
        position: "relative",
    }
})