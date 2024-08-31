import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { Rating } from 'react-native-ratings';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!name || !email || !feedback || rating === 0) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    
      Alert.alert('Thank you!', 'Your feedback has been submitted');
      const feedbackData = {
      name,
      email,
      feedback,
      rating,
    };

    fetch('https://yourapi.com/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert('Thank you!', 'Your feedback has been submitted');
        // Clear the form
        setName('');
        setEmail('');
        setFeedback('');
        setRating(0);
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('Error', 'There was a problem submitting your feedback');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Customer Feedback</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Feedback:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter your feedback"
          value={feedback}
          onChangeText={(text) => setFeedback(text)}
          multiline
          numberOfLines={4}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rating:</Text>
        <Rating
          showRating
          onFinishRating={(value) => setRating(value)}
          style={{ paddingVertical: 10 }}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default FeedbackForm;
