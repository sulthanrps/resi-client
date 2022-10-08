import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Register({navigation}){
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Register</Text>
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