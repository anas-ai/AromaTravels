import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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
        <Text style={styles.heading}>Welcome to Travel Aroma</Text>
        <Text style={styles.description}>
          Let's roam around the world!!!
        </Text>
        <Text style={styles.description}>
          Travel Aroma offers some of the loveliest destinations and outstanding tour packages.
        </Text>
        <Text style={styles.description}>
          Choose a package or design one as per your requirements and desires.
        </Text>
        <Text style={styles.description}>
          We promise you that traveling with us will be an experience of a lifetime where each place you visit will be beyond compare.
        </Text>
        <Text style={styles.description}>
          Culture, heritage, wildlife, adventure, pilgrimage, nature, and other tours will be covered in our packages, exciting you beyond imagination.
        </Text>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View More Sightseeing!</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  imageContainer: {
    marginBottom: RFValue(20),
  },
  image: {
    // borderRadius: RFValue(5),
    height: RFPercentage(40),
    width: '100%',
    resizeMode:'stretch',
  },
  contentContainer: {
    backgroundColor: '#212121',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(16),
    // borderTopLeftRadius: RFValue(30),
    // borderTopRightRadius: RFValue(30),
    elevation: 5,
    marginTop: RFValue(-30),
  },
  heading: {
    color: 'white',
    fontSize: RFValue(24),
    fontWeight: 'bold',
    marginBottom: RFValue(16),
    textAlign: 'center',
  },
  description: {
    color: 'white',
    marginBottom: RFValue(12),
    lineHeight: RFValue(22),
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#00adef',
    borderRadius: RFValue(8),
    paddingVertical: RFValue(14),
    paddingHorizontal: RFValue(24),
    marginTop: RFValue(20),
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
});

export default Welcome;
