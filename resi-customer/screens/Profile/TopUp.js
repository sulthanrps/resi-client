import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TopUp({navigation}){
    return (
      <View style={styles.container}>
        <Text>Top Up Repay</Text>
        <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.btnText}>Top Up</Text>
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
        padding: 10,
        marginBottom: 10
    },
    btnText : {
        color: 'white'
    }
});