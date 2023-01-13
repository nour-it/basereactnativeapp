import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from 'lottie-react-native';
import lottie from '../../src/var/lottie';
import { useRef } from 'react';

export default function NourLoading() {

    const animation = useRef(null);

    const [state, setState] = useState({ mounted: false })
    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))
        return () => {
            setState((state) => ({ ...state, mounted: false }))
        }
    }, [])

    if (!state.mounted) return

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: "center", alignItems: "center" }}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#FFF',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={lottie.loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({})