import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const About = () => {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          style={{width: '100%', height: 120, resizeMode: 'contain'}}
          source={require('../images//aboutImg/about-banner.jpg')}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: 40,
              fontSize: 26,
            }}>
            About Us
          </Text>
        </ImageBackground>
        <Welcome />
        <Contact />
        <View
          style={{
            height: 470,
            width: '100%',
            backgroundColor: '#00adef',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/aboutImg/tripadvisor-banner.png')}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            RECOMMENDED ON THE WORLD'S LARGEST
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            TRAVEL SITE
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                backgroundColor: '#3B3486',
                borderWidth: 1,
                borderColor: 'white',
                padding: 12,
                marginTop: 10,
                paddingHorizontal: 50,
                width: '100%',
                fontWeight: 'bold',
              }}>
              WRITE A PREVIEW
            </Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default About;
