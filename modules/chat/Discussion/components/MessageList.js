import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MessageListItem from './MessageListItem'
import NourFlatList from '../../../../components/core/NourFlatList'
import { useSelector } from 'react-redux'

const MessageList = (props) => {
    
    const store = useSelector((state) => state.chatStore);
    const [state, setState] = useState({
        mounted: false,
        data: []
    });

    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))
        let timer = setTimeout(() => {
            setState((state) => ({ ...state, data: JSON.parse(store.chats) }))
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
    },
    footer: {
        marginBottom: 80
    }
})