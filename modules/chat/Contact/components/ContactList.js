import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ContactListItem from './ContactListItem'

export default function ContactList({data}) {
  return (
    
    <FlatList
        data={data}
        renderItem={ContactListItem}
    />
  )
}
