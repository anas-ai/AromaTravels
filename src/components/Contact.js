import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ContactImg = [
  require('../images/work1.jpg'),
  require('../images/hotel.jpg'),
  require('../images/work8.jpg'),
  require('../images/work2.jpg'),
  require('../images/work5.jpg'),
  require('../images/work10.jpg'),
];

const Contact = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <View style={styles.imageContainer}>
        {ContactImg.map((item, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={item} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </View> */}

      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Travel Aroma Enquiry Form</Text>

        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Your Email" />
        <TextInput style={styles.input} placeholder="Your Phone Number" />
        <TextInput style={styles.input} placeholder="Select Country" />
        <TextInput style={styles.input} placeholder="Travel Date" />
        <TextInput style={styles.input} placeholder="Duration of Travel e.g., 2N-3D" />
        <TextInput style={styles.input} placeholder="People Traveling Adult" />
        <TextInput style={styles.input} placeholder="People Traveling Children" />
        <TextInput style={styles.input} placeholder="Your Message" multiline />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: '#FFFDD0',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFDD0',
  },
  imageWrapper: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 155,
    width: '100%',
  },
  formContainer: {
    alignItems: 'center',
    margin: 20,
  },
  formHeading: {
    color: '#213e9a',
    fontSize: 27,
    fontWeight: 'normal',
    marginVertical: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    color:'black'
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Contact;
