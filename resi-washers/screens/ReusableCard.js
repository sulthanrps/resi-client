import { Text, View, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export function ReusableCard() {
  return (
    <>
      <View style={styles.divBookTaken}>
        <View style={styles.ColumnBookTakenLeft}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            BMX Bike
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 14,
              color: "#9F9F9F",
            }}
          >
            Asep Gigi
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 14,
              color: "#9F9F9F",
            }}
          >
            Jalan. SIsingamangaraja
          </Text>
        </View>

        <View style={styles.ColumnBookTakenRight}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 24,
              marginLeft: 10,
              color: "#55BC05",
            }}
          >
            Done
          </Text>
        </View>
      </View>
      <View style={styles.divBookTaken}>
        <View style={styles.ColumnBookTakenLeft}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            BMX Bike
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 14,
              color: "#9F9F9F",
            }}
          >
            Asep Gigi
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 14,
              color: "#9F9F9F",
            }}
          >
            Jalan. SIsingamangaraja
          </Text>
        </View>

        <View style={styles.ColumnBookTakenRight}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 24,
              marginLeft: 10,
              color: "#55BC05",
            }}
          >
            Done
          </Text>
        </View>
      </View>
      <View style={styles.divBookTaken}>
        <View style={styles.ColumnBookTakenLeft}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            BMX Bike
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 14,
              color: "#9F9F9F",
            }}
          >
            Asep Gigi
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 14,
              color: "#9F9F9F",
            }}
          >
            Jalan. SIsingamangaraja
          </Text>
        </View>

        <View style={styles.ColumnBookTakenRight}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 24,
              marginLeft: 10,
              color: "#55BC05",
            }}
          >
            Done
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E6EA",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  divHeader: {
    // flex: 1,
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5377F9",
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
  },
  divProfile: {
    justifyContent: "center",
    height: 40,
    width: 60,
    borderRadius: 10,
    marginLeft: 5,
  },
  divBalance: {
    // flex: 1,
    backgroundColor: "#F1F1F1",
    height: 50,
    width: 100,
    borderRadius: 10,
    flexDirection: "column",
  },
  labelBook: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "flex-end",
  },
  divBookTaken: {
    height: 100,
    width: 350,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 7,
    marginBottom: 10,
  },
  ColumnBookTakenLeft: {
    marginLeft: 15,
    flexDirection: "column",
    width: 0.5 * width,
    marginBottom: 5,
    marginTop: 10,
  },
  ColumnBookTakenRight: {
    flex: 1,
    flexDirection: "column",
    width: 0.5 * width,
    height: 70,
    marginBottom: 5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 15,
  },
  HistoryContainer: {
    flex: 6,
  },
});
