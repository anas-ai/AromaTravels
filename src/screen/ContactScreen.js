import React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Contact from '../components/Contact';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const { width } = Dimensions.get('window');

const links = (url) => {
  Linking.openURL(url)
}

const ContactScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.banner}
        source={require('../images/serviceImg/contact-banner.jpg')}
      >
        <Text style={styles.bannerText}>Contact Us</Text>
      </ImageBackground>

      <View style={styles.contactInfoContainer}>
        <Text style={styles.contactInfoTitle}>Contact Info</Text>
        <AntDesign name='contacts' style={styles.phoneIcon} />
        <Text style={styles.divider}></Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name='person' style={styles.infoIcon} />
          <Text style={styles.infoText}>Travel Aroma</Text>
        </View>

        <View style={styles.infoRow}>
          <Entypo name='location-pin' style={styles.infoIcon} />
          <Text style={styles.infoText}>B-143, Amar Nagar, Sajjan Garh Road, Udaipur,(Raj.) 313001, INDIA</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name='mail' style={styles.infoIcon} />
          <Text style={styles.infoText}>travelaroma2@gmail.com || info@travelaroma.in</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name='call' style={styles.infoIcon} />
          <Text style={styles.infoText}>+91 8290187159 , +91 9664304937</Text>
        </View>
      </View>

      <Contact/>

      <View style={styles.socialContainer}>
        <Text style={styles.contactInfoTitle}>Follow Us</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity onPress={() => links('https://www.facebook.com/Travel-Aroma-100735494824270/')}>
            <Ionicons name='logo-facebook' style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => links('https://www.tripadvisor.in/Attraction_Review-g297672-d19947403-Reviews-Travel_Aroma-Udaipur_Udaipur_District_Rajasthan.html')}>
            <Entypo name='tripadvisor' style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => links('https://www.instagram.com/Travelaroma01/')}>
            <Ionicons name='logo-instagram' style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => links('https://www.travelaroma.in/contact.html#')}>
            <Ionicons name='logo-google' style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  banner: {
    width: '100%',
    height: width * 0.4,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  contactInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  contactInfoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#213e9a',
    marginBottom: 10,
  },
  phoneIcon: {
    fontSize: width * 0.12,
    color: '#213e9a',
    marginBottom:5
  },
  divider: {
    width: '80%',
    height: 2,
    backgroundColor: '#213e9a',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoIcon: {
    marginRight: 20,
    color: '#213e9a',
    fontSize: width * 0.07,
  },
  infoText: {
    flex: 1,
    color: '#252525',
    fontSize:responsiveFontSize(2),
  },
  socialContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  socialIcon: {
    color: '#213e9a',
    fontSize: width * 0.08,
    margin: 8,
  },
});

export default ContactScreen;
