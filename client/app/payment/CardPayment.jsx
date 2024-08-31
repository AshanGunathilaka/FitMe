import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert, // Import Alert
} from "react-native";
import { useRouter } from 'expo-router';

export default function PaymentSettings() {
    const router = useRouter();

    const handleConfirm = () => {
        Alert.alert(
            "Confirmation",
            "Do you want to confirm or not?",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        console.log("Payment Cancelled");
                        router.push("../ItemDetails/blouse"); // Correct navigation call for Cancel
                    },
                    style: "cancel",
                },
                {
                    text: "Confirm",
                    onPress: () => {
                        console.log("Payment Confirmed");
                        router.push("../ItemDetails/blouse"); // Correct navigation call for Confirm
                    },
                },
            ]
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Payment</Text>
            </View>
            <Text style={styles.sectionTitle}>Saved cards:</Text>

            <View style={styles.cardContainer}>
                <Image
                    style={styles.cardLogo}
                    source={{ uri: "https://img.icons8.com/color/48/000000/mastercard-logo.png" }}
                />
                <View style={styles.cardInfo}>
                    <TextInput
                        style={styles.cardInput}
                        value="**** **** **** 3193"
                        editable={false}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.removeText}>Remove card</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                <Image
                    style={styles.cardLogo}
                    source={{ uri: "https://img.icons8.com/color/48/000000/visa.png" }}
                />
                <View style={styles.cardInfo}>
                    <TextInput
                        style={styles.cardInput}
                        value="**** **** **** 4296"
                        editable={false}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.removeText}>Remove card</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Add Card Details:</Text>

            <TextInput
                style={styles.input}
                placeholder="Cardholder's Name"
                
            />

            <TextInput
                style={[styles.input, styles.largeInput]}
                placeholder="Card Number"
               
            />

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.mediumInput]}
                    placeholder="MM/YYYY"
                    secureTextEntry={true}
                />
                <TextInput
                    style={[styles.input, styles.smallInput]}
                    placeholder="CVV"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.addButton} onPress={handleConfirm}>
                <Text style={styles.addButtonText}>Pay Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#7393B3",
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    sectionTitle: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 30,
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 8,
    },
    cardLogo: {
        width: 48,
        height: 48,
    },
    cardInfo: {
        flex: 1,
        marginLeft: 15,
    },
    cardInput: {
        fontSize: 16,
        color: "#333",
    },
    removeText: {
        color: "#FF0000",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    largeInput: {
        flex: 7,
        marginBottom: 10,
    },
    mediumInput: {
        flex: 3,
        marginLeft: 0,
        marginTop: 10,
    },
    smallInput: {
        flex: 2,
        marginLeft: 10,
        marginTop: 10,
    },
    addButton: {
        backgroundColor: "red",
        padding: 15,
        borderColor: "#ffffff",
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 3,
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});
