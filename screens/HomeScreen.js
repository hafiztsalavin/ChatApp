import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { List, Divider } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
import Loading from '../components/Loading'
import FormButton from '../components/FormButton'
import { AuthContext} from '../navigation/AuthProvider'

export default function HomeScreen({ navigation }) {
    const {user, logout} = useContext (AuthContext)

    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firestore()
        .collection('THREADS')
        .onSnapshot(querySnapshot => {
            const threads = querySnapshot.docs.map(documentSnapshot => {
            return {
                _id: documentSnapshot.id,
                name: '',
                ...documentSnapshot.data()
            };
            });

            setThreads(threads);

            if (loading) {
            setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <View style={styles.container}>
        <FlatList
            data={threads}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => (
            
                <List.Item
                title={item.name}
                description="Item description"
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={1}
                />
            )}
        />
        <View>
        <FormButton buttonTitle='Keluar!' onPress={() => logout()} />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  listTitle: {
    fontSize: 22
  },
  listDescription: {
    fontSize: 16
  }
});