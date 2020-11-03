import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'

import HomeScreen from '../screens/HomeScreen'
import AddRoomScreen from '../screens/AddRoomScreen'
import RoomScreen from '../screens/RoomScreen'
import { AuthContext} from '../navigation/AuthProvider'

const ChatStack = createStackNavigator()
const HomeStack = createStackNavigator()
const ModalStack = createStackNavigator()
const RoomStack = createStackNavigator()

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
  const {user, logout} = useContext (AuthContext)

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
      }}}
    >

      <HomeStack.Screen 
        name='Home' 
        component={HomeScreen} 
        options={({navigation})=> ({
          headerRight: () =>(
            <View>
              <IconButton icon="message-plus" size={32}  backgroundColor='#ffffff' color='#2e64e5' onPress={() => navigation.navigate('ChatApp')} />
            </View>
            ),
            headerLeft: () =>(
              <View>
                <IconButton icon="logout-variant" size={28}  backgroundColor='#ffffff' color='#2e64e5' onPress={() => logout()} />
              </View>
              )
        })} 
      />

      <HomeStack.Screen 
        name = 'Room' 
        component={RoomScreen}
        options={({route})=> ({
          title: route.params.threads.name
        })}   
      />

    </HomeStack.Navigator>
  )
}

// function Room(){
//   return(
//     <RoomStack.Navigator
//       screenOptions={{
//       headerStyle: {
//         backgroundColor: '#ffffff'
//       },
//       headerTitleAlign: 'center',
//       headerTintColor: '#2e64e5',
//       headerTitleStyle: {
//         fontSize: 22
//       }
//     }}
//     >
//       <RoomStack.Screen 
//         name = 'Room' 
//         component={RoomScreen}
//         options={({route})=> ({
//           title: navigation.params.thread.name
//         })}   
//       />
//     </RoomStack.Navigator>
//   )
// }

export default function AppStack (){
  return (
    <ModalStack.Navigator  mode="modal" headerMode="none" >
      <ModalStack.Screen name="Home" component={Home} />
      <ModalStack.Screen name="ChatApp" component={ChatApp} />
      
    </ModalStack.Navigator>
  )
}


