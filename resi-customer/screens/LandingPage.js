import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LandingPage({navigation}){
    return (
      <View style={styles.container}>
        <Text>Landing Page</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>Get Started</Text>
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