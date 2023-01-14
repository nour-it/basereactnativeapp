import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useRef } from 'react'

const NourFlatList = ({ data, listItem, style = {}, footerStyle = {}, onContentSizeChange, ref, listenKeyBoardEvent }) => {

    const [state, setState] = useState({ mounted: false}),
     flatListRef = useRef(null),
     scrollList = () => { onContentSizeChange && onContentSizeChange(flatListRef) };

    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))
        if (listenKeyBoardEvent) {
            Keyboard.addListener("keyboardDidShow", scrollList )
        }
        return () => {
            setState((state) => ({ ...state, mounted: false }))
            if (listenKeyBoardEvent) {
                Keyboard.removeAllListeners("keyboardDidShow", scrollList )
            }
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
            style={style}
            ListFooterComponent={View}
            ListFooterComponentStyle={footerStyle}
            onContentSizeChange={(width, height) => { scrollList() } }
            ref={flatListRef}
            initialNumToRender={data.length}
        />
    )
}

export default NourFlatList

const styles = StyleSheet.create({})