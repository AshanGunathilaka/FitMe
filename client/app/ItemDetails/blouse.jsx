/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import { useRouter } from 'expo-router';


export default ProductDetail = () => {
  const router = useRouter();
  const clickEventListener = () => {
    router.push("../delivery/delivery");
   
  }
 
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
        <Image
          style={styles.productImg}
          source={require('../assets/Blouse.jpg')}
        />
        <Text style={styles.name}>Super Soft Jacket</Text>
        <Text style={styles.price}>RS.2500.00</Text>
        <Text style={styles.description}>
        This elegant blouse is crafted from soft, breathable fabric, designed to provide comfort without compromising style. Featuring a flattering silhouette, this blouse has delicate details like subtle pleats and a feminine neckline, perfect for both casual and formal occasions.
        </Text>
      </View>

      
        <View style={styles.starContainer}>
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
        </View>
        <View style={styles.contentColors}>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#00BFFF' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#FF1493' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#00CED1' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#228B22' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#20B2AA' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#FF4500' }]}></TouchableOpacity>
        </View>
        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>XL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={() => clickEventListener()}>
            <Text style={styles.shareButtonText}>Pay Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.feedbackButton} onPress={() => router.push("../payment/checkout")}>
        <Text style={styles.feedbackButtonText}>Feedback</Text>
      </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
    borderRadius: 15, 
    borderColor: 'black',  // Use quotes and proper color format for the border color
    borderWidth: 2,        // Defines the thickness of the border
    marginVertical: 20,    // Adds vertical spacing around the image
    resizeMode: 'cover',   // Ensures the image covers the entire area without distortion
    shadowColor: '#000',   // Adds shadow for a lifted effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,          // Adds elevation for Android shadow
},


  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
  feedbackButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderColor: "#ffffff",
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    marginTop: 20,
    alignSelf: "center",
  },
  feedbackButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
})
