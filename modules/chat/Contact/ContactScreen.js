import { Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import contactstyle from './contactstyle'
import NourTouchable from '../../../components/core/NourTouchable'

export default function ContactScreen(props) {

  const store = useSelector((state) => state.chatStore);
  const dispatch = useDispatch();

  // console.log(store)


  const animation = useRef(null);

  useEffect(() => {


    return () => {

    }
  }, [])



  return (
    <View style={contactstyle.container}>
      <NourTouchable onPress={() => {}}>
        <Text>Appuyer</Text>
      </NourTouchable>
    </View>
  )
}

