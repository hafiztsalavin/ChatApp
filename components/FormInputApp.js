import { TextInput } from 'react-native-paper'
import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated'

const {width, height} = Dimensions.get('screen')
export default function FormInput ({labelName, ...rest}) {
    
        return (
            <TextInput
                style = {styles.input}
                mode='outlined'
                label = {labelName}
                style= {styles.input} 
                numberOfLines = {1}
                {...rest}
            />
        )
    }

const styles = StyleSheet.create({
    input:{
        marginTop: 10,
        marginBottom: 10,
        width : '100%',
        height: height / 15,
        color:'#2e64e5'
    }
})