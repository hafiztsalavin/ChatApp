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
        style={{bottomBarColor : '#fff'}}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace ('Login')} // jika skip replace dengan login dan tidak bisa kembali lagi
        onDone={() => navigation.navigate ('Login')} //jika selesai ke komponen login
            pages={[
                {
                    
                backgroundColor: '#fff',
                image: <Image source={require('../assets/pake-1.png')} style= {{width:250, height:300}} />,
                title: 'Chatting',
                subtitle: 'Bebas namun sopan dalam mengirim pesan.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/pake-2.jpg')} style= {{width:250, height:300}} />,
                    title: 'Bebas',
                    subtitle: 'Bersama pacar ataupun selingkuhan :)',
                    },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/pake-3.jpg')} style= {{width:250, height:300}} />,
                    title: 'Yeayy!!!',
                    subtitle: 'Nikmati hanya di Ssstt! Chatting yuk :)',
                    },
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
