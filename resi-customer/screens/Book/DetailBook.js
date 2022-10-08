import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DetailBook({navigation}){
    return (
      <View style={styles.container}>
        <Text>Detail Book</Text>
        <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.btnText}>Cancel</Text>
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