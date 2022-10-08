import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function WasherTracker({navigation}){
    return (
      <View style={styles.container}>
        <Text>Washer is on the way!</Text>
        <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.btnText}>Scan QR</Text>
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