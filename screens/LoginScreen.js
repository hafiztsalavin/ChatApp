import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { AuthContext } from '../navigation/AuthProvider'
import { windowHeight, windowWidth } from '../utils/Dimentions'


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const {login} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Image source= {require( '../assets/vector-chat-icon.jpg')} style={styles.logo} />
            <Text style={styles.text}>Chatting Yuk!</Text>
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

            <FormButton 
                
                buttonTitle="Sign In" 
                onPress = {() => login(email, password)}
            />

            <TouchableOpacity style= {styles.forgotButton} onPress= {() =>{} }>
                <Text style = {styles.navButtonText}>Lupa Password?</Text>
            </TouchableOpacity>

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

            <TouchableOpacity style= {styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style = {styles.navButtonText}>Mau buat Akun? Klik dong</Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      logo: {
        height: 125,
        width: 125,
        resizeMode: 'cover',
        marginTop:30
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      }
})
