import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CreateBook({navigation}){
    return (
      <View style={styles.container}>
        <Text>Create Book</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('LookingWasher')}>
            <Text style={styles.btnText}>Book</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 10
    },
    btnText : {
        color: 'white'
    }
});