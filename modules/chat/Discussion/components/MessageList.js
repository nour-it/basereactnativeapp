import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageListItem from './MessageListItem'
import NourFlatList from '../../../../components/core/NourFlatList'

const MessageList = (props) => {

    const data = props.data

  return (
    <NourFlatList
      data={data}
      renderItem={({item}) => <MessageListItem item={item} {...{...props, data: null}}/>}
    />
  )
}

export default MessageList

const styles = StyleSheet.create({})