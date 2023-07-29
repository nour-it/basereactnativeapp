import { View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function NourInput({ fieldStyle, inputStyle, placeholder, keyboardType, updateValue, label, multiline = false, numberOfLines = 1, value }) {

  const [state, setState] = useState({ mounted: false, contactForm: false, value: null })
  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return

  function submiteNumber({ nativeEvent }) { updateValue(label, nativeEvent.text)  }

  function changeNumber(value) { updateValue(label, value) }

  console.log(fieldStyle)
  console.log(inputStyle)

  return (
    <View style={fieldStyle}>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        keyboardType={keyboardType}
        onSubmitEditing={submiteNumber}
        // onBlur={submiteNumber}
        onChangeText={changeNumber}
        multiline={multiline}
        // numberOfLines={numberOfLines}
        value={value}
      />
    </View>
  )
}
