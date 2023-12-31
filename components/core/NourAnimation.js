import React from 'react'
import { Animated, View } from 'react-native'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Easing } from 'react-native'

const animationType = {
    "slide_up": {
        initValue: 100,
        timing: (ref) => Animated.timing(ref, {
            duration: 200,
            toValue: 0,
            useNativeDriver: true,
            // delay: 50,
            easing: Easing.bezier(0.37, 0, 0.63, 1)
        }),
        animObjet: (ref) => ({ transform: [{ translateY: ref }] })
    }
}

/**
 * @typedef {"slide_up" | "slide_down"} AnimationType
 * @param {Object} props 
 * @param {AnimationType} props.type
 * @param {Object} props.style
 * @returns {JSX.Element}
 */
const NourAnimation = (props) => {

    const {type, style, children} = props

    if (!animationType[type]) throw new Error("Animation " + type + " does not exist");
    
    const [state, setState] = useState({ mounted: false })

    const formAnimationRef = useRef(new Animated.Value(animationType[type].initValue)).current
    const formAnimation = animationType[type].timing(formAnimationRef);

    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))
        formAnimation.start();
        return () => {
            setState((state) => ({ ...state, mounted: false }))
        }
    }, [])

    if (!state.mounted) return

    const animStyle = animationType[type].animObjet(formAnimationRef)

    return (
        <Animated.View style={[style, animStyle]} >
            {children}
        </Animated.View>
    )
}

export default NourAnimation
