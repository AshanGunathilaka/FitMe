import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
// import { LinearGradient } from "expo-linear-gradient";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Fontisto from "@expo/vector-icons/Fontisto";

const TabHome = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("../delivery/delivery")}
        >
        <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("../feedback/feedback")}
        >
        <Text style={styles.buttonText}>Feeback</Text>
        </TouchableOpacity>
        
      </View>
    </View>


  );
};

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  techList: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  techItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
  },
  techText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",    
    left: 0,
    right: 0,
    marginTop: 250,
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    width: 150,
    borderRadius: 25,
    elevation: 3,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});