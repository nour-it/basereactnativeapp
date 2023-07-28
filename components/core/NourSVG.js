import { View, } from 'react-native'
import React from 'react'
import Svg, { Circle, Path, Text } from 'react-native-svg'

export default function NourSVG() {

  function myFunc(start, origin, end) {

  }

  return (
    <View>
      <Svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" fill="#FFCC66" stroke="#000" stroke-width="2" />

        <Circle cx="35" cy="40" r="5" fill="#000" />
        <Circle cx="65" cy="40" r="5" fill="#000" />

        <Path d="M35 60 Q50 80, 65 60" fill="none" stroke="#000" stroke-width="3" />
      </Svg>

      <Svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" style={{backgroundColor: "#00000009"}}>
        <Path  fill="none" stroke="blue" stroke-width="0"  d="M 0 0 L 10 10 L 20 0"/>
        <Text x={10} y={100} >sdfsdfs</Text>
      </Svg>
    </View>
  )
}