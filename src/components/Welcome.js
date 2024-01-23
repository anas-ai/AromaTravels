import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Welcome = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity disabled>
          <Image
            style={styles.image}
            source={require('../images/welcome.jpg')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>WELCOME TO TRAVEL AROMA</Text>
        <Text style={styles.description}>
          Let's roam around the world!!!
        </Text>
        <Text style={styles.description}>
          The Travel Aroma provided by us offers some of the loveliest destinations and some outstanding tour packages.
        </Text>
        <Text style={styles.description}>
          You can choose a package or design one as per your requirements and desires.
        </Text>
        <Text style={styles.description}>
          We promise you that traveling with us will be an experience of a lifetime where each place that you visit will be beyond compare.
        </Text>
        <Text style={styles.description}>
          Culture, heritage, wildlife, adventure, pilgrimage, nature, and other tours will be covered in our tour package which will excite you beyond imagination.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View More This Sightseeing!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Add a light background color
  },
  imageContainer: {
    // marginBottom: 20,
  },
  image: {
    borderWidth: 5,
    borderColor: '#00adef',
    height: 380,
    width: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 16,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    color: 'white',
    textAlign: 'justify',
    marginBottom: 12,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#00adef',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Welcome;
