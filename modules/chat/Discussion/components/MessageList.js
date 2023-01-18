import { Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MessageListItem from './MessageListItem'
import NourFlatList from '../../../../components/core/NourFlatList'
import { useSelector } from 'react-redux'
import color from '../../../../src/var/color'
import { View } from 'react-native'
import useFileStorage from '../../../../hooks/useFileStorage'

const MessageList = (props) => {

    const store = useSelector((state) => state.chatStore);
    const [state, setState] = useState({
        mounted: false,
        data: []
    });

    const {getFiles} = useFileStorage();

    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))
        getFiles("", "document").then(files => files);
        let timer = setTimeout(() => {
            setState((state) => ({ ...state, data: [...JSON.parse(store.chats), {}] }))
            clearTimeout(timer)
        }, 100)
        return () => {
            setState((state) => ({ ...state, mounted: false }))
        }
    }, [store.chats])

    if (!state.mounted || state.data.length == 0) return

    function scrollViewSizeChanged(flatListRef) {
        if (state.data.length != 0)
            flatListRef.current?.scrollToIndex({ animated: true, index: state.data.length - 1 });
    }

    return (

        <NourFlatList
            style={styles.container}
            data={state.data}
            listItem={({ item }) => <MessageListItem item={item} {...{ ...props, data: null }} />}
            footerStyle={styles.footer}
            onContentSizeChange={(ref) => { scrollViewSizeChanged(ref) }}
            listenKeyBoardEvent={true}
        />
    )
}

export default MessageList
const styles = StyleSheet.create({
    container: {
        // paddingBottom: 100,
        // flex: 1,
        // backgroundColor: color.white,
        // bottom: 80
    },
    footer: {
        marginBottom: 80,
    }
})