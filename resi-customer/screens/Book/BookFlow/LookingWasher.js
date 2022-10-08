import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LookingWasher({navigation}){
    return (
      <View style={styles.container}>
        <Text>We got ur booking !</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('BookTaken')}>
            <Text style={styles.btnText}>Next Flow - Book Taken</Text>
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