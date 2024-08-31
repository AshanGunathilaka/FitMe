import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
const items = [
  {
    id: 1,
    name: 'Jacket',
    price: 2500.00,
    image: require('../assets/jacket.jpg'), 
  },
  {
    id: 2,
    name: 'Trouser',
    price: 6000.00,
    image: require('../assets/Trouser.jpg'),
  },
  {
    id: 3,
    name: 'Frock',
    price: 2000.00,
    image: require('../assets/Frock.jpg'), 
  },
  {
    id: 4,
    name: 'Skirt',
    price: 3500.00,
    image: require('../assets/Blouse.jpg'), 
  },

  
];



const GroceryDeliveryApp = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clothes List</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.item}>
              {
                item.image ? (
                  <Image 
                    source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
                    style={styles.itemImage} 
                  />
                ) : (
                  <Text>No Image Available</Text>
                )
              }
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>RS {item.price.toFixed(2)}</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}
              onPress={() => router.push("../ItemDetails/blouse")}>
                <Text style={styles.buttonText}
                 >View Details</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={() => router.push("../payment/checkout")}>
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7393B3',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    color: '#fff',
    marginHorizontal: 20,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#999',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#FFC107',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GroceryDeliveryApp;
