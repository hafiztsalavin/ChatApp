import React from 'react'
import { StyleSheet,  View, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color='#2e64e5' />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer : {
        flex:1,
        alignItems: 'center',
        justifyContent : 'center'
    }
})
