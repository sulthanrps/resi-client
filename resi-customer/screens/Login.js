import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Login({navigation}){
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Login</Text>
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