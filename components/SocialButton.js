import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialButton = ({buttonTitle, bntType, color, backgroundColor, ... rest}) => {
    let bgColor = backgroundColor
    return (
        <TouchableOpacity style= {[styles.buttonContainer, {backgroundColor:bgColor}]} { ... rest} >
            <View style= {styles.iconWrapper}>
                <FontAwesome name={bntType} style={styles.icon} size = {22} color={color} />
            </View>
            <View style= {styles.bntTxtWrapper} >
                <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    buttonContainer :{
        marginTop : 10,
        width : '100%',
        height : windowHeight / 15,
        padding : 10,
        flexDirection: 'row',
        borderRadius: 3
    },
    iconWrapper: {
        width: 30, 
        justifyContent: 'center' ,
        alignItems: 'center'
    },
    icon:{
      fontWeight: 'bold'  
    },
    bntTxtWrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize:18,
        fontWeight: 'bold',
        fontFamily: "Lato-Regular"
    }
})
