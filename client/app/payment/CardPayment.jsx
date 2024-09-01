import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from 'expo-router';
import axios from 'axios'; // Ensure axios is imported

export default function PaymentSettings() {
  const router = useRouter();

  const [cardname, setCardname] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [expiredate, setExpiredate] = useState('');
  const [securitycode, setSecuritycode] = useState('');

  const handleConfirm = () => {

    if (!cardnumber.trim()) {
        // Check if cardnumber is empty
        Alert.alert("Validation Error", "Card number is required.");
        return; // Exit the function if card number is empty
      }
      
    Alert.alert(
      "Confirmation",
      "Do you want to confirm or not?",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Payment Cancelled");
            router.push("/(tabs)");
          },
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            console.log("Payment Confirmed");
            submitPayment(); // Call the submit function on Confirm
            router.push("/(tabs)");
          },
        },
      ]
    );
  };

  const submitPayment = () => {
    axios
      .post('http://192.168.173.21:8000/pay/create', {
        cardname: cardname,
        cardnumber: cardnumber,
        expiredate: expiredate,
        securitycode: securitycode,
      })
      .then((response) => {
        console.log("Response: ", response.data);
        Alert.alert("Success", "Payment processed successfully!");
  
      })
      .catch((error) => {
        console.error("Error: ", error);
        Alert.alert("Error", "Payment failed. Please try again.");

      });
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
        value={cardname}
        onChangeText={setCardname} // Correct usage for React Native
      />

      <TextInput
        style={[styles.input, styles.largeInput]}
        placeholder="Card Number"
        value={cardnumber}
        onChangeText={setCardnumber} // Correct usage for React Native
        keyboardType="numeric"
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.mediumInput]}
          placeholder="MM/YYYY"
          value={expiredate}
          onChangeText={setExpiredate} 
           keyboardType="numeric"// Correct usage for React Native
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="CVV"
          value={securitycode}
          onChangeText={setSecuritycode} // Correct usage for React Native
          secureTextEntry={true}
          keyboardType="numeric"
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
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
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
