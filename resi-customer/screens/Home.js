import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({navigation}){
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.btnText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('CreateBook')}>
            <Text style={styles.btnText}>Create Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('DetailBook')}>
            <Text style={styles.btnText}>Detail Book</Text>
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