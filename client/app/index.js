import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react';
import { useRouter } from 'expo-router';


const Home = () => {
    const router = useRouter();
    
    return (
        <View>
            <Text style={styles.title}>FitMe</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/auth/login")}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/auth/register")}
                >
                <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

export default Home;


const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 80,
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
//rfce