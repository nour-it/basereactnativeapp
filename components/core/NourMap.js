import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Callout, Circle, Heatmap, Marker, Geojson } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

export default function NourMap() {

  const GOOGLE_MAPS_APIKEY = "AIzaSyABYRFWnE_8hGXetTZvxzBvGPSekLWMD5s"

  const coordinate = {
    latitude: 6.1319,
    longitude: 1.2228,
    latitudeDelta: 0.19,
    longitudeDelta: 0.14,
  };

  const pined1 = {
    ...coordinate,
  }

  const pined2 = {
    ...coordinate,
    latitude: 6.2319,
    longitude: 1.3228,
  }

  const myPlace = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [64.165329, 48.844287],
        }
      }
    ]
  };


  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coordinate}>
        <Marker coordinate={pined1}>
          <Callout>
            {/* <View style={{width: 100, height: 100, borderRadius: 50, backgroundColor: "red", justifyContent: "center", alignItems: "center"}}> */}
            <Text>Pined 1</Text>
            {/* </View> */}
          </Callout>
        </Marker>
        <Marker coordinate={pined2}>
        </Marker>
        <Circle center={pined1} radius={1000} fillColor={"#FF000009"} strokeWidth={30}/>
        <Heatmap points={[pined1, pined2]} />
        <Geojson
          geojson={myPlace}
          strokeColor="red"
          fillColor="green"
          strokeWidth={2}
        />
        {/* <MapViewDirections
          origin={pined1}
          destination={pined2}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
  },
});