import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import lottie from '../../src/var/lottie';
import { useRef } from 'react';

export default function NourLoading() {

    const animation = useRef(null);
    return (
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
    )
}

const styles = StyleSheet.create({})