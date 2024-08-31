import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Added TouchableOpacity
import { useRouter } from 'expo-router';


export default InvoiceView = () => {

  const router = useRouter();
  const today = new Date().toLocaleDateString(); 

  const invoiceData = {
    invoiceNumber: '920',
    invoiceDate: today,
    customerName: 'Ashan Gunathilaka',
    customerEmail: 'ashangunathilaka@gmail.com',
    customerAddress: 'New Kandy Road, Malabe',
    items: [
      {
        id: 1,
        name: 'Blouse',
        quantity: 1,
        price: 2500.00,
        total: 2500.00,
      },
    ],
    deliveryCharge: 750.00,  // Added delivery charge
    subtotal: 2500.00,
    total: 3250.00,
  };

  invoiceData.total = invoiceData.subtotal + invoiceData.deliveryCharge; // Calculate the total

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Invoice</Text>
      </View>
      <View style={styles.invoiceInfoContainer}>
        <View style={styles.invoiceInfo}>
          <Text style={styles.label}>Invoice Number:</Text>
          <Text style={styles.text}>{invoiceData.invoiceNumber}</Text>
        </View>
        <View style={styles.invoiceInfo}>
          <Text style={styles.label}>Invoice Date:</Text>
          <Text style={styles.text}>{invoiceData.invoiceDate}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.customerInfoContainer}>
        <Text style={styles.subtitle}>Customer Information</Text>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{invoiceData.customerName}</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{invoiceData.customerEmail}</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>{invoiceData.customerAddress}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.itemsContainer}>
        <Text style={styles.subtitle}>Invoice Items</Text>
        {invoiceData.items.map((item) => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {item.quantity} x RS {item.price.toFixed(2)}
            </Text>
            <Text style={styles.itemTotal}>RS {item.total.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.totalContainer}>
        <View style={styles.invoiceSummary}>
          <Text style={styles.label}>Subtotal:</Text>
          <Text style={styles.total}>RS {invoiceData.subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.invoiceSummary}>
          <Text style={styles.label}>Delivery Charge:</Text>
          <Text style={styles.total}>RS {invoiceData.deliveryCharge.toFixed(2)}</Text>
        </View>
        <View style={styles.invoiceSummary}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.total}>RS {invoiceData.total.toFixed(2)}</Text>
        </View>
      </View>
      
      {/* Added Button */}
      <View style={styles.buttons}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push("../payment/CardPayment")}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    backgroundColor: '#7393B3',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  invoiceInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  invoiceInfo: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 5,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  customerInfoContainer: {
    marginTop: 20,
  },
  customerInfo: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemsContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemTotal: {
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
  },
  invoiceSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

