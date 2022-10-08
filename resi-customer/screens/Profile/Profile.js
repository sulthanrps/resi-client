import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Profile({navigation}){
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('TopUp')}>
            <Text style={styles.btnText}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.btnText}>Edit Profile</Text>
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