import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

const NourFlatList = ({ data, listItem }) => {

    const [state, setState] = useState({ mounted: false})
    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))
        return () => {
            setState((state) => ({ ...state, mounted: false }))
        }
    }, [])

    if (!state.mounted) return

    return (
        <FlatList
            data={data}
            renderItem={listItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            overScrollMode={"never"}
        />
    )
}

export default NourFlatList

const styles = StyleSheet.create({})