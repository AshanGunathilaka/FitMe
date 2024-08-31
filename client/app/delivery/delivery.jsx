import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native"; 
import { Formik } from "formik";
import * as Yup from "yup";
import DateTimePicker from '@react-native-community/datetimepicker';

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string().required("Phone number is required"),
  preferredDate: Yup.string().required("Preferred date is required"),
  preferredTime: Yup.string().required("Preferred time is required"),
  notes: Yup.string().optional(), // Optional field for text area
});

export default function SimpleForm() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Your Delivery</Text>
      {message ? (
        <Text style={messageType === "error" ? styles.errorText : styles.successText}>
          {message}
        </Text>
      ) : null}
      <Formik
        initialValues={{
          name: "",
          address: "",
          phone: "",
          preferredDate: "",
          preferredTime: "",
          notes: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          setMessage(`Name: ${values.name}, Address: ${values.address}, Phone: ${values.phone}, Date: ${values.preferredDate}, Time: ${values.preferredTime}, Notes: ${values.notes}`);
          setMessageType("success");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View style={styles.form}>
            
            {/* Name */}
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <Text style={styles.errorText}>{errors.name}</Text>
            ) : null}

            {/* Address */}
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
            />
            {errors.address && touched.address ? (
              <Text style={styles.errorText}>{errors.address}</Text>
            ) : null}

            {/* Phone Number */}
            <Text style={styles.label}>Phone No</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone No"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              keyboardType="numeric"
            />
            {errors.phone && touched.phone ? (
              <Text style={styles.errorText}>{errors.phone}</Text>
            ) : null}

            {/* Preferred Date */}
            <Text style={styles.label}>Preferred Date</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="Select Date"
                value={values.preferredDate}
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  setShowDatePicker(Platform.OS === "ios");
                  if (date) {
                    setSelectedDate(date);
                    setFieldValue('preferredDate', date.toLocaleDateString());
                  }
                }}
              />
            )}
            {errors.preferredDate && touched.preferredDate ? (
              <Text style={styles.errorText}>{errors.preferredDate}</Text>
            ) : null}

            {/* Preferred Time */}
            <Text style={styles.label}>Preferred Time</Text>
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="Select Time"
                value={values.preferredTime}
                editable={false}
              />
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                display="default"
                onChange={(event, time) => {
                  setShowTimePicker(Platform.OS === "ios");
                  if (time) {
                    setSelectedTime(time);
                    setFieldValue('preferredTime', time.toLocaleTimeString());
                  }
                }}
              />
            )}
            {errors.preferredTime && touched.preferredTime ? (
              <Text style={styles.errorText}>{errors.preferredTime}</Text>
            ) : null}

            {/* Notes (Text Area) */}
            <Text style={styles.label}>Additional Notes</Text>
            <TextInput
              style={[styles.input, styles.textArea]} // Added style for text area
              placeholder="Enter any additional notes here"
              onChangeText={handleChange("notes")}
              onBlur={handleBlur("notes")}
              value={values.notes}
              multiline={true}
              numberOfLines={4} // Adjust the number of lines visible
            />
            {errors.notes && touched.notes ? (
              <Text style={styles.errorText}>{errors.notes}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#C70039"
  },
  form: {
    width: "100%",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100, // Adjust height as needed
    textAlignVertical: 'top', // Align text to the top of the area
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  successText: {
    color: "green",
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: "#C70039",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
