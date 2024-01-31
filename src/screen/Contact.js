import React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet,TextInput,TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Footer from '../components/Footer';

const links = (url)=>{
  Linking.openURL(url)
}


const Contact = () => {
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
          <Text style={{fontSize:15,fontWeight:'bold',color:'#213e9a'}}>_________________________</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name='person' style={styles.infoIcon} />
          <Text style={styles.infoText}>Travel Aroma</Text>
        </View>

        <View style={styles.infoRow}>
          <EvilIcon name='location' style={styles.infoIcon} />
          <Text style={styles.infoText}>B-143, Amar Nagar, Sajjan Garh Road, Udaipur,(Raj.) 313001, INDIA</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name='mail' style={styles.infoIcon} />
          <Text style={styles.infoText}>travelaroma2@gmail.com || info@travelaroma.in</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name='call' style={styles.infoIcon} />
          <Text style={styles.infoText}>+91 8290187159 ; +91 9664304937</Text>
        </View>
      </View>

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

      <View style={styles.socialContainer}>
        <Text style={styles.contactInfoTitle}>Follow Us</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity onPress={()=>links('https://www.facebook.com/Travel-Aroma-100735494824270/')}>
          <Ionicons name='logo-facebook' style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>links('https://www.tripadvisor.in/Attraction_Review-g297672-d19947403-Reviews-Travel_Aroma-Udaipur_Udaipur_District_Rajasthan.html')}>
          <Entypo name='tripadvisor' style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>links('https://www.instagram.com/Travelaroma01/')}>
          <Ionicons name='logo-instagram' style={styles.socialIcon} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>links('https://www.travelaroma.in/contact.html#')}>

          <Ionicons name='logo-google' style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Footer/> */}
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
    height: 120,
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
    fontSize: 50,
    color: '#213e9a',
    marginTop: 8,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
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
    fontSize: 40,
  },
  infoText: {
    color: '#252525',
    fontSize: 18,
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
    fontSize: 25,
    margin: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
