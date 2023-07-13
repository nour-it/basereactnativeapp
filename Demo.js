import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const Demo = () => {

    // useEffect(() => {
    //     return () => {
    //     }
    // }, [])



    const coordinate = {
        latitude: 6.1319, 
        longitude: 1.2228, 
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={coordinate}>
                {/* <Marker coordinate={coordinate} /> */}
            </MapView>
        </View>
    )
}

export default Demo
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '80%',
    },
});