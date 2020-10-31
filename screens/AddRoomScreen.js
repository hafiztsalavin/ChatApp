import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import {List, Divider} from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
// import FormInputApp from '../components/FormInputApp'


const AddRoomScreen = ({navigation}) => {
    const [roomName, setRoomName] = useState ('')

    function handleButtonPress() {
        if (roomName.length > 0) {
          firestore()
            .collection('THREADS')
            .add({
              name: roomName
              }
            )
            .then(() => {
              navigation.navigate('Home');
            });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Buat Chat Room !</Text>
            <FormInput
                // labelName = 'Buat Room' 
                // value = {roomName}
                // autoCapitalize="none"

                labelValue = {roomName}
                onChangeText = {(userRoomName) =>setRoomName(userRoomName)}
                placeholderText = 'Buat Room'
                iconType = 'user'
                autoCapitalize = 'none' // autokapil mati dan auto corect mati juga
                autoCorrect = {false}
            />
            <FormButton 
                buttonTitle='Buat' 
                onPress={() => handleButtonPress()}/>
        </View>
    )
}
export default AddRoomScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding : 20 
    },
    text : {
        fontFamily: 'Lato-Bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    }
})
