import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

// Ganti centang dengan done
const Done = ({ ... props}) => (
    <TouchableOpacity style={{marginHorizontal: 16}} { ... props}>
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
)

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace ('Login')} // jika skip replace dengan login dan tidak bisa kembali lagi
        onDone={() => navigation.navigate ('Login')} //jika selesai ke komponen login
            pages={[
                {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-1.png')} style= {{width:250, height:250}} />,
                title: 'Chatting',
                subtitle: 'Bebas Berchatting Ria',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding-2.png')} style= {{width:250, height:250}} />,
                    title: 'Free',
                    subtitle: 'Bersama keluarga, pacar ataupun selingkuhan :)',
                    }
            ]}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
