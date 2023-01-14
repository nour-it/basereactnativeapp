import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MessageListItem from './MessageListItem'
import NourFlatList from '../../../../components/core/NourFlatList'

const MessageList = (props) => {

    const [state, setState] = useState({
        mounted: false,
    });


    useEffect(() => {
        setState((state) => ({ ...state, mounted: true }))

        
        return () => {
            setState((state) => ({ ...state, mounted: false }))
        }
    }, [])


    if (!state.mounted) return
    

    function scrollViewSizeChanged(flatListRef) {
        if (props.data.length != 0)
            flatListRef.current?.scrollToIndex({ animated: true, index: props.data.length - 1 });
    }


    return (
        <NourFlatList
            style={styles.container}
            data={props.data}
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
        marginBottom: 60
    }
})