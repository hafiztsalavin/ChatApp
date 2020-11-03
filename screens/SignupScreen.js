import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { AuthContext } from '../navigation/AuthProvider'

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const {register} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Buat Akun</Text>
            <FormInput 
                labelValue = {email}
                onChangeText = {(userEmail) =>setEmail(userEmail)}
                placeholderText = 'Email'
                iconType = 'user'
                keyboardType = 'email-address' // untuk menjadikan tipe keyboard email
                autoCapitalize = 'none' // autokapil mati dan auto corect mati juga
                autoCorrect = {false}
            />        

            <FormInput 
                labelValue = {password}
                onChangeText = {(userPassword) =>setPassword(userPassword)}
                placeholderText = 'Password'
                iconType = 'lock'
                secureTextEntry = {true}
            /> 

            <FormInput 
                labelValue = {confirmPassword}
                onChangeText = {(userPassword) =>setPassword(userPassword)}
                placeholderText = 'Confirm Password'
                iconType = 'lock'
                secureTextEntry = {true}
            />   

            <FormButton 
                buttonTitle="Sign Up"
                onPress = {() => register(email, password)}
            />

            <View style = {styles.textPrivate}>
                <Text style={styles.color_textPrivate}>Dengan anda register, anda setuju </Text>
                <TouchableOpacity onPress={() => alert('Ketentuannya anda MANTAP')}>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Ketentuan</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Syarat</Text>
                <Text style={styles.color_textPrivate}>yang berlaku </Text>
            </View>

            {/* <SocialButton 
                buttonTitle = 'Masuk Lewat Facebook'
                bntType = 'facebook'
                color = '#4867aa'
                backgroundColor = '#e6eaf4'
            />

            <SocialButton 
                buttonTitle = 'Masuk Lewat Google'
                bntType = 'google'
                color = '#de4d41'
                backgroundColor = '#f5e7ea'
            /> */}

            <TouchableOpacity style= {styles.forgotButton} onPress= {() => navigation.navigate ('Login') }>
                <Text style = {styles.navButtonText}>Sudah punya akun? Sini</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        color: '#051d5f',
        marginTop: 35
      },
      navButton: {
        marginTop: 35,
      },
      navButtonText: {
        marginTop: 40,
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate : {
          fontSize : 13, 
          fontWeight : '400',
          fontFamily: 'Lato-Regular',
          color: 'grey'
      }
})
