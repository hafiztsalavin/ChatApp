import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddRoomScreen from '../screens/AddRoomScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native'
import { IconButton } from 'react-native-paper';

const ChatStack = createStackNavigator()
const HomeStack = createStackNavigator()
const ModalStack = createStackNavigator()

function ChatApp () {
  return (
    <ChatStack.Navigator
      screenOptions={{
      headerStyle: {
      backgroundColor: '#ffffff'
      },
      headerTitleAlign: 'center',
      headerTintColor: '#2e64e5',
      headerTitleStyle: {
      fontSize: 22
      }
    }}
     >
    <ChatStack.Screen 
        name='Tambah Room' 
        component={AddRoomScreen}
        options={({navigation})=> ({
          headerRight: () =>(
            <View>
              <IconButton icon="close-circle" size={36} color="#2e64e5" onPress={() => navigation.goBack()} />
            </View>
            ),
          headerLeft: null
        })} 
    />
    </ChatStack.Navigator>
  );
}

function Home (){
  return(
    <HomeStack.Navigator
      screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff'
      },
      headerTitleAlign: 'center',
      headerTintColor: '#2e64e5',
      headerTitleStyle: {
        fontSize: 22
      }
    }}>

      <HomeStack.Screen 
        name='Home' 
        component={HomeScreen} 
        options={({navigation})=> ({
          headerRight: () =>(
            <View>
              <IconButton icon="message-plus" size={32}  backgroundColor='#ffffff' color='#2e64e5' onPress={() => navigation.navigate('ChatApp')} />
            </View>
            )
        })} 
      />

    </HomeStack.Navigator>
  )
}

export default function AppStack (){
  return (
    <ModalStack.Navigator  mode="modal" headerMode="none" >
      <ModalStack.Screen name="Home" component={Home} />
      <ModalStack.Screen name="ChatApp" component={ChatApp} />
    </ModalStack.Navigator>
  )
}


